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

    const agents = [
        {
            name: "Wade Warren",
            license: "#251846",
            avatar: "/images/agent-1.png",
            phone: "tel:+1-555-123-4567",
            email: "mailto:wade@example.com",
        },
        {
            name: "Leslie Alexander",
            license: "#251846",
            avatar: "/images/agent-2.png",
            phone: "tel:+1-555-987-6543",
            email: "mailto:leslie@example.com",
        },
    ];
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
                            <span className="items-start justify-start-safe bg-[#EDB75E] text-black font-medium px-5 py-2 rounded-full text-sm padding2">For Sale</span>
                            <div className="flex items-center gap-3">
                                <button className=" w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center">

                                    <RiShareForwardLine size={24} color={"#EDB75E"} />
                                </button>
                                <button className=" w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center">
                                    <CgMoreVertical size={24} color={"#EDB75E"} />
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

                                <span className="font-normal text-xl text-[#ffffff]">{property.square_footage}</span>
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
                                        <Image src={agent.avatar} alt={agent.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font16">{agent.name}</p>
                                        <span className="font12 text-[#989797]">License {agent.license}</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={agent.phone} className="bg-transparent  text-[#EDB75E] w-9 h-9">
                                            <Image src="/images/call.png" alt="Phone" width={24} height={24} />
                                        </a>
                                        <a href={agent.email} className="bg-transparent text-[#EDB75E] w-9 h-9">
                                            <Image src="/images/sms.png" alt="Phone" width={24} height={24} />

                                        </a>
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