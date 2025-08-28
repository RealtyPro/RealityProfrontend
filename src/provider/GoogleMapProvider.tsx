// app/layout.tsx or a dedicated client component wrapper
'use client';
import { useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

// const libraries: ("places" | "maps")[] = ["places", "maps"];
const libraries: ("places"  )[] = ["places"];

export default function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (!isLoaded) return <p>Loading Google Maps...</p>;

  return <>{children}</>;
}
