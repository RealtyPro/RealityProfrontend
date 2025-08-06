import axiosInstance from "../Api";
export const  fetchTestimonialsList =async (page:number) =>{
    const response = await axiosInstance.get(`/v1/testimonials?page=${page}&ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}