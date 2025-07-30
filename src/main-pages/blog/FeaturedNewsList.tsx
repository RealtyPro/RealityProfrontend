"use client"
import { FeaturedNewsListCard } from "@/component/blog/FeaturedNewsListCard"
import { useNewsList } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";
import { useEffect, useState } from "react";

const FeaturedNewsList = () => {
    const [news, setNews] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const { data: newsListDatas, isLoading, error } = useNewsList();
    useEffect(() => {
        if (newsListDatas && !isLoading && !error) {
            console.log("newsListDatas", newsListDatas)
            setNews(newsListDatas.data || []);
            setCurrentPage(newsListDatas.meta?.current_page || 1);
            setTotalPages(newsListDatas.meta?.last_page || 1);
            setTotal(newsListDatas.meta?.total || 0);
            setPerPage(newsListDatas.meta?.per_page || 10);
        }
    }, [newsListDatas, isLoading, error]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;

    return (
        <>
            {news.length ? (
                <>
                    {news.slice(0, 3).map((item,index) => (
                        <FeaturedNewsListCard key={item.id} item={item} />
                  
                  ))}
                </>
            ) : (
                <div>No blogs found.</div>
            )}
        </>
    )
}
export default FeaturedNewsList;