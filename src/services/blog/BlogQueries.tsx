"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchArticleList, fetchBlogList, fetchNewsList, fetchSingleBlog } from "./BlogServices";

export const useBlogList = (data: { pageLimit?: number; }) => {
    return useQuery({ queryKey: ['bloglist', ], queryFn: () => 
       fetchBlogList(data) });
  };
  export const useNewsList = () => {
    return useQuery({ queryKey: ['newslist', ], queryFn: () => 
       fetchNewsList() });
  };
   export const useArticleList = () => {
    return useQuery({ queryKey: ['articlelist', ], queryFn: () => 
       fetchArticleList() });
  };
   export const useSingleBlog = (id:string) => {
    return useQuery({ queryKey: ['blogData',id ], queryFn: () =>  fetchSingleBlog(id) });
  };