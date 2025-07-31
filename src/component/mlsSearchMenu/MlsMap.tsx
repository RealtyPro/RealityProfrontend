'use client';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from 'react';

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
    googleMapsApiKey: 'AIzaSyBebKRxO32tCMD-9kzex13fYGyWdjSvCdU',
  });

  // centre map on the first marker or a default location
  const defaultCenter: LatLng = markers[0] ?? { lat: 28.6139, lng: 77.209 };
  const [position] = useState(defaultCenter);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={12}
    >
      {markers.length
        ? markers.map((m, idx) => <Marker key={idx} position={m} />)
        : <Marker position={position} />}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
