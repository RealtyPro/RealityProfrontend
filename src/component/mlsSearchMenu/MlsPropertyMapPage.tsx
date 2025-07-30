import { PropertyCard } from "../properties/PropertyCard"
import 'leaflet/dist/leaflet.css'
import LeafletMap from "./MlsMap"
import GoogleMapComponent from "./MlsMap"
import { MlsPropertyCard } from "./MlsPropertyCard"
interface PropertyCardProps {
    properties: any;
    handleModal: () => void

}
export const MlsPropertyMapPage = ({properties,handleModal}:PropertyCardProps) => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-black-100 p-5">
            <div className="w-full  grid grid-cols-12 md:grid-cols-12 gap-2  p-5">
                {/* Left Column */}
                <div className="col-span-12 md:col-span-7 bg-black-100 p-4">
                 {/* className="bg-black rounded-lg shadow-lg p-2 col-span-1"> */}
                    <div className="space-y-1  ">
                        <div className="properties-grid">
                            {/* <MlsPropertyCard item={"3"}/>
                            <MlsPropertyCard item={"3"}/> */}
                        </div>

                  
                    </div>
                </div>
                {/* Right Column */}
                <div className="col-span-12 md:col-span-5 bg-black-100 p-4"
                // className="bg-black rounded-lg shadow-lg p-4 "
                >
                    {/* <h2 className="text-2xl font-bold mb-4">Map</h2> */}
                    <div className="space-y-4">
                        <GoogleMapComponent />
                    </div>
                </div>
            </div>
        </div>


    )
}