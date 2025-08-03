import Image from "next/image"

interface SinglePropertyImageSectionProps {
    property?: any;
}

export const SinglePropertyImageSection = ({ property: prop }: SinglePropertyImageSectionProps) => {
      const sampleProperty = {
        title: "Modern Family Home",
        price: 899000,
        beds: 4,
        baths: 2.25,
        square_footage: 2260,
        address: "14039 36th Ave NE, Seattle, WA 98125",
        description:
            "Beautiful family home located in the heart of Seattle with spacious rooms, modern amenities, and a large backyard perfect for entertaining.",
        photos: [
            "/images/property-1.png",
            "/images/property-2.png",
            "/images/property-3.png",
        ],
    };
    const property = prop ?? sampleProperty;
    const images: string[] = property.images;
    console.log("Property images:", images,property);
    return(
            <section className="w-full container mx-auto px-4 py-6">
                <div className="flex gap-3 h-[60vh]">
                    {/* Large main image */}
                    <div className="flex-1 relative rounded-lg overflow-hidden">
                        {images[0] && (
                            <Image src={images[0]} alt="Property" fill className="object-cover" />
                        )}
                    </div>
                    {/* Two stacked images */}
                    <div className="w-1/3 flex flex-col gap-3">
                        {images.slice(1, 3).map((img, idx) => (
                            <div key={idx} className="relative flex-1 rounded-lg overflow-hidden">
                                <Image src={img} alt={`Property ${idx + 2}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}
