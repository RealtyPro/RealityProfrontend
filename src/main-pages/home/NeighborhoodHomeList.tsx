"use client"
import { NeighborhoodHomeCard } from "@/component/neighborhood/NeighborhoodHomeCard"
import Providers from "@/provider/QueryClientProvider";
import { useNeighborhoodList } from "@/services/neighborhood/NeighborhoodQueries";
import { useEffect, useState } from "react";

type Neighborhood = {
    id: number;
    name: string;
};

const NeighborhoodHomeList = () => {
    const [neighborhood, setNeighborhood] = useState<Neighborhood[]>([]);
    const { data: neighborListDatas, isLoading, error } =
        useNeighborhoodList();
    useEffect(() => {
        if (neighborListDatas && !isLoading && !error) {
            setNeighborhood(neighborListDatas.data || []);
        }
    }, [neighborListDatas, isLoading, error]);
    const handleMore =()=>{
        window.location.href = "/neighborhoods";
    }
    return (
        <Providers>
            <section className="neighborhoods">
                <div className="container">
                    <div className="section-header">
                        <span className="second-header-text">Find your Neighborhoods</span>
                        <p>Top priority, and she is committed to walking with them</p>
                        <div className="nav-arrows">
                            <button className="nav-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                    <path d="M17.752 10.7031L7.08852 21.3666L17.752 32.03" stroke="#EDB75E"
                                        strokeWidth="3.37295" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M36.9531 21.3633H7.38714" stroke="#EDB75E" strokeWidth="3.37295"
                                        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="nav-arrow nav-arrow-bgbutton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M25.7969 10.6992L36.4603 21.3627L25.7969 32.0261" stroke="black"
                                        strokeWidth="3.37295" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M6.59766 21.3633H36.1636" stroke="black" strokeWidth="3.37295"
                                        strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="neighborhoods-grid">
                        {neighborhood.length ? (
                            <>
                                {neighborhood.slice(0, 3).map((item) => (

                                    <NeighborhoodHomeCard key={item.id} item={item} />
                                ))}
                            </>
                        ) : (
                            <div>No neighborhood found.</div>
                        )}
                        {/* <div className="neighborhood-card">
                                    <img src="images/neighborhood-1.png" alt="Orange" />
                                    <div className="neighborhood-info">
                                        <h3>Lakemont</h3>
                                        <p>Orange</p>
                                    </div>
                                </div>
                                <div className="neighborhood-card">
                                    <img src="images/neighborhood-2.png" alt="Pembroke Pines" />
                                    <div className="neighborhood-info">
                                        <h3>Krickland</h3>
                                        <p>Pembroke Pines</p>
                                    </div>
                                </div>
                                <div className="neighborhood-card">
                                    <img src="images/neighborhood-1.png" alt="Naperville" />
                                    <div className="neighborhood-info">
                                        <h3>Naperville</h3>
                                        <p>90 Naperville</p>
                                    </div>
                                </div> */}
                    </div>

                    <div className="section-cta">
                        <button className="btn-secondary"
                        onClick={handleMore}>See All Neighborhoods</button>
                    </div>
                </div>
            </section>
        </Providers>
    )
}
export default NeighborhoodHomeList;