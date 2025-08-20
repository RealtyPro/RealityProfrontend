'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { MlsMapModalCard } from './MlsMapModalCard';

const containerStyle = {
  width: '100%',
  height: '1000px',
  borderRadius: '30px',
};

const mapStyles = [
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#a6e6a3" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#aadaff" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ visibility: "on" }],
  },
];

type LatLng = { lat: number; lng: number };
interface MapProps {
  markers?: Array<LatLng & { price?: number; [key: string]: any }>;
  onMarkerHover?: (data: any | null) => void;
}

const GoogleMapComponent = ({ markers = [], onMarkerHover }: MapProps) => {
  const [active, setActive] = useState<any | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const overlaysRef = useRef<google.maps.OverlayView[]>([]);
  const boundsFittedRef = useRef(false);

  const defaultCenter: LatLng = markers[0] ?? { lat: 8.5590016, lng: 77.0059895 };

  // Create floating price labels as overlays
  const createPriceOverlay = useCallback(
    (map: google.maps.Map, m: any) => {
      const div = document.createElement('div');
      const price = Number(m.price || 0);
      div.innerText = price >= 1_000_000
        ? `$${(price / 1_000_000).toFixed(2)}m`
        : `$${Math.round(price / 1000)}k`;

      Object.assign(div.style, {
        background: '#8B5C28',
        color: 'white',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        position: 'absolute' as const,
      });

      div.onmouseover = () => {
        setActive(m);
        onMarkerHover?.(m);
      };
      div.onclick = () => {
        setActive(m);
      };

      const overlay = new google.maps.OverlayView();
      overlay.onAdd = function () {
        // Use overlayMouseTarget so the div can receive pointer events and avoid TS error
        this.getPanes()?.overlayMouseTarget?.appendChild(div);
      };
      overlay.draw = function () {
        const pos = this.getProjection()?.fromLatLngToDivPixel(
          new google.maps.LatLng(m.lat, m.lng)
        );
        if (pos) {
          div.style.left = `${pos.x}px`;
          div.style.top = `${pos.y}px`;
        }
      };
      overlay.onRemove = function () {
        div.parentNode?.removeChild(div);
      };
      overlay.setMap(map);

      return overlay;
    },
    [onMarkerHover]
  );

  const handleOnLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

      // Fit map bounds to markers once
      if (markers.length && !boundsFittedRef.current) {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach((m) => bounds.extend(m));
        map.fitBounds(bounds);
        boundsFittedRef.current = true;
      }

      // Clear old overlays
      overlaysRef.current.forEach((o) => o.setMap(null));
      overlaysRef.current = [];

      // Create new overlays
      markers.forEach((m) => {
        const ov = createPriceOverlay(map, m);
        overlaysRef.current.push(ov);
      });
    },
    [markers, createPriceOverlay]
  );

  useEffect(() => {
    if (!mapRef.current || boundsFittedRef.current) return;
    if (markers.length) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach((m) => bounds.extend(m));
      mapRef.current.fitBounds(bounds);
      boundsFittedRef.current = true;
    }
  }, [markers]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      
      zoom={7}
      onLoad={handleOnLoad}
      options={{
        mapTypeId: 'roadmap', // key: default Google look
        styles: mapStyles,     // no custom styling
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: true,
      }}
    >
      {active && (
        <InfoWindow
          position={{ lat: active.lat, lng: active.lng }}
          onCloseClick={() => setActive(null)}
        >
          <div style={{ minWidth: 295, minHeight: 220 }} className="black-div">
            <MlsMapModalCard item={active} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
