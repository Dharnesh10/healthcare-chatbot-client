import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
];

const PhotoGallery = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, logos.length - visibleCount));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={startIndex >= logos.length - visibleCount}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-40 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Logo Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex-none w-1/5 p-2`} // 5 logos visible at a time
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-24 object-contain border p-2 rounded bg-white shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
