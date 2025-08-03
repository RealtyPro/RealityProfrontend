import axiosInstance from "../Api";

export const fetchUserProfile = async () => {

    const response = await axiosInstance.get(`/customer/profile`);
    return response.data;
}
export const fetchUserWhishlist = async () => {

    const response = await axiosInstance.get(`/v1/customer/property/wishlist?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}
export const postUserPropertyWishlist = async (data:object) => {

    const response = await axiosInstance.post(`/v1/property/wishlist?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`, data);
    return response.data;
}
export const postUserLogout = async () => {

    const response = await axiosInstance.post(`/customer/logout`);
    return response.data;
}
  export const removeWishlistItem = async (id:string) => {

    try {
      const response = await axiosInstance.delete('/v1/customer/property/wishlist/'+id);
      return response.data;
    } catch (error) {
      throw error;
    }
  };