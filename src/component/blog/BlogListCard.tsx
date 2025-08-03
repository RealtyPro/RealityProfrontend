import { dateToString } from "@/helpers/DateConverters";
import { useEffect } from "react";

interface BlogListCardProps {
    item: any; // Replace 'any' with a more specific type if available
}

export const BlogListCard = ({ item }: BlogListCardProps) => {
        const handleView=(id:string)=>{
            window.location.href=`/blog/${id}`
        }

    return (
        <div
            className="news-blog-card"
            style={{ backgroundImage: item.image ? `url(${item.image})` : ` url('../../public/images/image3.png')` }}
        >
            <div className="news-blog-info">
                <p className="news-blog-date">{dateToString(item?.publishDate)}</p>
                <h3>{item.title}</h3>
                <button className="news-blog-button" onClick={()=>handleView(item.slug)}>
                    Read More
                </button>
            </div>
        </div>
    )
}