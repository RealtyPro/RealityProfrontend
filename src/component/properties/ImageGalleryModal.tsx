import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageGalleryModalProps {
  images: string[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export const ImageGalleryModal = ({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
}: ImageGalleryModalProps) => {
  const [current, setCurrent] = useState(initialIndex);

  // Sync current slide when modal opens with a new initial index
  useEffect(() => {
    if (isOpen) {
      setCurrent(initialIndex);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [initialIndex, isOpen, onClose]);

  if (!isOpen) return null;

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={(e) => {
        // Close only if the user clicked directly on the backdrop, not on any child
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-5xl px-4"
        // Allow events inside the modal content without bubbling to the backdrop
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-3xl font-bold text-white hover:text-gray-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Main Image */}
        <div className="relative h-[60vh] w-full select-none">
          <Image
            src={images[current]}
            alt={`Property image ${current + 1}`}
            fill
            className="object-contain"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`relative h-16 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded ${
                  idx === current ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setCurrent(idx)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 