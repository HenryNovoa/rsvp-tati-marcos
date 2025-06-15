import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const photos = [
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-42.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-41.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-39.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-24.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-18.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-5.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-1.jpg",
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % photos.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="aspect-[3/2] overflow-hidden rounded-lg">
        <img
          src={photos[currentIndex]}
          alt={`${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6 text-[#4A5D4B]" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
      >
        <ChevronRight className="w-6 h-6 text-[#4A5D4B]" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#4A5D4B]" : "bg-[#8FA98F]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
