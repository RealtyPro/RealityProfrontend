"use client"
import React, { useEffect, useState } from "react";
import { BlogListCard } from "@/component/blog/BlogListCard"
import { useBlogList } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";
import { useQueryClient } from "@tanstack/react-query";

const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const queryClient = useQueryClient();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const { data: blogListDatas, isLoading, error } = useBlogList({ pageLimit: currentPage});

    useEffect(() => {
        if (blogListDatas && !isLoading && !error) {
            setBlogs(blogListDatas.data || []);
            setCurrentPage(blogListDatas.meta?.current_page || 1);
            setTotalPages(blogListDatas.meta?.last_page || 1);
            setTotal(blogListDatas.meta?.total || 0);
            setPerPage(blogListDatas.meta?.per_page || 10);
        }
    }, [blogListDatas, isLoading, error]);
    useEffect(() => {

        queryClient.invalidateQueries({ queryKey: ['bloglist'] });


    }, [currentPage, queryClient]);

    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;

    return (
        <>
            {blogs.length ? (
                <>
                    {blogs.map((item) => (

                        <BlogListCard key={item.id} item={item} />
                    ))}
                    <div className="pagination">
                        <a
                            href="#"
                            className="page"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageClick(currentPage - 1);
                            }}
                            style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.4 : 1 }}
                        >
                            &laquo;
                        </a>

                        {Array.from({ length: totalPages }).map((_, index) => {
                            const page = index + 1;
                            return (
                                <a
                                    href="#"
                                    key={page}
                                    className={`page ${page === currentPage ? "active" : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageClick(page);
                                    }}
                                >
                                    {page}
                                </a>
                            );
                        })}

                        <a
                            href="#"
                            className="page"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageClick(currentPage + 1);
                            }}
                            style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.4 : 1 }}
                        >
                            &raquo;
                        </a>
                    </div>
                </>
            ) : (
                <div>No blogs found.</div>
            )}
        </>
    );
}
export default BlogList;