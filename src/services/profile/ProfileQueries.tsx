import {  useQuery } from "@tanstack/react-query";
import { fetchUserProfile, fetchUserWhishlist } from "./ProfileServices";

export const useProfile = () => {
    return useQuery({ queryKey: ['profileInfo', ], queryFn: () => 
       fetchUserProfile() });
  };
 export const useUserWishlist = () => {
    return useQuery({ queryKey: ['userWishlistInfo', ], queryFn: () => 
       fetchUserWhishlist() });
  };