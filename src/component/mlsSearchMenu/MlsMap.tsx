'use client';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useRef, useCallback, useEffect } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '30px',
};

type LatLng = { lat: number; lng: number };
interface MapProps {
  markers?: LatLng[];           // list of positions to plot
}

const GoogleMapComponent = ({ markers = [] }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  // reference to map instance
  const mapRef = useRef<google.maps.Map | null>(null);

  // centre map on the first marker or a default location (fallback)
  const defaultCenter: LatLng = markers[0] ?? { lat: 28.6139, lng: 77.209 };
  const [position] = useState(defaultCenter);

  // onLoad callback to store map and fit bounds
  const handleOnLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    if (markers.length) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((m) => bounds.extend(m));
      map.fitBounds(bounds);
    }
  }, [markers]);

  // Re-fit bounds whenever marker list changes
  useEffect(() => {
    if (mapRef.current && markers.length) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((m) => bounds.extend(m));
      mapRef.current.fitBounds(bounds);
    }
  }, [markers]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={12}
      onLoad={handleOnLoad}
    >
      {markers.length
        ? markers.map((m, idx) => <Marker key={idx} position={m} />)
        : <Marker position={position} />}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
