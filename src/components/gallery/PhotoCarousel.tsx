import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Spinner } from "../shared/Spinner";

const photos = [
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-42.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-41.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-39.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-24.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-18.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-5.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-1.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-2.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-3.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-4.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-6.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-7.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-8.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-9.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-10.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-11.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-12.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-13.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-14.JPG",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-15.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-16.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-17.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-19.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-20.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-21.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-22.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-23.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-25.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-26.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-27.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-28.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-29.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-30.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-31.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-32.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-33.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-34.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-35.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-36.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-37.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-38.jpg",
  "https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/tati-marcos-40.jpg",
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const next = () => {
    setIsLoading(true);
    setCurrentIndex((i) => (i + 1) % photos.length);
  };
  const prev = () => {
    setIsLoading(true);
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="aspect-[3/2] overflow-hidden rounded-lg">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <Spinner />
          </div>
        )}
        <img
          src={photos[currentIndex]}
          alt={`${currentIndex + 1}`}
          onLoad={() => setIsLoading(false)}
          className="w-full h-full object-cover transition-transform duration-500"
          style={isLoading ? { visibility: "hidden" } : {}}
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
          <button key={index} onClick={() => setCurrentIndex(index)} />
        ))}
      </div>
    </div>
  );
}
