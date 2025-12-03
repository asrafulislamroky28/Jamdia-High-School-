import { useState } from 'react'; 
import POSTER from "../images/Poster.png" // Your image file import

export default function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  const instituteInfo = {
    name: "জামদিয়া মাধ্যমিক বিদ্যালয়",
    institution_image: POSTER, // Using the imported image file here
  };

  const bgImage = instituteInfo?.institution_image;

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-[#366f94]">
      {/* Background Image */}
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt={instituteInfo?.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(true)}
            loading="eager"
            fetchpriority="high"
          />
          {!imgLoaded && <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-gray-300 animate-pulse" />}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3636b1] to-[#16213e]" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />

      {/* Content Section */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 md:px-16 text-white text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {instituteInfo?.name}
          </h1>
          {/* Expanded text content in the p tag */}
          <p className="text-lg mb-6">
            আমাদের বিদ্যালয় শিক্ষার মান উন্নত করতে প্রতিশ্রুতিবদ্ধ, যেখানে প্রতিটি ছাত্র/ছাত্রী সর্বোচ্চ শিক্ষা ও বিকাশের সুযোগ পায়।
          </p>

          {/* Call to Action Button */}
          <div className="mt-4">
            <a
              href="/about"
              className="px-6 py-3 text-white bg-[#91386d] hover:bg-[#16946a] rounded-full text-lg font-semibold transition duration-300"
            >
              আমাদের সম্পর্কে জানুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
