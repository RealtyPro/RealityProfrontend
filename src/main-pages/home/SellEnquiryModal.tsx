import { useState } from "react";
interface SellModalProps {
    handleOpenModal: () => void;
}
export default function SellModal({ handleOpenModal }: SellModalProps) {

    return (
        <>


            <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
                {/* Modal container */}
                <div className="bg-white w-2/3 max-w-3xl rounded-lg shadow-lg p-6 text-black padding2">

                    {/* Modal header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Sell Your Home</h2>
                        <button
                            className="text-gray-500 hover:text-black"
                            onClick={handleOpenModal}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Modal body */}
                    <form className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <input
                            type="text"
                            placeholder="ZIP Code"
                            className="border padding3 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                        />
                        <div className="col-span-2">
                            <select
                                className="w-full padding2 border border-gray-300 rounded
                                 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#edb75e]"
                            >
                                <option value="">When are you planning to sell?</option>
                                <option value="1yr">Now</option>

                                <option value="0-6">0-6 Months</option>
                                <option value="2yr">6+ Months</option>
                            </select>
                        </div>
                    </form>

                    {/* Modal footer */}
                    <div className="flex justify-end mt-6 mt5">
                        {/* <button
                            type="button"
                            className="mr-2 px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
                            onClick={handleOpenModal}
                        >
                            Cancel
                        </button> */}
                        <button
                            type="submit"
                            className="px-4 py-2 sell-btn rounded bg-[#edb75e] text-black hover:bg-[#d9a74d] padding1"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </div>

        </>
    );
}
