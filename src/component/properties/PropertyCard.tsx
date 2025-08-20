"use client"
import { postUserPropertyWishlist, removeWishlistItem } from "@/services/profile/ProfileServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
interface PropertyCardProps {
    item: any; // Replace 'any' with a more specific type if available
    handleModal: () => void
    hideWishlist?: boolean; // Optional prop to hide wishlist button
}

export const PropertyCard = ({ item, handleModal,hideWishlist }: PropertyCardProps) => {
    const queryClient = useQueryClient();

    const postWishlistMutation = useMutation({
        mutationFn: (property: any) => postUserPropertyWishlist(property),

        onSuccess: (data) => {
            console.log("blog posted successfully:", data);
            // window.location.href = "/admin/blog";

        },
        onError: (error) => {
            console.error("Error  while creating new blog:", error);
        },
    });
    const removeWishlistMutation = useMutation({
        mutationFn: (id: string) => removeWishlistItem(id),

        onSuccess: (data) => {
            alert("item removed from successfully");
            queryClient.invalidateQueries({ queryKey: ['userWishlistInfo'] });
        },
        onError: (error) => {
            console.error("Error  while deletion:", error);
        },
    });
    const removeFromWishlist = (id: string) => {
        const token = sessionStorage.getItem("access_token");
        console.log(token)
        if (token == null) {
            handleModal();
        }
        else {

            removeWishlistMutation.mutate(id);
        }
    }

    return (
        <div className="property-card">
            <div className="property-image">
                <Image
                    src={item.cover_image ? item.cover_image[0] : item.cover_photo[0]}
                    alt="Property"
                    width={400}
                    height={250}
                />
                {/* <div className="property-badges">
                    <span className="prop-badge">For Rent</span>
                    <button className="favorite-btn"
                        onClick={() => handleAddWishlist(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"
                            fill="none">
                            <path
                                d="M23.6651 38.6293C23.0441 38.8484 22.0214 38.8484 21.4004 38.6293C16.1041 36.8212 4.26953 29.2785 4.26953 16.4943C4.26953 10.851 8.81707 6.28516 14.4239 6.28516C17.7478 6.28516 20.6882 7.89232 22.5327 10.3761C24.3773 7.89232 27.336 6.28516 30.6416 6.28516C36.2484 6.28516 40.7959 10.851 40.7959 16.4943C40.7959 29.2785 28.9614 36.8212 23.6651 38.6293Z"
                                stroke="#151515" strokeWidth="2.73948" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </button>
                </div> */}
            </div>
            <div className="property-info">
                {/* <h3>{item.title}</h3> */}
                <h3 className="mlscardheading">${Number(item.price).toLocaleString()}</h3>
                <div className="flex justify-end-safe items-center-safe gap-2 mls-span">
                    <span>{item.beds} Bed</span>
                    <span className="inline-block w-[4px] h-[4px] bg-white rounded-full"></span>
                    <span>{item.baths} Bath</span>
                    <span className="inline-block w-[4px] h-[4px] bg-white rounded-full"></span>
                    <span>{item.square_footage} Sq Ft</span>
                </div>
                {/* <div className="property-features">
                    <span className="feature">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57"
                            fill="none">
                            <path
                                d="M15.7717 9.33203H40.2908C43.706 9.33203 46.4986 11.9981 46.7009 15.3625L46.7125 15.7537L46.7139 23.5851C49.2737 24.3097 51.1837 26.5823 51.3681 29.3275L51.3828 29.7647V47.2783C51.3828 48.2456 50.5987 49.0297 49.6315 49.0297C48.7448 49.0297 48.012 48.3707 47.896 47.5161L47.8801 47.2783V42.0242H8.18242V47.2783C8.18242 48.165 7.52356 48.8978 6.6687 49.0138L6.43106 49.0297C5.5444 49.0297 4.81165 48.3707 4.69568 47.5161L4.67969 47.2783V29.7647C4.67969 26.8249 6.65514 24.3464 9.35103 23.5844L9.35 15.7537C9.35 12.3385 12.0161 9.54593 15.3805 9.34375L15.7717 9.33203ZM44.9612 26.8457H11.1014C9.59003 26.8457 8.34698 27.9944 8.19749 29.4662L8.18242 29.7647V38.5215H47.8801V29.7647C47.8801 28.2533 46.7314 27.0103 45.2596 26.8609L44.9612 26.8457ZM40.2908 12.8348H15.7717C14.2603 12.8348 13.0173 13.9834 12.8678 15.4553L12.8527 15.7537V23.343H16.3555C16.3555 22.0533 17.401 21.0078 18.6906 21.0078H23.3609C24.5584 21.0078 25.5455 21.9093 25.6805 23.0706L25.6961 23.343H30.3664C30.3664 22.0533 31.4119 21.0078 32.7016 21.0078H37.3719C38.5694 21.0078 39.5564 21.9093 39.6914 23.0706L39.7071 23.343H43.2098V15.7537C43.2098 14.2424 42.0611 12.9993 40.5893 12.8498L40.2908 12.8348Z"
                                fill="#151515" />
                        </svg>
                        {item.beds} Bedrooms
                    </span>
                    <span className="feature">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"
                            fill="none">
                            <g clipPath="url(#clip0_2788_4646)">
                                <path
                                    d="M48.4807 19.801H37.3789V16.8432H38.8061C39.5996 16.8432 40.2428 16.181 40.2428 15.3643C40.2428 14.5475 39.5996 13.8853 38.8061 13.8853H37.3789V10.9324C37.3789 7.66778 34.7985 5.01172 31.6269 5.01172C28.4552 5.01172 25.8748 7.66769 25.8748 10.9324V12.4064C25.8748 13.2231 26.5181 13.8853 27.3116 13.8853C28.1051 13.8853 28.7484 13.2231 28.7484 12.4064V10.9324C28.7484 9.29875 30.0396 7.96958 31.6268 7.96958C33.2139 7.96958 34.5052 9.29865 34.5052 10.9324V19.801C32.8453 19.801 7.82451 19.801 6.14734 19.801C4.29883 19.801 2.79492 21.3491 2.79492 23.2519V27.1957C2.79492 28.0125 3.43817 28.6746 4.23169 28.6746H5.88386L6.77172 39.6412C7.03875 42.9397 9.39144 45.622 12.4942 46.2717V47.9008C12.4942 48.7175 13.1374 49.3797 13.9309 49.3797C14.7244 49.3797 15.3677 48.7175 15.3677 47.9008V46.4218H39.2651V47.9008C39.2651 48.7175 39.9083 49.3797 40.7018 49.3797C41.4953 49.3797 42.1386 48.7175 42.1386 47.9008V46.2716C45.2396 45.6223 47.5938 42.9415 47.861 39.6412L48.7491 28.6746H50.3965C51.19 28.6746 51.8332 28.0125 51.8332 27.1957V23.2519C51.8332 21.3491 50.3293 19.801 48.4807 19.801ZM23.0099 34.5904H14.39V22.7589H23.0022L23.0099 34.5904ZM5.66855 23.2519C5.66855 22.9801 5.88338 22.7589 6.14744 22.7589H11.5164V25.7168H5.66855V23.2519ZM44.9975 39.3956C44.8128 41.6769 42.926 43.464 40.702 43.464H13.931C11.707 43.464 9.82014 41.6769 9.63548 39.3955L8.76744 28.6746H11.5164V36.0693C11.5164 36.8861 12.1596 37.5482 12.9531 37.5482H24.4476C25.2412 37.5482 25.885 36.8854 25.8844 36.0683L25.8796 28.6746H45.8654L44.9975 39.3956ZM48.9596 25.7168H25.8778L25.8759 22.7589H48.4807C48.7448 22.7589 48.9596 22.9801 48.9596 23.2519V25.7168Z"
                                    fill="#151515" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2788_4646">
                                    <rect width="51.3735" height="51.3735" fill="white"
                                        transform="translate(0.447266 0.324219)" />
                                </clipPath>
                            </defs>
                        </svg>
                        {item.baths} Bathrooms
                    </span>
                </div> */}
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
                {
                    hideWishlist ? <></> :

                        <button onClick={() => removeFromWishlist(item.id)}>
                            {item.is_wishlisted ?
                                <IoMdHeart size={24} color="#151515" /> :
                                <IoIosHeartEmpty size={24} color="#151515" />
                            }
                        </button>
                }
            </div>
        </div>

    )
}