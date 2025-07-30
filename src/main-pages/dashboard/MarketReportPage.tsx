"use client";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
 const MarketReportPage = () => {
    return (
        <main className="flex-1 p-10 bg-[#171717] min-h-screen main-content-p ">
            {/* Top Bar #171717         // main-content-pt*/}
            <div className="flex justify-between items-center mb-8 content-border 
                    border-[#3B3B3B] p-4 rounded-lg">
                <p className="font60 font-serif font-semibold text-shadow-none">
                    Market Report
                </p>
            </div>
            {/* Main Content Area */}
            {/* market-report-sale */}
            <div >
                <div className=" rounded-2xl p-8 min-h-[200px] flex flex-row  w-full justify-center 
                bg-[#202020]  mx-auto padding2 border border-[#4E4E4E]">
                    <div className="flex-3 text-left padding2">
                        <div className="text-base text-white text-[22px]">Create Your First Market Report!</div>
                        <div className="text-base text-[#ADADAD] text-[16px]">
                            Search by location to see market trends, similar homes, and so much more.
                        </div>
                        <div className={`relative w-full max-w-md mt5 `}>
                            <div className="relative">
                                {/* Search Icon */}
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex-1">
                                    <IoSearch className="text-[#EDB75E] text-lg" />
                                </div>

                                {/* Input Field */}
                                <input
                                    type="text"
                                    // value={inputValue}
                                    // onChange={handleChange}
                                    placeholder={"Saved Searches"}
                                    className="w-full pl-12 pr-4 py-3 bg-black border border-[#4E4E4E] rounded-full 
                   text-[#ffffff] placeholder-[#ADADAD] focus:outline-none focus:ring-2 
                   focus:ring-[#EDB75E] focus:border-transparent transition-all paddingLeft-10"/>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-1/2">

                        <Image
                            src="/images/market-report-sale.png"
                            alt="Market Report"
                            width={450}
                            height={500}
                            className="w-full h-auto mb-4 paddingLeft20"
                        />
                    </div>

                </div>
                <div className="marginTop rounded-2xl p-8 min-h-[200px] flex flex-row  w-full justify-center 
                bg-[#202020]  mx-auto padding2 border border-[#4E4E4E]">
                    <div className="max-w-1/2">

                        <Image
                            src="/images/market-report-mob.png"
                            alt="Market Report"
                            width={300}
                            height={370}
                            className="w-full h-auto mb-4 h-[370px] mob-pic-height"
                        />
                    </div>
                    <div className="flex-3 text-left padding2 paddingRight10 paddingTop6">
                        <div className="text-base text-white text-[22px]">
                            Get the Realtipro Home App
                        </div>
                        <div className="text-base text-[#ADADAD] text-[16px] ">
                            Don’t miss out on the perfect home for you, connecting instantly with your agent, and so much more.                        </div>
                        <div className="flex-1 w-full mt5">
                            <button className="flex p-8 items-center gap-3 bg-[#171717] border 
                            border-[##4E4E4E] text-[#4C4C4C] rounded-full  text-center w-full
                            hover:bg-[#171717] transition padding2 justify-center">
                                {/* px-6 py-2 */}

                                Mobile Number
                            </button>
                        </div>
                        <div className="w-full mt5">
                            <button className="flex p-4 items-center padding2
                gap-3 bg-[#EDB75E] text-black rounded-full text-center w-full
                hover:bg-[#e0a94e] transition padding2 justify-center">
                                Text Me This Free App
                            </button>
                        </div>
                        <div className="text-base text-white text-[12px] flex justify-center mt-4">
                            Standard messaging rates apply.
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
export default MarketReportPage;