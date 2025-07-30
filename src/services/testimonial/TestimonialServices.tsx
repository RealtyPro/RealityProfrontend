import axiosInstance from "../Api";
export const  fetchTestimonialsList =async (page:number) =>{
    const response = await axiosInstance.get(`/v1/testimonials?page=${page}`);
    return response.data;
}