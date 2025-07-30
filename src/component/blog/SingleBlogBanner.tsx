import { dateToString } from "@/helpers/DateConverters";

interface BlogProps{
   blog: any;
}
export const SingleBlogBanner = ({blog}:BlogProps) => {
    return (
        <section className="single-blog-banner-hero">
            <div className="hero-overlay"></div>
            <div className="container ml2">
                <div className="hero-content">
                    <div className="single-blog-hero-text">
                        <div className="width-20">
                            <p className="news-blog-date">{dateToString(blog?.publishDate)}</p>
                        </div>
                        <div className="single-blog-header-div">


                            <span className="heading-text">{blog?.title}</span>
                            <p className="heading-sub-text">{blog?.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}