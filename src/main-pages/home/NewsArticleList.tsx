"use client"
import React, { useEffect, useState } from "react";
import { useBlogList, useNewsList } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";
import { NewsArticleCard } from "@/component/home/NewsArticleCard";
import Providers from "@/provider/QueryClientProvider";

const NewsArticleList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    // const [total, setTotal] = useState(0);
    // const [perPage, setPerPage] = useState(10);
    const { data: blogListDatas, isLoading, error } = useNewsList();

    useEffect(() => {
        if (blogListDatas && !isLoading && !error) {
            setBlogs(blogListDatas.data || []);
            // setCurrentPage(blogListDatas.meta?.current_page || 1);
            // setTotalPages(blogListDatas.meta?.last_page || 1);
            // setTotal(blogListDatas.meta?.total || 0);
            // setPerPage(blogListDatas.meta?.per_page || 10);
        }
    }, [blogListDatas, isLoading, error]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;
   const handleBlog=()=>{
        window.location.href='/blog';
    }
    return (
        <Providers>
            <div className="news-grid">
                {/* {JSON.stringify(blogs)} */}
                {blogs.length ? (
                    <>
                        {blogs.slice(0, 3).map((item) => (

                            <NewsArticleCard key={item.id} item={item} />
                        ))}
                    </>
                ) : (
                    <div>No News articles found.</div>
                )}
            </div>
            <div className="section-cta mb5 ">
                <button
                    onClick={() => handleBlog()}
                    className="btn-secondary">See All News & Articles</button>
            </div>
        </Providers>
    );
}
export default NewsArticleList;