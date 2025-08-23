"use client";
import { PropertyCard } from "@/component/properties/PropertyCard"
import Providers from "@/provider/QueryClientProvider";
import { useFeaturedPropertyList, useMlsPropertyList } from "@/services/properties/PropertyQueries";
import { useEffect, useState } from "react";
type Property = {
    id: string;
    // add other fields as needed, e.g. title: string;
    [key: string]: string;
};
const FeaturedProperties = () => {
    const [properties, setProperties] = useState<Property[]>([]);
  
    const { data: propertyListDatas, isLoading, error } =
        useFeaturedPropertyList();
    useEffect(() => {
        if (propertyListDatas && !isLoading && !error) {
            setProperties(propertyListDatas.data || []);
        }
    }, [propertyListDatas, isLoading, error]);
   
    return (
        <Providers>
         

            <div className="properties-grid-home marginTop6">
                {properties.length ? (
                    <>
                        {properties.map((item) => (

                            <PropertyCard 
                            key={item.id} 
                            item={item} handleModal={() => console.log("property card")}
                            hideWishlist={true} />
                        ))}
                    </>
                ) : (
                    <div>No properties found.</div>
                )}
            </div>
            {/* <div className="section-cta">
                <button className="btn-secondary"
                    onClick={handleClick}>See All Properties</button>
            </div> */}
        </Providers>
    )
}
export default FeaturedProperties