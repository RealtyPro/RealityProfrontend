import Image from "next/image";
import { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { CgMoreVertical } from "react-icons/cg";
import { BsCheck2Circle } from "react-icons/bs";
import dynamic from "next/dynamic";

// Load LocalInformation dynamically to avoid SSR issues with window object
const LocalInformation = dynamic(() => import("./LocalInformation"), { ssr: false });
interface SinglePropertyDetailsProps { property?: any }

export const SinglePropertyDeatils = ({ property: prop }: SinglePropertyDetailsProps) => {

    const property = prop;
    const images: string[] = property.photos;

    /**
     * Build agents array from API data. The backend sends `mls_list_agent` as a
     * JSON-encoded string, e.g. "[\"Gary Berg\",  \"Lopez Island Realty\", \"360-468-2291\"]".
     * We try to parse it and fall back to an empty array on failure.
     */
    const agents = (() => {
        const list: Array<{ name: string; company?: string; phone?: string; avatar?: string }> = [];

        if (property?.mls_list_agent) {
            try {
                const parsed = JSON.parse(property.mls_list_agent);
                // Expecting [name, company, phone]
                if (Array.isArray(parsed) && parsed.length > 0) {
                    list.push({
                        name: parsed[0] ?? "",
                        company: parsed[1] ?? "",
                        phone: parsed[2] ? `tel:${parsed[2]}` : undefined,
                        avatar: "/images/agent-1.png", // fallback avatar
                    });
                }
            } catch (e) {
                console.error("Failed to parse mls_list_agent", e);
            }
        }

        return list;
    })();
    const isLoading = false;
    const [currentIdx, setCurrentIdx] = useState(0);
    return (
        <section className="container mx-auto px-4 py-10 marginTop">
            {property && (
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Info */}
                    <div className="flex-1">
                        {/* Status Tag & Share */}
                        <div className="flex items-center gap-4 mb-4 justify-between">
                            <span className="items-start justify-start-safe bg-[#151515] text-black font-medium px-5 py-2 rounded-full text-sm padding2">For Sale</span>
                            <div className="flex items-center gap-3">
                                <button className=" w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center">

                                    <RiShareForwardLine size={24} color={"#151515"} />
                                </button>
                                <button className=" w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center">
                                    <CgMoreVertical size={24} color={"#151515"} />
                                </button>
                            </div>

                        </div>
                        <h1 className="heading-text mb-4 leading-none">
                            {property.title}
                        </h1>
                        <p className="text-lg mb-4 text-[#989797] max-w-xl">
                            {property.address}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid padding3 grid-cols-2 md:grid-cols-4 bg-black border border-[#3B3B3B] rounded-[20px] divide-x divide-[#3B3B3B] overflow-hidden mb-8">
                            <div className="p-6 flex flex-col">
                                <span className="font-bold text-lg yelow-color">Price</span>

                                <span className="font-normal text-xl text-[#ffffff]">${property.price.toLocaleString()}</span>
                            </div>
                            <div className="p-6 flex flex-col paddingLeft-10">
                                <span className="font-bold text-lg yelow-color">Bedrooms</span>

                                <span className="font-normal text-xl text-[#ffffff]">{property.beds}</span>
                            </div>
                            <div className="p-6 flex flex-col paddingLeft-10">
                                <span className="font-bold text-lg yelow-color">Bathrooms</span>

                                <span className="font-normal text-xl text-[#ffffff]">{property.baths}</span>
                            </div>
                            <div className="p-6 flex flex-col paddingLeft-10">
                                <span className="font-bold text-lg yelow-color">SqFt</span>

                                <span className="font-normal text-xl text-[#ffffff]">{property.bua}</span>
                            </div>
                        </div>
                        <div className="marginTop padding2 bg-black border border-[#3B3B3B] rounded-[20px]  overflow-hidden mb-8">

                            <span className="font-normal text-[35px] border-[none]">Property Details</span>
                            {property.description && (
                                <div className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    {property.description}

                                </div>
                            )}
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - Status:{property.status}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - Floor Levels:{property.floor}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - Unit Type:{property.unit == null ? "N/A" : property.unit}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - View:{property.views == null ? "N/A" : property.views}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - Kitchen:{"property.status"}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    - Bathrooms:{property.baths == null ? "N/A" : property.baths + "Bathrooms"}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    -  Built-up Area:{property.bua == null ? "N/A" : property.bua + " Sq Ft"}
                                </span>
                            </div>
                            <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    -  No. of Parking:{property.parking == null ? "" : property.parking + ""}
                                </span>
                            </div> <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    -  Furnished:{property.furnishing == null ? "" : property.furnishing}
                                </span>
                            </div> <div>
                                <span className="marginTop font-normal text-[20px] max-w-2xl text-justify">
                                    -  Features:{!property.features || property.features.length === 0 ? "N/A" : property.features.filter((f: string | null) => f).join(", ")}
                                </span>
                            </div>

                        </div>
                        <div className="marginTop padding2 bg-black border border-[#3B3B3B] rounded-[20px] overflow-hidden mb-8">
                            <span className="font-normal text-[35px] border-[none]">Facilities & Amenities</span>

                            {property.features && property.features.filter((f: string | null) => f).length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4 mt-6">
                                    {property.features
                                        .filter((f: string | null) => f)
                                        .map((feature: string) => (
                                            <div key={feature} className="flex items-center gap-3 text-[18px]">
                                                <BsCheck2Circle className="text-[#EDB75E]" size={20} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <p className="mt-4 text-[18px]">N/A</p>
                            )}
                        </div>
                        {/* Interior & Exterior Features */}
                        <div className="marginTop padding2 bg-black border border-[#3B3B3B] rounded-[20px] overflow-hidden mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Interior Features */}
                                <div>
                                    <span className="font-normal text-[35px] border-[none]">Interior Features</span>
                                    <div className="mt-6 space-y-2 text-[18px] max-w-xl leading-relaxed">
                                        <p><span className="font-semibold"> Bedrooms and Bathrooms:</span></p>
                                        {property.mls_json_data?.BedroomsTotal ?
                                            <p ><span className="font-semibold">&bull; Bedrooms: {property.mls_json_data?.BedroomsTotal}</span> </p>
                                            : <></>
                                        }
                                        {property.mls_json_data?.NWM_Bathrooms ?
                                            <p ><span className="font-semibold">&bull; Bathrooms: {property.mls_json_data?.NWM_Bathrooms}</span> </p>
                                            : <></>
                                        }
                                        {property.mls_json_data?.BathroomsFull ?
                                            <p ><span className="font-semibold">&bull; Full Bathrooms: {property.mls_json_data?.BathroomsFull}</span> </p>
                                            : <></>
                                        }
                                        {property.mls_json_data?.BathroomsHalf != 0 ?
                                            <p ><span className="font-semibold">&bull; 1/2 Bathrooms: {property.mls_json_data?.BathroomsHalf}</span> </p>
                                            : <></>
                                        }
                                        {property.mls_json_data?.BathroomsThreeQuarter != 0 ?
                                            <p ><span className="font-semibold">&bull; 3/4 Bathrooms:</span> {property.mls_json_data?.BathroomsThreeQuarter} </p>
                                            : <></>
                                        }
                                        <p><span className="font-semibold">Appliances:</span>{' '}
                                          {property.mls_json_data?.NWM_AppliancesIncluded
                                            ? property.mls_json_data.NWM_AppliancesIncluded.split(',').map((appl: string, idx: number, arr: string[]) => (
                                                <span key={idx}>{appl.trim()}{idx < arr.length - 1 ? ', ' : ''}</span>
                                              ))
                                            : 'N/A'}
                                        </p>
                                        <p><span className="font-semibold">Floor:</span> {' '}
                                            {Array.isArray(property.mls_json_data.Flooring)
                                                ? property.mls_json_data.Flooring.join(', ')
                                                : property.mls_json_data.Flooring?.replace(/^\[|\]$/g, '')}
                                        </p>
                                        <p><span className="font-semibold">Other:</span> {' '}
                                            {/* {Array.isArray(property.mls_json_data.Flooring)
                                                ? property.mls_json_data.Flooring.join(', ')
                                                : property.mls_json_data.Flooring?.replace(/^\[|\]$/g, '')} */}
                                        </p>
                                        <p><span className="font-semibold">Water:</span> {' '}
                                            {Array.isArray(property.mls_json_data.WaterSource)
                                                ? property.mls_json_data.WaterSource.join(', ')
                                                : property.mls_json_data.WaterSource?.replace(/^\[|\]$/g, '')}
                                        </p>
                                    </div>
                                </div>

                                {/* Exterior Features */}
                                <div>
                                    <span className="font-normal text-[35px] border-[none]">Exterior Features</span>
                                    <div className="mt-6 space-y-2 text-[18px] max-w-xl leading-relaxed">
                                        <p>
                                            <span className="font-semibold">{'Lot'}:</span>{' '}
                                            {Array.isArray(property.mls_lot_feature)
                                                ? property.mls_lot_feature.join(', ')
                                                : property.mls_lot_feature?.replace(/^\[|\]$/g, '')}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{'Roof'}:</span>{' '}
                                            {Array.isArray(property.mls_json_data.Roof)
                                                ? property.mls_json_data.Roof.join(', ')
                                                : property.mls_json_data.Roof?.replace(/^\[|\]$/g, '')}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{'Others'}:</span>{' '}
                                            {/* {Array.isArray(property.mls_json_data.Roof)
                                                ? property.mls_json_data.Roof.join(', ')
                                                : property.mls_json_data.Roof?.replace(/^\[|\]$/g, '')} */}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{'Sewers'}:</span>{' '}
                                            {Array.isArray(property.mls_sewer)
                                                ? property.mls_sewer.join(', ')
                                                : property.mls_sewer?.replace(/^\[|\]$/g, '')}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{'Parking Features'}:</span>{' '}
                                            {Array.isArray(property.mls_json_data.ParkingFeatures)
                                                ? property.mls_json_data.ParkingFeatures.join(', ')
                                                : property.mls_json_data.ParkingFeatures?.replace(/^\[|\]$/g, '')}
                                        </p>                                                 {/* <p key={`${f.label}-${f.value}`}><span className="font-semibold">{f.label}:</span> {Array.isArray(f.value) ? f.value.join(', ') : f.value}</p>
                                                    <p key={`${f.label}-${f.value}`}><span className="font-semibold">{f.label}:</span> {Array.isArray(f.value) ? f.value.join(', ') : f.value}</p>
                                                    <p key={`${f.label}-${f.value}`}><span className="font-semibold">{f.label}:</span> {Array.isArray(f.value) ? f.value.join(', ') : f.value}</p> */}


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Local Information Section */}
                        {property.coordinates && (
                            <div className="marginTop padding2 bg-black border border-[#3B3B3B] rounded-[20px] overflow-hidden mb-8">
                                <span className="font-normal text-[35px] border-[none]">Local Information</span>
                                <div className="mt-6">
                                    <LocalInformation coordinates={{ lat: Number(property.coordinates.lat), lng: Number(property.coordinates.lng) }} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Agents Card */}
                    <div className="padding3 w-full md:w-[380px] bg-[#111111] rounded-2xl p-6 border border-[#3B3B3B] h-fit">
                        <div className="text-[40px] font-normal mb-4 marginTop">Property Agents</div>

                        <div className="divide-y divide-[#3B3B3B] mb-6 marginTop border border-[#3B3B3B]
                         rounded-[20px] padding3 mb5">
                            {agents.map((agent) => (
                                <div key={agent.name} className="py-4 flex items-center gap-4 mb5">
                                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                                        <Image src={agent.avatar || '/images/default-avatar.png'} alt={agent.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font16">{agent.name}</p>
                                        {agent.company && (
                                            <span className="font12 text-[#989797]">{agent.company}</span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={agent.phone} className="bg-transparent  text-[#EDB75E] w-9 h-9">
                                            <Image src="/images/call.png" alt="Phone" width={24} height={24} />
                                        </a>
                                        {agent.phone && (
                                            <a href={`tel:${agent.phone}`} className="bg-transparent text-[#EDB75E] w-9 h-9">
                                                <Image src="/images/sms.png" alt="Email" width={24} height={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full bg-[#EDB75E] text-black py-3 rounded-full font-semibold">Enquire This Property</button>
                    </div>
                </div>
            )}
        </section>
    )
}