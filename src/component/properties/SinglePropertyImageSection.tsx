import Image from "next/image"
import { useState } from "react"
import { ImageGalleryModal } from "./ImageGalleryModal"

interface SinglePropertyImageSectionProps {
    property?: any;
}

export const SinglePropertyImageSection = ({ property: prop }: SinglePropertyImageSectionProps) => {
   
    const property = prop ;
    const images: string[] = property?.images ?? property?.photos ?? [];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setInitialIndex(index);
        setIsModalOpen(true);
    };
    return(
        <>
            <section className="w-full container mx-auto px-4 py-6">
                <div className="flex gap-3 h-[60vh]">
                    {/* Large main image */}
                    <div
                        className="flex-1 relative rounded-lg overflow-hidden cursor-pointer "
                        onClick={() => handleImageClick(0)}
                    >
                        {images[0] && (
                            <Image src={images[0]} alt="Property" fill className="object-cover" />
                        )}
                    </div>
                    {/* Two stacked images */}
                    <div className="w-1/3 flex flex-col gap-3">
                        {images.slice(1, 3).map((img, idx) => (
                            <div
                                key={idx}
                                className="relative flex-1 rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => handleImageClick(idx + 1)}
                            >
                                <Image src={img} alt={`Property ${idx + 2}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ImageGalleryModal
                images={images}
                isOpen={isModalOpen}
                initialIndex={initialIndex}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
