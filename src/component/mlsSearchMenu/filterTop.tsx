"use client";

import { useState } from "react";
import MLSAdvanceSearch from "./MLSAdvanceSearch";
import MLSToolbar from "./MLSToolbar";
import { FilterTopProps } from "@/types/Property";

const FilterTop = ({ handleSearch, searchFilters }: FilterTopProps) => {
    const [openAllFilter, setOpenAllFilter] = useState(false);
    const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
    const [isPropertyTypeDropdownOpen, setIsPropertyTypeDropdownOpen] = useState(false);
    const [isBedDropdownOpen, setIsBedDropdownOpen] = useState(false);
    const [isBathDropdownOpen, setIsBathDropdownOpen] = useState(false);
    const handlePriceDropdownToggle = () => {
        setIsPriceDropdownOpen(!isPriceDropdownOpen);   
        setIsBathDropdownOpen(false);
        setIsBedDropdownOpen(false);
        setIsPropertyTypeDropdownOpen(false);
    }
    const handlePropertyTypeDropdownToggle = () => {
        setIsPropertyTypeDropdownOpen(!isPropertyTypeDropdownOpen);
        setIsBathDropdownOpen(false);
        setIsBedDropdownOpen(false);
        setIsPriceDropdownOpen(false);
    }
    const handleBedDropdownToggle = () => {
        setIsBedDropdownOpen(!isBedDropdownOpen);
        setIsBathDropdownOpen(false);
        setIsPropertyTypeDropdownOpen(false);
        setIsPriceDropdownOpen(false);
    }

    const handleBathDropdownToggle = () => {
        setIsBathDropdownOpen(!isBathDropdownOpen);
        setIsBedDropdownOpen(false);
        setIsPropertyTypeDropdownOpen(false);
        setIsPriceDropdownOpen(false);
    }

    return (
        <div className="flex flex-1 justify-between items-center 
        p-4 bg-white shadow rounded mls-searchmenu container mx-auto">
            <div className="flex mls-searchmenu items-center 
            gap-4 bg-white p-4 rounded shadow container mx-auto flex items-center gap-4">
                {/* Search Box */}
                <div className="relative flex-3">
                    <input
                        onChange={(e) => handleSearch(e.target.value, 'keyword')}
                        type="text"
                        placeholder="Search properties..."
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] focus:ring-opacity-20 w-full"
                    />
                </div>

                {/* Property Type Dropdown */}
                <div className="relative flex-2">
                    <button
                        className="border border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#EDB75E]"
                        onClick={handlePropertyTypeDropdownToggle}
                    >
                        Property Type
                        <span className="float-right">▼</span>
                    </button>

                    {isPropertyTypeDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#1c1d1d] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Property Type</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'property_type')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>All Types</option>
                                            <option value="house" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>House</option>
                                            <option value="apartment" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>Apartment</option>
                                            <option value="condo" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>Condo</option>
                                            <option value="townhouse" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>Townhouse</option>
                                            <option value="villa" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>Villa</option>
                                            <option value="penthouse" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>Penthouse</option>
                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Price Dropdown */}
                <div className="relative flex-1">
                    <button
                        className="border border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#EDB75E]"
                        onClick={handlePriceDropdownToggle}
                    >
                        {
                        // searchFilters.price_min && searchFilters.price_max
                        //     ? `$${Number(searchFilters.price_min).toLocaleString()} - $${Number(searchFilters.price_max).toLocaleString()}`
                        //     : searchFilters.price_min
                        //         ? `From $${Number(searchFilters.price_min).toLocaleString()}`
                        //         : searchFilters.price_max
                        //             ? `Up to $${Number(searchFilters.price_max).toLocaleString()}`
                        //             :
                                     'Price'
                        }
                        <span className="float-right">▼</span>
                    </button>

                    {isPriceDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#1c1d1d] text-white p-2 rounded">
                                    {/* Min Price */}
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Min Price</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            value={searchFilters.price_min || ''}
                                            onChange={(e) => handleSearch(e.target.value, 'price_min')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Min</option>
                                            <option value="50000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$50K</option>
                                            <option value="100000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$100K</option>
                                            <option value="150000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$150K</option>
                                            <option value="200000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$200K</option>
                                            <option value="250000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$250K</option>
                                            <option value="300000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$300K</option>
                                            <option value="400000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$400K</option>
                                            <option value="500000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$500K</option>
                                            <option value="750000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$750K</option>
                                            <option value="1000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$1M</option>
                                            <option value="1500000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$1.5M</option>
                                            <option value="2000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$2M</option>
                                            <option value="3000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$3M</option>
                                            <option value="5000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$5M</option>
                                        </select>
                                    </div>

                                    {/* Max Price */}
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Max Price</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            value={searchFilters.price_max || ''}
                                            onChange={(e) => handleSearch(e.target.value, 'price_max')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Max</option>
                                            <option value="100000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$100K</option>
                                            <option value="150000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$150K</option>
                                            <option value="200000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$200K</option>
                                            <option value="250000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$250K</option>
                                            <option value="300000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$300K</option>
                                            <option value="400000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$400K</option>
                                            <option value="500000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$500K</option>
                                            <option value="750000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$750K</option>
                                            <option value="1000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$1M</option>
                                            <option value="1500000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$1.5M</option>
                                            <option value="2000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$2M</option>
                                            <option value="3000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$3M</option>
                                            <option value="5000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$5M</option>
                                            <option value="10000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$10M</option>
                                            <option value="20000000" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>$20M+</option>
                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bed Dropdown */}
                <div className="relative flex-1">
                    <button
                        className="border border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#EDB75E]"
                        onClick={handleBedDropdownToggle}
                    >
                        Bed
                        <span className="float-right">▼</span>
                    </button>

                    {isBedDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#1c1d1d] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bedrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bed_min')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Min</option>
                                            <option value="1" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bedrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bed_max')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Max</option>
                                            <option value="1" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>6+</option>
                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bath Dropdown */}
                <div className="relative flex-1">
                    <button
                        className="border border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#EDB75E]"
                        onClick={handleBathDropdownToggle}
                    >
                        Bath
                        <span className="float-right">▼</span>
                    </button>

                    {isBathDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#1c1d1d] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bathrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bath_min')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Min</option>
                                            <option value="1" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                      <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bathrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDB75E] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bath_max')}
                                            style={{
                                                backgroundColor: '#1c1d1d',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>No Max</option>
                                            <option value="1" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}>6+</option>
                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative flex-1">
                    {/* Advance Filter Button */}
                    <button onClick={() => setOpenAllFilter(true)} className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">
                        All Filter
                    </button>
                </div>
                <div className="relative flex-1">
                    {/* Save Search Button */}
                    <button className="bg-[#EDB75E] text-white font-bold px-4 py-2 rounded hover:bg-[#d9a04f] transition">
                        Save Search
                    </button>
                </div>

            </div>
            <MLSAdvanceSearch
                open={openAllFilter}
                onClose={() => setOpenAllFilter(false)}
                onApply={(checked) => console.log("Filter applied:", checked)}
                handleSearch={handleSearch}
                searchFilters={searchFilters} />
        </div>
    );
}

export default FilterTop;
