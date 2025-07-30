"use client"
import { SingleBlogBanner } from "@/component/blog/SingleBlogBanner"
import { useSingleBlog } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleBlog = () => {
    const [blog, setBlog] = useState<Blog | undefined>(undefined);
    const params = useParams();
    const blogId = params && typeof params === "object" && "id" in params ? (params as { id: string }).id : undefined;
    const { data: blogData, isLoading, error } = useSingleBlog(blogId ?? "");
    useEffect(() => {
        if (blogData?.data) {
            console.log("blogData.data",blogData.data)
            setBlog(blogData.data);
        }
    }, [blogData, isLoading]);
    return (
        <>
            <SingleBlogBanner  blog={blog}/>
        </>
    )
}
export default SingleBlog;