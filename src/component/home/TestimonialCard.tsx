import Image from "next/image";

export const TestmonialCard = ({ item, index }: { item: any; index: number }) => {
    return (
        <div className={((index + 1) % 2) ? "testimonial-card " : "testimonial-card active"}>
            <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
            </div>
            <p className="testimonial-text">{item.details}</p>
            <div className="testimonial-author">
                <Image
                    src={item?.image}
                    alt="Cody Fisher"
                    width={48}
                    height={48}
                    className="author-avatar"
                />
                <div className="author-info">
                    <h4>{item.name}</h4>
                    <span>{item.position}</span>
                </div>
            </div>
        </div>
    )
}