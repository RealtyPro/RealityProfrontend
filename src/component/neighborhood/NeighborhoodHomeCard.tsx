import Image from "next/image";

interface NeighborhoodHomeCardProps {
    item: any; // Replace 'any' with a more specific type if available
}

export const NeighborhoodHomeCard = ({ item }: NeighborhoodHomeCardProps) => {
    const handleClick = (name: string) => {
        sessionStorage.setItem("prop_location", name);
        window.location.href = '/properties'
    }
    return (
        <div className="neighborhood-card"
            onClick={() => handleClick(item.name)}>
            <Image
                // src="/images/neighborhood-1.png"
                src={item.images ? item.images : "/images/neighborhood-1.png"}

                alt="neighborhood"
                width={300}
                height={200}
            />
            <div className="neighborhood-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}