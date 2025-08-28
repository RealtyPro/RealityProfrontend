"use client";
import { useNeighborhoodList } from "@/services/neighborhood/NeighborhoodQueries";
import { SearchFilters } from "@/types/Property";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MlsListingOptionsProps {
    handleOpenMapPropertyGrid: () => void;
    handleOpenMapGrid?: () => void;
    handleOpenPropertyGrid?: () => void;
    openMapPropertyGrid?: boolean;
    openMapGrid?: boolean;
    openPropertyGrid?: boolean;
    handleSearch: (value: any, key: keyof SearchFilters) => void;
    searchFilters: SearchFilters;
    showMap:boolean;
    handleShowmapDongle:()=>void;
}
type Neighborhood = {
    id: number;
    name: string;
};

export const MlsListingOptions = ({ handleOpenMapPropertyGrid, handleOpenMapGrid,
    handleOpenPropertyGrid, openMapPropertyGrid, openMapGrid, openPropertyGrid, handleSearch
    , searchFilters,showMap,handleShowmapDongle }: MlsListingOptionsProps) => {
    const [neighborhood, setNeighborhood] = useState<Neighborhood[]>([]);
    const loc = typeof window !== "undefined" ? sessionStorage.getItem("prop_location") ?? "" : "";

    const { data: neighborListDatas, isLoading, error } =
        useNeighborhoodList();
    useEffect(() => {
        if (loc != "") {

        }
    }, [loc]);
    useEffect(() => {
        if (neighborListDatas && !isLoading && !error) {
            setNeighborhood(neighborListDatas.data || []);
        }
    }, [neighborListDatas, isLoading, error]);
    return (
        <div className="w-full p-4 bg-white shadow rounded mls-searchmenu mrgn54 overflow-x-auto">
            <div className="flex flex-wrap mls-searchmenu items-center gap-4 bg-white p-4 rounded 
            container shadow w-full">
                {/* Search Box */}

                {/* <div className="relative flex-1">
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] text-white "
                        style={{ backgroundColor: '#000000', color: '#ffffff' }}
                        value={searchFilters.property_type}
                        onChange={(e) => handleSearch(e.target.value, 'property_type')}
                    >
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="" className="bg-black text-white">All Listing</option>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="house">House</option>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="apartment">Apartment</option>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="condo">Condo</option>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="townhouse">Townhouse</option>
                    </select>
                </div> */}
                {/* <div className="relative flex-1">
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] text-white"
                        style={{ backgroundColor: '#000000', color: '#ffffff' }}
                        value={searchFilters.mls_city}
                        onChange={(e) => handleSearch(e.target.value, 'mls_city')}>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="">Location</option>
                        {neighborhood.map((item) => (
                            <option key={item.id} value={item.name}
                                style={{ backgroundColor: '#000000', color: '#ffffff' }} >{item.name}</option>
                        ))}

                    </select>
                </div> */}
                {/* <div className="relative flex-2">  </div> */}
                {/* <div className="relative flex-1">
                    <div className="flex items-center  w-48">
                        <span className="text-sm mr-5">Show Map</span>

                        <label className="relative inline-block w-11 h-6">
                            <input type="checkbox" className="sr-only peer"  
                            checked={showMap}
                            onChange={handleShowmapDongle}/>
                            <div className="w-11 h-6 bg-black border border-[#313131] 
                            rounded-full peer-checked:bg-black transition-colors duration-300 
                            focus:ring-2 focus:ring-[#151515]"></div>
                            <div className="absolute left-0.5 top-0.5 bg-[#d4a053] w-5 h-5 
                            rounded-full transition-transform duration-300
                             peer-checked:translate-x-5"></div>
                        </label>
                    </div>
                </div> */}


                <div className="relative flex-1">
                    {/* Beds Dropdown */}
                    <select
                        className="w-full border  max-w-[180px] border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515]  text-white "
                        style={{ backgroundColor: '#000000', color: '#ffffff' }} >
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="">Sort by Newest</option>
                        <option style={{ backgroundColor: '#000000', color: '#ffffff' }} value="1">Sort by Oldest</option>
                    </select>
                    {/* Custom Arrow */}
                    {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">▼</span> */}
                </div>



                <div className="relative flex-1 flex flex-direction-row justify-between 
                items-center mrgn75 max-w-[180px] alr">
                    {/* Save Search Button */}

                    <button className="mls-listing-option-list mls-icon-pdding"
                        onClick={handleOpenPropertyGrid}>
                        <Image
                            src={openPropertyGrid ? "/images/property-grid-active-icon.png" : "/images/property-grid-icon.png"}
                            alt="Save Search"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </button>
                    <button className="mls-listing-option-list mls-icon-pdding"
                        onClick={handleOpenMapGrid}>
                        <Image
                            src={openMapGrid ? "/images/map-filter-active-icon.png" : "/images/map-icon-filter.png"}
                            alt="Save Search"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </button>
                    <button className="mls-listing-option-list mls-icon-pdding"
                        onClick={handleOpenMapPropertyGrid}>
                        <Image
                            src={openMapPropertyGrid ? "/images/map-grid-active-icon.png" : "/images/map-grid-icon.png"}
                            alt="Save Search"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </button>
                </div>

            </div >



        </div>
    )
}