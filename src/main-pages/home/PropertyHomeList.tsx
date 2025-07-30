"use client";
import { PropertyCard } from "@/component/properties/PropertyCard"
import Providers from "@/provider/QueryClientProvider";
import { usePropertyList } from "@/services/properties/PropertyQueries";
import { useEffect, useState } from "react";
type Property = {
    id: string ;
    // add other fields as needed, e.g. title: string;
    [key: string]: string;
};
const PropertyHomeList = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const { data: propertyListDatas, isLoading, error } =
        usePropertyList({ pageLimit: 1, search: '' });
    useEffect(() => {
        if (propertyListDatas && !isLoading && !error) {
            setProperties(propertyListDatas.data || []);
        }
    }, [propertyListDatas, isLoading, error]);
    const handleClick=()=>{
        window.location.href = '/properties';
    
    }
    return (
        <Providers>
            <div className="property-filters">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Residential</button>
                <button className="filter-btn">Commercial</button>
                <button className="filter-btn">Apartment</button>
            </div>

            <div className="properties-grid">
                {properties.length ? (
                    <>
                        {properties.slice(0, 4).map((item) => (

                            <PropertyCard key={item.id} item={item} handleModal={()=>console.log("property card")}/>
                        ))}
                    </>
                ) : (
                    <div>No properties found.</div>
                )}
            </div>
            <div className="section-cta">
                <button className="btn-secondary"
                onClick={handleClick}>See All Properties</button>
            </div>
        </Providers>
    )
}
export default PropertyHomeList