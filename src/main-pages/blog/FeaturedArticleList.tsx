"use client"
import { FeaturedNewsListCard } from "@/component/blog/FeaturedNewsListCard";
import { useArticleList } from "@/services/blog/BlogQueries";
import { Blog } from "@/types/Blog";
import { useEffect, useState } from "react";

const FeaturedArticleList = () => {
    const [article, setArticle] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const { data: articleListDatas, isLoading, error } = useArticleList();
    useEffect(() => {
        if (articleListDatas && !isLoading && !error) {
            console.log("articleListDatas", articleListDatas)
            setArticle(articleListDatas.data || []);
            setCurrentPage(articleListDatas.meta?.current_page || 1);
            setTotalPages(articleListDatas.meta?.last_page || 1);
            setTotal(articleListDatas.meta?.total || 0);
            setPerPage(articleListDatas.meta?.per_page || 10);
        }
    }, [articleListDatas, isLoading, error]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;

    return (
        <>
            {article.length ? (
                <>
                    {article.slice(0, 3).map((item, index) => (
                        <FeaturedNewsListCard key={item.id} item={item} />

                    ))}
                </>
            ) : (
                <div>No blogs found.</div>
            )}
        </>
    )
}
export default FeaturedArticleList;