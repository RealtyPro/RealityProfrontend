"use client";

import { useState } from "react";
import MLSAdvanceSearch from "./MLSAdvanceSearch";
import MLSToolbar from "./MLSToolbar";
import { FilterTopProps } from "@/types/Property";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { TbBuildingEstate } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { TbRulerMeasure2 } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiDollar } from "react-icons/bi";
const FilterTop = ({ handleSearch, searchFilters,handleSaveSearch }: FilterTopProps) => {
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
        <div className="w-full p-4 bg-white shadow rounded mls-searchmenu overflow-x-auto">
            <div className="flex flex-wrap mls-searchmenu items-center gap-4 bg-white p-4  rounded
             shadow container mx-auto">
                {/* Search Box */}
                <div className="relative flex flex-1 min-w-[200px]">
                    <span className="absolute inset-y-0 left-0 flex items-center pr-2 pl-3 text-gray-400">
                        <HiOutlineLocationMarker size={"15px"} color={'#edb75e'}/>   {/* Or any other icon */}
                    </span>
                    <input
                        onChange={(e) => handleSearch(e.target.value, 'keyword')}
                        type="text"
                        placeholder="Search by city, country, ZIP "
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] focus:ring-opacity-20 w-full"
                    />
                </div>

                {/* Property Type Dropdown */}
                <div className="relative flex flex-1 min-w-[160px]">
                    <button

                        className="no-p-r border search-padding border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#151515]"
                        onClick={handlePropertyTypeDropdownToggle}
                    >
                        <span className="float-left"><TbBuildingEstate
                         className="mt-4  mr-4"
                         size={"15px"} color={'#edb75e'} /></span>

                        Property Type
                        <span className="float-right"><RiArrowDownSLine size={"20px"} /></span>
                    </button>

                    {isPropertyTypeDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#000000] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Property Type</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'property_type')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>All Types</option>
                                            <option value="house" style={{ backgroundColor: '#000000', color: '#ffffff' }}>House</option>
                                            <option value="apartment" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Apartment</option>
                                            <option value="condo" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Condo</option>
                                            <option value="townhouse" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Townhouse</option>
                                            <option value="villa" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Villa</option>
                                            <option value="penthouse" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Penthouse</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Price Dropdown */}
                <div className="relative flex flex-1 min-w-[160px]">
                    
                    <button
                        className="border search-padding border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#151515]"
                        onClick={handlePriceDropdownToggle}
                    >
                         <span className="float-left"><BiDollar
                         className="mt-4  mr-4"
                         size={"15px"} color={'#edb75e'} /></span>
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
                        <span className="float-right"><RiArrowDownSLine size={"20px"} /></span>
                    </button>

                    {isPriceDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#000000] text-white p-2 rounded">
                                    {/* Min Price */}
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Min Price</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            value={searchFilters.price_min || ''}
                                            onChange={(e) => handleSearch(e.target.value, 'price_min')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Min</option>
                                            <option value="50000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$50K</option>
                                            <option value="100000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$100K</option>
                                            <option value="150000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$150K</option>
                                            <option value="200000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$200K</option>
                                            <option value="250000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$250K</option>
                                            <option value="300000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$300K</option>
                                            <option value="400000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$400K</option>
                                            <option value="500000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$500K</option>
                                            <option value="750000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$750K</option>
                                            <option value="1000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$1M</option>
                                            <option value="1500000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$1.5M</option>
                                            <option value="2000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$2M</option>
                                            <option value="3000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$3M</option>
                                            <option value="5000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$5M</option>
                                        </select>
                                    </div>

                                    {/* Max Price */}
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Max Price</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            value={searchFilters.price_max || ''}
                                            onChange={(e) => handleSearch(e.target.value, 'price_max')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Max</option>
                                            <option value="100000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$100K</option>
                                            <option value="150000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$150K</option>
                                            <option value="200000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$200K</option>
                                            <option value="250000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$250K</option>
                                            <option value="300000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$300K</option>
                                            <option value="400000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$400K</option>
                                            <option value="500000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$500K</option>
                                            <option value="750000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$750K</option>
                                            <option value="1000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$1M</option>
                                            <option value="1500000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$1.5M</option>
                                            <option value="2000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$2M</option>
                                            <option value="3000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$3M</option>
                                            <option value="5000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$5M</option>
                                            <option value="10000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$10M</option>
                                            <option value="20000000" style={{ backgroundColor: '#000000', color: '#ffffff' }}>$20M+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bed Dropdown */}
                <div className="relative flex flex-1 min-w-[120px]">
                    <button
                        className="border search-padding border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#151515]"
                        onClick={handleBedDropdownToggle}
                    ><span className="float-left"><IoBedOutline
                         className="mt-4  mr-4"
                         size={"15px"} color={'#edb75e'} /></span>
                        Bed
                        <span className="float-right"><RiArrowDownSLine size={"20px"} /></span>
                    </button>

                    {isBedDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#000000] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bedrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bed_min')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Min</option>
                                            <option value="1" style={{ backgroundColor: '#000000', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#000000', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#000000', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#000000', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bedrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bed_max')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Max</option>
                                            <option value="1" style={{ backgroundColor: '#000000', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#000000', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#000000', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#000000', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bath Dropdown */}
                <div className="relative flex flex-1 min-w-[120px]">
                    <button
                        className="border search-padding border-gray-300 rounded px-3 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-[#151515]"
                        onClick={handleBathDropdownToggle}
                    >
                        <span className="float-left"><PiBathtub
                         className="mt-4  mr-4"
                         size={"15px"} color={'#edb75e'} /></span>
                        Bath
                        <span className="float-right"><RiArrowDownSLine size={"20px"} /></span>
                    </button>

                    {isBathDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-black border-gray-300 rounded-md shadow-lg z-50 mt-1 p-4">
                            <div className="space-y-3">
                                <div className="flex minwidth300 gap-3 bg-[#000000] text-white p-2 rounded">
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bathrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bath_min')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Min</option>
                                            <option value="1" style={{ backgroundColor: '#000000', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#000000', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#000000', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#000000', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        {/* <label className="block text-sm font-medium text-white mb-1">Bathrooms</label> */}
                                        <select
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515] bg-black text-white"
                                            onChange={(e) => handleSearch(e.target.value, 'bath_max')}
                                            style={{
                                                backgroundColor: '#000000',
                                                color: '#ffffff'
                                            }}
                                        >
                                            <option value="" style={{ backgroundColor: '#000000', color: '#ffffff' }}>No Max</option>
                                            <option value="1" style={{ backgroundColor: '#000000', color: '#ffffff' }}>1+</option>
                                            <option value="2" style={{ backgroundColor: '#000000', color: '#ffffff' }}>2+</option>
                                            <option value="3" style={{ backgroundColor: '#000000', color: '#ffffff' }}>3+</option>
                                            <option value="4" style={{ backgroundColor: '#000000', color: '#ffffff' }}>4+</option>
                                            <option value="5" style={{ backgroundColor: '#000000', color: '#ffffff' }}>5+</option>
                                            <option value="6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>6+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative flex flex-none min-w-[90px]">
                    {/* Advance Filter Button */}
                    <button onClick={() => setOpenAllFilter(true)} className=" hovertext text-white px-4 py-2 rounded hover:bg-gray-200 transition">
                       <span className="float-left"><VscSettings
                         className="mt-4  mr-4"
                         size={"15px"} color={'#edb75e'} /></span> 
                        All Filter
                    </button>
                </div>
                <div className="relative flex flex-none min-w-[120px]">
                    {/* Save Search Button */}
                    <button
                     className="mls-searchmenu-yellow text-black font-bold px-4 py-2 rounded 
                     hover:bg-[#d9a04f] transition"
                     onClick={handleSaveSearch}
                     >
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
