"use client"
import { postUserPropertyWishlist } from "@/services/profile/ProfileServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure2 } from "react-icons/tb";
interface PropertyCardProps {
    item: any;
    handleModal: () => void
    postWishlistMutation: (data: any) => void;
    removeWishlistMutation?: (id: string) => void;

}

export const MlsPropertyCard = ({ item, handleModal, postWishlistMutation, removeWishlistMutation }: PropertyCardProps) => {
    const queryClient = useQueryClient();

    // const postWishlistMutation = useMutation({
    //     mutationFn: (property: any) => postUserPropertyWishlist(property),

    //     onSuccess: (data) => {
    //         console.log("blog posted successfully:", data);
    //         // window.location.href = "/admin/blog";
    //         queryClient.invalidateQueries({ queryKey: ['mlsPropertyList'] });


    //     },
    //     onError: (error) => {
    //         console.error("Error  while creating new blog:", error);
    //     },
    // });
    const handleAddWishlist = async (item: any) => {
        const token = sessionStorage.getItem("access_token");
        console.log(token)
        if (token == null) {
            handleModal();
            return;
        }

        const data = {
            listing_id: item.mls_listingid,
            listing_key: item.mls_listingkey,
            agent_id: 12,
            user_id: sessionStorage.getItem("customer_id"),
            ListAgentMlsId: "NWM1307293"
        };

        try {
            await postWishlistMutation(data);
            // The mutation's onSuccess will handle the query invalidation
        } catch (error) {
            console.error("Error adding to wishlist:", error);
        }
    }
    const removeFromWishlist = (id: string) => {
        const token = sessionStorage.getItem("access_token");
        console.log(token)
        if (token == null) {
            handleModal();
        }
        else {

            removeWishlistMutation && removeWishlistMutation(id);
        }
    }
    const handleViewProperty = (item: any) => {
        window.location.href = `/properties/${item.mls_listingkey}`;
    }
    return (


        <div className="property-card mls-property-card">
            <div className="mls-property-image" onClick={() => handleViewProperty(item)}>
                <Image
                    src={item.cover_photo[0]}
                    alt="Property"
                    width={400}
                    height={250}
                />

            </div>
            <div className="mls-property-info">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-4/12 px-4 ">
                        <h3 className="mlscardheading">${Number(item.price).toLocaleString()}</h3>
                    </div>
                    <div className="w-full sm:w-7/12 px-4 items-end-safe  mls-span flex">
                        <span className="flex">{item.beds} Beds
                            <IoBedOutline
                                className="mt-4 ml-4"
                                color={'#edb75e'} /></span>
                        <span>&nbsp;&nbsp;</span>
                        <span className="flex">{item.baths} Baths
                            <PiBathtub
                                className="mt-4 ml-4"
                                color={'#edb75e'} />
                        </span>
                        <span>&nbsp;&nbsp;</span>
                        <span className="flex">{item.square_footage} SqFt
                             <TbRulerMeasure2
                                className="mt-4 ml-4"
                                color={'#edb75e'} />
                        </span>
                    </div>
                </div>




                <div className="property-location">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57"
                        fill="none">
                        <path
                            d="M28.0215 31.4024C32.045 31.4024 35.3067 28.1407 35.3067 24.1172C35.3067 20.0937 32.045 16.832 28.0215 16.832C23.998 16.832 20.7363 20.0937 20.7363 24.1172C20.7363 28.1407 23.998 31.4024 28.0215 31.4024Z"
                            stroke="#151515" strokeWidth="3.5" />
                        <path
                            d="M8.45355 19.869C13.0535 -0.352101 43.0116 -0.32875 47.5882 19.8923C50.2734 31.7541 42.8948 41.7947 36.4269 48.0058C31.7335 52.5357 24.3082 52.5357 19.5915 48.0058C13.1469 41.7947 5.7683 31.7308 8.45355 19.869Z"
                            stroke="#151515" strokeWidth="3.5" />
                    </svg> */}
                    <span>{item.address}</span>
                </div>

            </div>
            <div className="flex items-center justify-between mb5 w-full padding2">
                <span className="listed-bold-span">Listed With</span>
                <button onClick={item.is_wishlisted ? () => removeFromWishlist(item.wishlist_id) : () => handleAddWishlist(item)}>
                    {item.is_wishlisted ?
                        <IoMdHeart size={24} color="#edb75e" /> :
                        <IoIosHeartEmpty size={24} color="#edb75e" />
                    }
                </button>
            </div>
        </div>






    )
}