"use client"
import { useEffect, useState } from "react";

const SearchContainer = () => {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [priceMax, setPriceMax] = useState('');
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
   
    return (
        <div className="search-container">
            <div className="search-fields">
                <div className="search-field">
                    <label className="search-label">Location</label>
                    <select className="search-label search-span focus:outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}>
                        <option value="">All</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
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
                </div>
                <div className="search-field">
                    <div className="select-field">
                        <button className="search-tab active"
                            onClick={handleClick}>Find Property</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchContainer;