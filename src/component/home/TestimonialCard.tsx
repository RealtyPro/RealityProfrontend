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
            <p className="testimonial-text">Lorem ipsum is simply free text dolor sit amet, consectetur adipisicing
                elit, sed do incididunt ut labore et</p>
            <div className="testimonial-author">
                <Image
                    src="/images/review.png"
                    alt="Cody Fisher"
                    width={48}
                    height={48}
                    className="author-avatar"
                />
                <div className="author-info">
                    <h4>Cody Fisher</h4>
                    <span>Market Manager</span>
                </div>
            </div>
        </div>
    )
}