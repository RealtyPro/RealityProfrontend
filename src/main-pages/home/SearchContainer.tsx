"use client"
import { useNeighborhoodList } from "@/services/neighborhood/NeighborhoodQueries";
import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SellModal from "./SellEnquiryModal";
type Neighborhood = {
    id: number;
    name: string;
};

const SearchContainer = () => {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [neighborhood, setNeighborhood] = useState<Neighborhood[]>([]);
    const [activeTab, setActiveTab] = useState('buy');
    const [isOpen, setIsOpen] = useState(false);

    const { data: neighborListDatas, isLoading, error } =
        useNeighborhoodList();
    useEffect(() => {
        if (neighborListDatas && !isLoading && !error) {
            setNeighborhood(neighborListDatas.data || []);
        }
    }, [neighborListDatas, isLoading, error]);
    useEffect(() => {
        const clearTempFilters = () => {
            sessionStorage.removeItem("prop_type");
            sessionStorage.removeItem("prop_location");
            sessionStorage.removeItem("prop_max_price");
        };

        // clear on unmount (navigation inside the SPA)
        return () => clearTempFilters();
    }, []);
    const handleClick = () => {
        sessionStorage.setItem("prop_location", location);
        sessionStorage.setItem("prop_type", propertyType);
        sessionStorage.setItem("prop_max_price", priceMax);
        window.location.href = '/properties'
    }
const handleOpenModal = () => {
    setIsOpen(!isOpen)
}
    return (
        <>
            <div className="search-tab-div">
                <div className=" rounded container mx-auto mt-4 mb-2 ">
                    <div className="flex justify-left space-x-4">
                        <button className={activeTab == 'buy' ? "px-6 py-3 text-sm font-medium text-white border-b-2 border-[#edb75e] focus:outline-none"
                            : "px-6 py-3 text-sm search-tab-btn font-medium text-white hover:text-white-700 border-b-2 border-transparent hover:border-[#edb75e] focus:outline-none"
                        }
                            onClick={() => setActiveTab('buy')}>
                            Buy
                        </button>
                        <button className={activeTab == 'sell' ? "px-6 py-3 text-sm font-medium text-white border-b-2 border-[#edb75e] focus:outline-none"
                            : "px-6 py-3 text-sm search-tab-btn font-medium text-white hover:text-white-700 border-b-2 border-transparent hover:border-[#edb75e] focus:outline-none"
                        }
                            onClick={() => setActiveTab('sell')}>
                            Sell
                        </button>
                        <button className={activeTab == 'homevalues' ? "px-6 py-3 text-sm font-medium text-white border-b-2 border-[#edb75e] focus:outline-none"
                            : "px-6 py-3 text-sm search-tab-btn font-medium text-white hover:text-white-700 border-b-2 border-transparent hover:border-[#edb75e] focus:outline-none"
                        }
                            onClick={() => setActiveTab('homevalues')}>
                            Home Values
                        </button>
                    </div>
                </div>
            </div>
            {activeTab === 'buy' &&
                <div className="search-form">
                    <div className="search-container">

                        <div className="flex flex-wrap mls-searchmenu items-center gap-4 bg-white p-4  rounded
              container mx-auto search-pl-pr">
                            {/* <div className="search-field"> */}
                            <div className="relative flex flex-3 min-w-[380px]">
                                <span className="absolute inset-y-0 left-0 flex items-center pr-2 pl-3  text-gray-400">
                                    <HiOutlineLocationMarker size={"15px"} className="mr6" color={'#edb75e'} /></span>
                                <input
                                    // ref={inputRef}
                                    // onChange={(e) => handleSearch(e.target.value, 'keyword')}
                                    type="text"
                                    placeholder="Search by city"
                                    className="border search-border pdl24 border-gray-300 rounded px-3 py-2 
                            focus:outline-none focus:ring-1 focus:ring-[#cbcbcb] focus:ring-opacity-20 
                            w-full"
                                />
                            </div>
                            {/* </div> */}

                            <div className="search-field">
                                <div className="select-field">
                                    <button className="search-tab active search-border"
                                        onClick={handleClick}>Find Property</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            }
            {
                activeTab === 'sell' &&
                <div className="sell-div">
                    <div className="flex flex-wrap mls-searchmenu items-center gap-4 bg-white p-4  
                     rounded container mx-auto search-pl-pr">
                        {/* <div className="search-field"> */}
                        <div className="relative flex flex-1 min-w-[380px]">
                            <span className="absolute inset-y-0 left-0 flex 
                                items-center pr-2 pl-3  text-white">
                                Ready to sell? I'm ready to help

                            </span>
                        </div>
                        {/* </div> */}

                        <div className="search-field">
                            <div className="select-field">
                                <button className="search-tab active search-border btn-w"
                                    onClick={() => setIsOpen(true)}
                                >Start The Process </button>

                            </div>
                        </div>
                    </div>

                </div>
            }
            {
                activeTab === 'homevalues' &&
                <div className="sell-div">
                    <div className="flex flex-wrap mls-searchmenu items-center gap-4 bg-white p-4  
                     rounded container mx-auto search-pl-pr">
                        {/* <div className="search-field"> */}
                        <div className="relative flex flex-1 min-w-[380px]">
                            <span className="absolute inset-y-0 left-0 flex 
                                items-center pr-2 pl-3  text-white">
                                Get an instant valuation of your home today
                            </span>
                        </div>
                        {/* </div> */}

                        <div className="search-field">
                            <div className="select-field">
                                <button className="search-tab active search-border btn-w"
                                    onClick={handleClick}>Get Home Value</button>

                            </div>
                        </div>
                    </div>

                </div>
            }
             {isOpen && (
                <SellModal handleOpenModal={handleOpenModal}/>
             )}
        </>

    )
}
export default SearchContainer;
{/* <div className="search-fields"> */ }
{/* <div className="search-field">
                    <label className="search-label">Location</label>
                    <select className="search-label search-span focus:outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
                        <option value="">All</option>

                        {neighborhood.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))

                        }
                      
                    </select>
                </div>
                <div className="search-field">
                    <label className="search-label">Property Type</label>
                    <select className="search-label search-span focus:outline-none"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}>
                        <option value="" >All</option>
                        <option value="house" >House</option>
                        <option value="apartment" >Apartment</option>
                        <option value="condo" >Condo</option>
                        <option value="townhouse" >Townhouse</option>
                        <option value="villa" >Villa</option>
                        <option value="penthouse" >Penthouse</option>
                    </select>
                </div>
                <div className="search-field search-width">
                    <label className="search-label">Max Price</label>
                    <select className="search-label search-span focus:outline-none"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}>
                        <option value=''>No Max</option>
                        <option value="100000" >$100K</option>
                        <option value="150000" >$150K</option>
                        <option value="200000" >$200K</option>
                        <option value="250000" >$250K</option>
                        <option value="300000" >$300K</option>
                        <option value="400000" >$400K</option>
                        <option value="500000" >$500K</option>
                        <option value="750000" >$750K</option>
                        <option value="1000000" >$1M</option>
                        <option value="1500000" >$1.5M</option>
                        <option value="2000000" >$2M</option>
                        <option value="3000000" >$3M</option>
                        <option value="5000000" >$5M</option>
                        <option value="10000000" >$10M</option>
                        <option value="20000000" >$20M+</option>

                    </select>
                </div> */}