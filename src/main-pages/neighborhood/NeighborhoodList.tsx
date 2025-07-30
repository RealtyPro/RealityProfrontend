"use client"

import { NeighborhoodHomeCard } from "@/component/neighborhood/NeighborhoodHomeCard";
import { useNeighborhoodList } from "@/services/neighborhood/NeighborhoodQueries";
import { useEffect, useState } from "react";

type Neighborhood = {
    id: number;
    name: string;
};

const NeighborhoodList = () => {
    const [neighborhood, setNeighborhood] = useState<Neighborhood[]>([]);
    const { data: neighborListDatas, isLoading, error } =
        useNeighborhoodList();
    useEffect(() => {
        if (neighborListDatas && !isLoading && !error) {
            setNeighborhood(neighborListDatas.data || []);
        }
    }, [neighborListDatas, isLoading, error]);
    return (
        <>

            <div className="neighborhoods-grid">
                {neighborhood.length ? (
                    <>
                        {neighborhood.map((item) => (

                            <NeighborhoodHomeCard key={item.id} item={item} />
                        ))}
                    </>
                ) : (
                    <div>No neighborhood found.</div>
                )}



            </div>

        </>
    )
}
export default NeighborhoodList;