"use client";
// import { useRouter } from "next/navigation";
import {  FaPlus } from "react-icons/fa";
// import { SlArrowLeft } from "react-icons/sl";
// import { RiMoreLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
 const SavedSearchesPage = () => {
    return (
        <main className="flex-1 p-10 bg-[#171717] min-h-screen main-content-p ">
            {/* Top Bar #171717         // main-content-pt*/}
            <div className="flex justify-between items-center mb-8 content-border 
                    border-[#3B3B3B] p-4 rounded-lg">
                {/* <div className="flex-2 "> */}
                {/* <span>
                        <div className="flex cursor-pointer" onClick={() => router.push('/collection')}>
                            <SlArrowLeft size="15px" color="#EDB75E" style={{ marginTop: "1%" }} />
                            <span className="text-[#EDB75E]">collection</span>
                        </div> */}
                <p className="font60 font-serif font-semibold text-shadow-none">
                    Saved Searches</p>

                {/* </span> */}
                {/* </div> */}
                {/* <div className="flex-1 justify-items-end-safe"> */}
                <button className="flex p-8 items-center
                             gap-3 bg-[#EDB75E] text-black rounded-full font-semibold 
                             hover:bg-[#e0a94e] transition padding2">
                    {/* px-6 py-2 */}

                    <FaPlus />
                    Add Listing
                </button>
                {/* </div> */}

            </div>
            {/* Main Content Area */}
            <div>
                <div className="text-base text-white text-[18px]">Favorites</div>
                <div className="text-base text-white text-[20px] mb5">Save Listing (0)
                </div>

                <div className="bg-[black] rounded-2xl p-8 min-h-[200px] flex flex-col items-center 
                   border border-[#232323] max-w-1/3 mx-auto padding2">
                    <div className="text-base text-white text-[18px] mt-4">
                        Add Listing
                    </div>

                    <div className="text-base text-white text-[16px] p-4 content-border">
                        You can search and add
                        properties to a collection to keep
                        track of your favorite homes
                        using the heart icon
                    </div>
                    <button className="flex p-4 items-center padding2
                        gap-3 bg-[#EDB75E] text-black rounded-full font-semibold 
                        hover:bg-[#e0a94e] transition">
                        {/* px-6 py-2 */}

                        <IoSearchSharp />
                        Search Listing
                    </button>

                </div>
                <div className="marginTop rounded-2xl p-8 min-h-[200px] flex flex-row  w-full justify-center 
                bg-[#202020]  mx-auto padding2 border border-[#4E4E4E]">
                    <div className="max-w-1/2 flex flex-col  justify-center">

                        <div className="text-base text-white text-[22px]">
                            Get the Realtipro Home App
                        </div>
                        <div className="text-base text-[#ADADAD] text-[16px] ">
                            Don’t miss out on the perfect home for you, connecting instantly with your agent, and so much more.                        </div>

                    </div>
                    <div className="flex-3 text-left padding2 paddingRight10 ">
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
export default SavedSearchesPage;