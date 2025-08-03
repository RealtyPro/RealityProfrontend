import axiosInstance from "../Api";
import { Enquiry } from "@/types/Enquiry";
export const  fetchBlogList =async () =>{
    const response = await axiosInstance.get(`/v1/blogs?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}
export const  fetchNewsList =async () =>{
    const response = await axiosInstance.get(`/v1/blog/featured/news?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}
export const  fetchArticleList =async () =>{
    const response = await axiosInstance.get(`/v1/blogs?ListAgentMlsId=${process.env.NEXT_PUBLIC_REALTY_PRO_AGENT_ID}`);
    return response.data;
}
export const  fetchSingleBlog =async (id:string) =>{
    const response = await axiosInstance.get(`/v1/blog/${id}`);
    return response.data;
}
export const  postEnquiry =async (enquiryData:Enquiry) =>{
    const response = await axiosInstance.post(`/v1/enquiry`,enquiryData);
    return response.data;
}