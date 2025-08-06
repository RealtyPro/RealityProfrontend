import axiosInstance from "../Api";
export const fetchNeighborhoodList = async () => {
   
    const response = await axiosInstance.get(`/v1/neighbourhoods?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}