import { PropertyCard } from "../properties/PropertyCard"
import 'leaflet/dist/leaflet.css'
import LeafletMap from "./MlsMap"
import GoogleMapComponent from "./MlsMap"
import { useState } from "react";
import { MlsMapModalCard } from "./MlsMapModalCard";
import { MlsPropertyCard } from "./MlsPropertyCard"
interface PropertyCardProps {
    properties: any;
    handleModal: () => void;
    postWishlistMutation: (data: any) => void;
    removeWishlistMutation?: (id: string) => void;

}
export const MlsPropertyMapPage = ({ properties, handleModal, postWishlistMutation, removeWishlistMutation }: PropertyCardProps) => {
    const [hoveredProperty, setHoveredProperty] = useState<any | null>(null);

    return (

        <div className="min-h-screen flex items-center justify-center bg-black-100 p-5 marginTop padding2">
            <div className="w-full  grid grid-cols-12 md:grid-cols-12 gap-2  p-5">
                {/* Left Column */}
                <div className="col-span-12 md:col-span-7 bg-black-100 p-4 properlistinmap">
                    <div className="space-y-1  ">
                        <div className="properties-grid">
                            {properties.map((item: any) => (

                                <MlsPropertyCard key={item.id} item={item}
                                    postWishlistMutation={postWishlistMutation}
                                    removeWishlistMutation={removeWishlistMutation}

                                    handleModal={handleModal}
                                />
                            ))}
                        </div>


                    </div>
                </div>
                {/* Right Column */}
                <div className="col-span-12 md:col-span-5 bg-black-100 p-4"
                // className="bg-black rounded-lg shadow-lg p-4 "
                >
                    {/* <h2 className="text-2xl font-bold mb-4">Map</h2> */}
                    <div className="space-y-4"  style={{ height: '800px' }}>
                        <GoogleMapComponent
                            markers={properties.map((p: any) => ({
                                ...p,
                                lat: Number(p.latitude),
                                lng: Number(p.longitude),
                            }))}
                            
                            onMarkerHover={(p) => setHoveredProperty(p)}
                        />
                    </div>

                </div>
            </div>
        </div>


    )
}