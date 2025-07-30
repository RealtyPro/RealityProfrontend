import axiosInstance from "../Api";

export const fetchUserProfile = async () => {

    const response = await axiosInstance.get(`/customer/profile`);
    return response.data;
}
export const fetchUserWhishlist = async () => {

    const response = await axiosInstance.get(`/v1/customer/property/wishlist`);
    return response.data;
}
export const postUserPropertyWishlist = async (data:object) => {

    const response = await axiosInstance.post(`/v1/property/wishlist`,data);
    return response.data;
}
export const postUserLogout = async () => {

    const response = await axiosInstance.post(`/customer/logout`);
    return response.data;
}