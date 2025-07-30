import axiosInstance from "../Api";
export const fetchNeighborhoodList = async () => {
   
    const response = await axiosInstance.get(`/v1/blogs`);
    return response.data;
}