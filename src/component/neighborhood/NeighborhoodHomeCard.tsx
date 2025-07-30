import Image from "next/image";

interface NeighborhoodHomeCardProps {
    item: any; // Replace 'any' with a more specific type if available
}

export const NeighborhoodHomeCard = ({ item }: NeighborhoodHomeCardProps) => {
    console.log("item", item);
    return (
        <div className="neighborhood-card">
            <Image
                src="/images/neighborhood-1.png"
                alt="Orange"
                width={300}
                height={200}
            />
            <div className="neighborhood-info">
                <h3>{item.title}</h3>
                <p>Orange</p>
            </div>
        </div>
    )
}