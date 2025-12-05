import Image from "next/image";

interface NeighborhoodHomeCardProps {
    item: any; // Replace 'any' with a more specific type if available
}

export const NeighborhoodHomeCard = ({ item }: NeighborhoodHomeCardProps) => {
    const handleClick = (name: string) => {
        sessionStorage.setItem("prop_location", name);
        window.location.href = '/properties';
    };

    // Helper to validate image src
    const getImageSrc = () => {
        if (typeof item.images === 'string' && item.images.trim() !== '') {
            // If it's an absolute URL or a relative path
            if (item.images.startsWith('http') || item.images.startsWith('/')) {
                return item.images;
            }
        }
        return "/images/neighborhood-1.png";
    };

    return (
        <div className="neighborhood-card" onClick={() => handleClick(item.name)}>
            <Image
                src={getImageSrc()}
                alt="neighborhood"
                width={300}
                height={200}
            />
            <div className="neighborhood-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}