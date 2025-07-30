import { dateToString } from "@/helpers/DateConverters";
import Image from "next/image";

interface NewsArticleCardProps {
    item: any; 
}
export const NewsArticleCard = ({item}:NewsArticleCardProps) => {
    return (
        <article className="news-card">
            <div className="news-image">
                <Image
                    src="/images/image1.png"
                    alt="Article"
                    width={400}
                    height={250}
                />
            </div>
            <div className="news-content">
                <time>{dateToString(item?.publishDate)}</time>
                <h3>{item.title}</h3>
                <button className="read-more-btn">Read More</button>
            </div>
        </article>
    )
}