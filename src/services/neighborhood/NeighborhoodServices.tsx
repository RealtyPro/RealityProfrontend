import axiosInstance from "../Api";
export const fetchNeighborhoodList = async () => {
   
    const response = await axiosInstance.get(`/v1/neighbourhoods`);
    return response.data;
}