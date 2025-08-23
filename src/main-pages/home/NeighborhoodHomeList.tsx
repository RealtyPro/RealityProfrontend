"use client"
import { NeighborhoodHomeCard } from "@/component/neighborhood/NeighborhoodHomeCard"
import Providers from "@/provider/QueryClientProvider";
import { useNeighborhoodList } from "@/services/neighborhood/NeighborhoodQueries";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
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
    const handleMore = () => {
        window.location.href = "/neighborhoods";
    }
    return (
        <Providers>
            <section className="neighborhoods">
                <div className="container">
                    <div className="section-header">
                        <div className="flex column">
                            <span className="second-header-text">Find your <br />Neighborhoods</span>
                            <p>Top priority, and she is committed to walking with them</p>
                        </div>

                        <div className="nav-arrows">
                            <button className="nav-arrow">

                                <IoIosArrowRoundBack color="#EDB75E" size={40} />
                            </button>
                            <button className="nav-arrow nav-arrow-bgbutton">

                                <IoIosArrowRoundForward color="white" size={40} />

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