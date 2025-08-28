import React, { useRef, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { HiOutlineLocationMarker } from "react-icons/hi";

const libraries: ("places")[] = ["places"];

const LocationSearchInput = <T extends string>({ handleSearch, searchKey }: {
  handleSearch: (value: string, key: T) => void;
  searchKey: T;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries,
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"],
      componentRestrictions: { country: "us" }, // optional
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) return;
      
      handleSearch(place.formatted_address ?? "", searchKey);
    });
  }, [isLoaded, handleSearch, searchKey]);

  return (
    <div className="relative flex flex-1 min-w-[200px]">
      <span className="absolute inset-y-0 left-0 flex items-center pr-2 pl-3 text-gray-400">
        <HiOutlineLocationMarker size={"15px"} color={"#edb75e"} />
      </span>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search by city, country, ZIP"
        className="border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] focus:ring-opacity-20 w-full"
        onChange={(e) => handleSearch(e.target.value, searchKey)}
      />
    </div>
  );
};

export default LocationSearchInput;
