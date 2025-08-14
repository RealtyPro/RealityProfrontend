'use client';

import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { MlsMapModalCard } from './MlsMapModalCard';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '30px',
};

type LatLng = { lat: number; lng: number };
interface MapProps {
  // list of markers; each marker must include lat, lng and can include any extra data
  markers?: Array<LatLng & { [key: string]: any }>;
  // callback when user hovers over a marker; null when hover ends
  onMarkerHover?: (data: any | null) => void;
}

const GoogleMapComponent = ({ markers = [], onMarkerHover }: MapProps) => {
  const [active, setActive] = useState<any | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  // reference to map instance
  const mapRef = useRef<google.maps.Map | null>(null);
  const boundsFittedRef = useRef(false);

  // centre map on the first marker or a default location (fallback)
  const defaultCenter: LatLng = markers[0] ?? { lat: 28.6139, lng: 77.209 };
  const [position] = useState(defaultCenter);

  // onLoad callback to store map and fit bounds
  const handleOnLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    if (markers.length && !boundsFittedRef.current) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((m) => bounds.extend(m));
      map.fitBounds(bounds);
      boundsFittedRef.current = true;
    }
  }, [markers]);

  // Re-fit bounds whenever marker list changes
  useEffect(() => {
    if (!mapRef.current) return;
    if (boundsFittedRef.current) return; // prevent refit if already done
    if (markers.length) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((m) => bounds.extend(m));
      mapRef.current.fitBounds(bounds);
      boundsFittedRef.current = true;
    }
  }, [markers]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      onLoad={handleOnLoad}
    >
      {markers.length ? (
            <>
              {markers.map((m: any, idx) => (
                <Marker
                  key={idx}
                  position={m}
                  onMouseOver={() => {
                    setActive(m);
                    onMarkerHover && onMarkerHover(m);
                  }}
                  icon={{
                    path: "M0 0 H 60 V 30 H 0 Z",
                    fillColor: "#EDB75E",
                    fillOpacity: 1,
                    strokeColor: "#EDB75E",
                    strokeWeight: 1,
                    labelOrigin: new google.maps.Point(30, 20),
                  }}
                  label={{
                    text: `$${Math.round(Number(m.price || 0)/1000)}K`,
                    color: "#000",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
              ))}
              {active && (
                <InfoWindow

                  position={{ lat: active.lat, lng: active.lng }}
                  onCloseClick={() => setActive(null)}
                >
                  <div style={{ minWidth: 250 ,minHeight: 200}} className='black-div'>
                    <MlsMapModalCard item={active} />
                   
                  </div>
                </InfoWindow>
              )}
            </>
      ) : (
        <Marker position={position} />
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
