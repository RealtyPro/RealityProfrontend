"use client";
import { useUserWishlist } from "@/services/profile/ProfileQueries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome, FaPlus } from "react-icons/fa";
const ColloctionPage = () => {
    const router = useRouter();
    const [itemCount, setItemCount] = useState(0);
    const [coverImage, setCoverImage] = useState("");
    const { data: wishListDatas, isLoading, error } = useUserWishlist();
    useEffect(() => {
        console.log("wishListDatas?.data?.count", wishListDatas?.count)
        setItemCount(wishListDatas?.count || 0);
        setCoverImage(wishListDatas?.data?.[0]?.cover_image[0] || "");

    }, [wishListDatas, isLoading, error])

    return (
        <main className="flex-1 p-10 bg-[#171717] min-h-screen main-content-p ">
            {/* Top Bar #171717         // main-content-pt*/}
            <div className="flex justify-between items-center mb-8 content-border border-[#3B3B3B] p-4 rounded-lg">
                <h1 className="font60 font-serif font-semibold text-shadow-none">Collection</h1>
                <button className="flex padding2 items-center gap-2 bg-[#EDB75E] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e0a94e] transition">
                    <FaPlus />
                    Create New
                </button>
            </div>
            {/* Main Content Area */}
            <div className="bg-[black] rounded-2xl p-8 min-h-[300px] flex flex-col items-center 
           justify-center border border-[#232323] max-w-lg mx-auto">
                <div
                    onClick={() => router.push('/collection/favourites')}
                    className="collection-listing-div " style={{ backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <div className="text-lg text-black mb-4">{itemCount == 0 ? "No listing yet" : itemCount}</div> */}
                    <button className="flex items-center justify-center w-10 h-10 
                    rounded-full bg-[#232323] text-[#EDB75E] text-xl mb-2">
                        <FaPlus />
                    </button>
                </div>
                <div className="collection-listing-content-div">
                    <div className="text-base text-white cursor-pointer  "
                        onClick={() => router.push('/collection/favourites')}>Favorites</div>
                    <div className="text-base text-white text-[12px]">Favorites</div>

                    <div className="flex items-center gap-2  text-[#EDB75E] justify-end marginTop15"
                        onClick={() => router.push('/collection/favourites')}>
                        <span>{itemCount}</span>
                        <FaHome />
                        <span>Home</span>
                    </div>
                </div>

            </div>
        </main>
    );
}
export default ColloctionPage;