import { dateToString } from "@/helpers/DateConverters";
import { Blog } from "@/types/Blog";

interface NewsListCardProps {
    item: any; // Replace 'any' with a more specific type if available
}
export const FeaturedNewsListCard = ({item}:NewsListCardProps) => {
    return (
        <div className="row featured-div-mt">
            <div className="featured-blog-img">
                <img className="featured-img" src={item.image} alt="Featured Blog"/>
            </div>
            <div>
                <div className="date-div">
                    <span className="date-div-span">{dateToString(item?.publishDate)}</span>
                </div>
                <p>{item.title}</p>
            </div>
        </div>
        )
}