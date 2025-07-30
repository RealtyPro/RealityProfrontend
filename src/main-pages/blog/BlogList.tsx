"use client"
import React, { useEffect, useState } from "react";
import { BlogListCard } from "@/component/blog/BlogListCard"
import { useBlogList } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";

const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const { data: blogListDatas, isLoading, error } = useBlogList();

    useEffect(() => {
        if (blogListDatas && !isLoading && !error) {
            setBlogs(blogListDatas.data || []);
            setCurrentPage(blogListDatas.meta?.current_page || 1);
            setTotalPages(blogListDatas.meta?.last_page || 1);
            setTotal(blogListDatas.meta?.total || 0);
            setPerPage(blogListDatas.meta?.per_page || 10);
        }
    }, [blogListDatas, isLoading, error]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;

    return (
        <>
            {blogs.length ? (
                <>
                    {blogs.map((item) => (
                        
                        <BlogListCard key={item.id} item={item} />
                    ))}
                </>
            ) : (
                <div>No blogs found.</div>
            )}
        </>
    );
}
export default BlogList;