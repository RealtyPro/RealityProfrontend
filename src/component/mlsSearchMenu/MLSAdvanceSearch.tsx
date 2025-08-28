"use client";
import { MLSAdvanceSearchProps } from "@/types/Property";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";


const MLSAdvanceSearch = ({ open, onClose, onApply, handleSearch, searchFilters }: MLSAdvanceSearchProps) => {
    const [checked, setChecked] = useState(false);

    const handleApply = () => {
        // alert(`Filter applied: ${checked}`);
        onApply(checked);
        onClose();
    };
    const propertyTypes = [
        "Business Opportunity",
        "Commercial Sale",
        "Apartment",
        "Condo",
        "Villa",
        "Townhouse",
        "Penthouse"
    ];
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);

    const handlePropertyTypeChange = (type: string) => {
        setSelectedPropertyTypes(prev => {
            const newSelected = prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type];
            return newSelected;
        });
        // Call handleSearch after state update
        const newSelected = selectedPropertyTypes.includes(type)
            ? selectedPropertyTypes.filter(t => t !== type)
            : [...selectedPropertyTypes, type];
        handleSearch(newSelected.join("|"), "property_type");
    };

    const propertyStatuses = [
        "Active",
        "Active with contingency",
        "Pending"
    ];
    const [selectedPropertyStatuses, setSelectedPropertyStatuses] = useState<string[]>([]);

    const handlePropertyStatusChange = (status: string) => {
        setSelectedPropertyStatuses(prev => {
            const newSelected = prev.includes(status)
                ? prev.filter(s => s !== status)
                : [...prev, status];
            return newSelected;
        });
        // Call handleSearch after state update
        const newSelected = selectedPropertyStatuses.includes(status)
            ? selectedPropertyStatuses.filter(s => s !== status)
            : [...selectedPropertyStatuses, status];
        handleSearch(newSelected.join("|"), "property_status");
    };

    const communityAmenities = [
        "Swimming Pool",
        "Gym / Fitness Center",
        "Clubhouse",
        "Gated Access / Security",
        "Children's Play Area / Park",
        "Tennis Courts",
        "Basketball Courts",
        "Golf Course",
        "Jogging/Walking Trails",
        "BBQ / Picnic Area",
        "Community Garden",
        "Business Center",
        "Elevator (in condos/apartments)",
        "Rooftop Deck",
        "Covered Parking / Guest Parking",
        "Pet Area / Dog Park",
        "Lake / Waterfront Access",
        "Marina / Boat Docks",
        "Sauna / Spa / Hot Tub",
        "On-site Maintenance or Management"
    ];

    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const [isAmenitiesDropdownOpen, setIsAmenitiesDropdownOpen] = useState(false);

    const handleAmenityChange = (amenity: string) => {
        setSelectedAmenities(prev => {
            const newSelected = prev.includes(amenity)
                ? prev.filter(a => a !== amenity)
                : [...prev, amenity];
            return newSelected;
        });
        // Call handleSearch after state update
        const newSelected = selectedAmenities.includes(amenity)
            ? selectedAmenities.filter(a => a !== amenity)
            : [...selectedAmenities, amenity];
        handleSearch(newSelected.join("|"), "community_amenities");
    };

    const propertyViews = [
        "Ocean View",
        "Beach View",
        "Lake View",
        "Mountain View",
        "City View / Skyline View",
        "Golf Course View",
        "Park / Greenbelt View",
        "Water View (General)",
        "River / Canal View",
        "Desert View",
        "Pool View",
        "Courtyard View",
        "Garden View",
        "Hills View",
        "Panoramic View",
        "Bay View",
        "Harbor View",
        "Marina View",
        "Forest / Woods View",
        "Pasture View",
        "No View / None"
    ];

    const [selectedViews, setSelectedViews] = useState<string[]>([]);
    const [isViewsDropdownOpen, setIsViewsDropdownOpen] = useState(false);

    const handleViewChange = (view: string) => {
        setSelectedViews(prev => {
            const newSelected = prev.includes(view)
                ? prev.filter(v => v !== view)
                : [...prev, view];
            return newSelected;
        });
        // Call handleSearch after state update
        const newSelected = selectedViews.includes(view)
            ? selectedViews.filter(v => v !== view)
            : [...selectedViews, view];
        handleSearch(newSelected.join("|"), "property_view");
    };

    const interiorFeatures = [
        "Hardwood Floors",
        "Carpet",
        "Tile Floors",
        "Marble Floors",
        "Granite Countertops",
        "Quartz Countertops",
        "Stainless Steel Appliances",
        "Built-in Appliances",
        "Walk-in Closet",
        "Master Suite",
        "En-suite Bathroom",
        "Jacuzzi Tub",
        "Walk-in Shower",
        "Double Vanity",
        "Kitchen Island",
        "Breakfast Nook",
        "Formal Dining Room",
        "Living Room",
        "Family Room",
        "Home Office",
        "Mudroom",
        "Laundry Room",
        "Pantry",
        "Wine Cellar",
        "Home Theater",
        "Game Room",
        "Exercise Room",
        "Library/Study",
        "Fireplace",
        "Ceiling Fans",
        "Recessed Lighting",
        "Crown Molding",
        "Wainscoting",
        "Bay Windows",
        "Skylights",
        "French Doors",
        "Sliding Glass Doors",
        "Central Air Conditioning",
        "Central Heating",
        "Smart Home Features",
        "Security System",
        "Intercom System",
        "Elevator",
        "Staircase",
        "Loft",
        "Basement",
        "Attic",
        "Storage Space"
    ];

    const [selectedInteriorFeatures, setSelectedInteriorFeatures] = useState<string[]>([]);
    const [isInteriorFeaturesDropdownOpen, setIsInteriorFeaturesDropdownOpen] = useState(false);

    const handleInteriorFeatureChange = (feature: string) => {
        setSelectedInteriorFeatures(prev => {
            const newSelected = prev.includes(feature)
                ? prev.filter(f => f !== feature)
                : [...prev, feature];
            return newSelected;
        });
        // Call handleSearch after state update
        const newSelected = selectedInteriorFeatures.includes(feature)
            ? selectedInteriorFeatures.filter(f => f !== feature)
            : [...selectedInteriorFeatures, feature];
        handleSearch(newSelected.join("|"), "interior_features");
    };

    if (!open) return null;

    return (
        <div className="MLSAdvanceSearch max-h-[600px] pb-20" onClick={() => onClose()} >
            <div
                className=" p-6 MLSAdvanceSearch-container  p-[20px] rounded-[20px] overflow-y-auto max-h-[400px] pb-10"
                onClick={e => e.stopPropagation()}
                style={{ padding: "20px", borderRadius: "20px" }}
            >
                <div className=" max-h-[600px] ">
                    {/* Section 1: Checkbox and Apply Filter */}
                    <div className="flex items-center gap-2">
                        {/* <div className="flex-2">
                            <label className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    onChange={e => setChecked(e.target.checked)}
                                    className="form-checkbox checkbox-dark"
                                    id="enable-filter"
                                />
                                <span>Include properties without photo</span>
                            </label>
                        </div> */}
                        <div className="flex-1">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2 mls-input" />
                                <span>Include properties without photo</span>
                            </label>
                        </div>
                        <div className="flex-1 text-right" style={{ marginBottom: "10px" }} >
                            <button className="btn-theme mls-button" onClick={handleApply}  >
                                View Results
                            </button>
                        </div>
                    </div>
                    {/* Section 2: Filter Options */}
                    <div className="divider-dark"></div>
                    <div className="flex gap-2 text-left gap-8 mt-5" style={{ marginTop: "15px" }}>
                        <div className="flex-1  ">
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Garage</label>
                                <div className="flex gap-2">
                                    <div className="flex-2">
                                        <select
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            className="border mls-input mls-select border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515]">
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                                value="">No Min</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="100000">100,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="200000">200,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="300000">300,000</option>
                                        </select>
                                    </div>
                                    <div className="flex w-[40px] mls-search-label text-center">
                                        <label className="block mb-2">To</label>
                                    </div>
                                    <div className="flex-2">
                                        <select style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} className="border mls-input mls-select border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515]">
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Max</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="500000">500,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1000000">1,000,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1500000">1,500,000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Lot Size</label>
                                <div className="flex gap-2">
                                    <div className="flex-2">
                                        <select
                                            className="border mls-input mls-select border-gray-300 
                                        rounded px-3 py-2 focus:outline-none focus:ring-2 
                                        focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'lot_size_min')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value=""> No Min </option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="100000">100,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="200000">200,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="300000">300,000</option>
                                        </select>
                                    </div>
                                    <div className="flex w-[40px] mls-search-label text-center">
                                        <label className="block mb-2">To</label>
                                    </div>
                                    <div className="flex-2">
                                        <select className="border mls-input mls-select 
                                        border-gray-300 rounded px-3 py-2 focus:outline-none 
                                        focus:ring-2 focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'lot_size_max')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Max</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="500000">500,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1000000">1,000,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1500000">1,500,000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Stories</label>
                                <div className="flex gap-2">
                                    <select className="border mls-input mls-select 
                                    border-gray-300 rounded px-3 py-2 focus:outline-none 
                                    focus:ring-2 focus:ring-[#151515]"
                                        style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                        onChange={(e) => handleSearch(e.target.value, 'stories')}>
                                        <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">Any</option>
                                        <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="100000">100,000</option>
                                        <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="200000">200,000</option>
                                        <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="300000">300,000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Square Footage</label>
                                <div className="flex gap-2">
                                    <div className="flex-2">
                                        <select className="border mls-input mls-select 
                                        border-gray-300 rounded px-3 py-2 focus:outline-none
                                         focus:ring-2 focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'square_footage_min')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Min</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="100000">100,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="200000">200,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="300000">300,000</option>
                                        </select>
                                    </div>
                                    <div className="flex w-[40px] mls-search-label text-center">
                                        <label className="block mb-2">To</label>
                                    </div>
                                    <div className="flex-2">
                                        <select className="border mls-input mls-select border-gray-300
                                         rounded px-3 py-2 focus:outline-none focus:ring-2 
                                         focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'square_footage_max')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Max</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="500000">500,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1000000">1,000,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1500000">1,500,000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Year Built</label>
                                <div className="flex gap-2">
                                    <div className="flex-2">
                                        <select className="border mls-input mls-select border-gray-300 
                                        rounded px-3 py-2 focus:outline-none focus:ring-2 
                                        focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'year_built_min')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Min</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="100000">100,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="200000">200,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="300000">300,000</option>
                                        </select>
                                    </div>
                                    <div className="flex w-[40px] mls-search-label text-center">
                                        <label className="block mb-2">To</label>
                                    </div>
                                    <div className="flex-2">
                                        <select className="border mls-input mls-select border-gray-300 
                                        rounded px-3 py-2 focus:outline-none focus:ring-2 
                                        focus:ring-[#151515]"
                                            style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }}
                                            onChange={(e) => handleSearch(e.target.value, 'year_built_max')}>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="">No Max</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="500000">500,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1000000">1,000,000</option>
                                            <option style={{ backgroundColor: '#1c1d1d', color: '#ffffff' }} value="1500000">1,500,000</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className=" gap-2 w-full flex-1">
                                <label className="block mb-2 mls-search-ctr-label">Max Annual Tax</label>
                                <div className="flex gap-2">
                                    <div className="flex-2">
                                        <input type="text"
                                            placeholder="10000"
                                            style={{ maxWidth: "50%" }}
                                            onChange={(e) => handleSearch(e.target.value, 'max_annual_tax')}
                                            className="border mls-input  border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#151515]" />

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex-1 text-left">
                        <label className="block mb-2 mls-search-ctr-label"
                            style={{ marginTop: "16px" }}>
                            Property Type</label>
                        {/* <div>
                            <span className="mls-prop-types">Business Opportunity</span>
                            <span className="mls-prop-types">Commercial Sale</span>
                        </div> */}
                        <div className="flex flex-row flex-wrap gap-2 " >
                            {propertyTypes.map((type) => (
                                <label
                                    key={type}
                                    className="flex padding10 items-center cursor-pointer 
                                    bg-[#1c1d1d] rounded px-4 py-2 whitespace-nowrap"
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedPropertyTypes.includes(type)}
                                        onChange={() => handlePropertyTypeChange(type)}
                                    />
                                    <span className="px-1 pl-2 paddingLeft5">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 text-left">
                        <label className="block mb-2 mls-search-ctr-label" style={{ marginTop: "20px" }}>
                            Property Status</label>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            {propertyStatuses.map((status) => (
                                <label
                                    key={status}
                                    className="flex padding10 items-center cursor-pointer bg-[#1c1d1d] rounded px-4 py-2 whitespace-nowrap"
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedPropertyStatuses.includes(status)}
                                        onChange={() => handlePropertyStatusChange(status)}
                                    />
                                    <span className="px-1 paddingLeft5">{status}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 text-left ">
                        <div className="flex"
                            onClick={() => setIsAmenitiesDropdownOpen(!isAmenitiesDropdownOpen)}
                        >
                            <label className="block mb-2 mls-search-ctr-label" style={{ marginTop: "0px" }}>
                                Community Amenities
                            </label>
  <span ><RiArrowDownSLine size={"25px"} style={{marginLeft:'4px'}} /></span>                        </div>

                        {isAmenitiesDropdownOpen && (
                            <div className="mb-4 p-4 bg-gray-100 rounded-md">
                                <div className="flex flex-wrap gap-2 bg-black">
                                    {communityAmenities.map((amenity) => (
                                        <label
                                            key={amenity}
                                            className="flex padding10 items-center cursor-pointer bg-[#1c1d1d] rounded px-4 py-2 whitespace-nowrap"
                                        >
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={selectedAmenities.includes(amenity)}
                                                onChange={() => handleAmenityChange(amenity)}
                                            />
                                            <span className="text-sm paddingLeft5">{amenity}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 text-left">
                        <div
                            className="flex"
                            onClick={() => setIsViewsDropdownOpen(!isViewsDropdownOpen)}
                        >
                            <label className="block mb-2 mls-search-ctr-label" style={{ marginTop: "0px" }}>
                                Property View
                            </label>
                            <span ><RiArrowDownSLine size={"25px"} style={{marginLeft:'4px'}} /></span>
                        </div>

                        {isViewsDropdownOpen && (
                            <div className="mb-4 p-4 bg-gray-100 rounded-md">
                                <div className="flex flex-wrap gap-2 bg-black">
                                    {propertyViews.map((view) => (
                                        <label
                                            key={view}
                                            className="flex padding10 items-center cursor-pointer bg-[#1c1d1d] rounded px-4 py-2 whitespace-nowrap"
                                        >
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={selectedViews.includes(view)}
                                                onChange={() => handleViewChange(view)}
                                            />
                                            <span className="text-sm paddingLeft5">{view}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 text-left paddingBottom2">
                        <div className="flex"
                            onClick={() => setIsInteriorFeaturesDropdownOpen(!isInteriorFeaturesDropdownOpen)}
                        >
                            <label className="block mb-2 mls-search-ctr-label" style={{ marginTop: "0px" }}>
                                Interior Features
                            </label>
                              <span ><RiArrowDownSLine size={"25px"} style={{marginLeft:'4px'}} /></span>
                        </div>

                        {isInteriorFeaturesDropdownOpen && (
                            <div className="mb-4 p-4 bg-gray-100 rounded-md">
                                <div className="flex flex-wrap gap-2 bg-black">
                                    {interiorFeatures.map((feature) => (
                                        <label
                                            key={feature}
                                            className="flex padding10 items-center cursor-pointer bg-[#1c1d1d] rounded px-4 py-2 whitespace-nowrap"
                                        >
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={selectedInteriorFeatures.includes(feature)}
                                                onChange={() => handleInteriorFeatureChange(feature)}
                                            />
                                            <span className="text-sm paddingLeft5">{feature}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-2" style={{ marginTop: "20px" }}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MLSAdvanceSearch;