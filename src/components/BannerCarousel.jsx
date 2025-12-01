import { useEffect, useState, useRef } from "react";

// Import banner images
import Banner1 from "../images/Banner1.jpg";
import Banner2 from "../images/Banner2.jpg";
import Banner3 from "../images/Banner3.jpg";
import Banner4 from "../images/Banner4.jpg";
import Banner5 from "../images/Banner5.jpg";

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const slides = [
    {
      id: 1,
      image: Banner1, // Imported banner image
      title: "Welcome to Jamdia High School",
    },
    {
      id: 2,
      image: Banner2, // Imported banner image
      title: "Quality Education for All",
    },
    {
      id: 3,
      image: Banner3, // Imported banner image
      title: "Empowering the Next Generation",
    },
    {
      id: 4,
      image: Banner4, // Imported banner image
      title: "Learn, Grow, Achieve",
    },
    {
      id: 5,
      image: Banner5, // Imported banner image
      title: "Shape Your Future with Us",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (slides.length === 0 || hovering) return; // Stop autoplay when hovering or no slides

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount or when hovering
  }, [slides.length, hovering]); // Depend on slides and hovering state

  // Touch handlers (mobile swipe)
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    const threshold = 50;
    if (deltaX.current > threshold) {
      // swipe right -> prev
      setIndex((i) => (i - 1 + slides.length) % slides.length);
    } else if (deltaX.current < -threshold) {
      // swipe left -> next
      setIndex((i) => (i + 1) % slides.length);
    }
  };

  if (slides.length === 0) return null;

  return (
    <section
      className="mt-8"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div
          className="relative w-full h-80 sm:h-96 md:h-[600px]" // Adjusted heights for bigger banners
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slides */}
          <div
            ref={trackRef}
            className="absolute inset-0 flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div
                key={s.id ?? i}
                className="w-full shrink-0 relative"
                aria-hidden={index !== i}
              >
                <img
                  src={s.image}
                  alt={s.title || `Banner ${i + 1}`}
                  className="w-full h-80 sm:h-96 md:h-[600px] object-cover rounded-lg" // Added rounded-lg for rounded corners
                  loading="lazy"
                />
                {s.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm md:text-base px-3 py-2">
                    {s.title}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-content-center"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-content-center"
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
