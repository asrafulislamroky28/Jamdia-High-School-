import React from 'react';
import event1 from "../images/Gellary/event1.jpg";
import event2 from "../images/Gellary/event2.jpg";
import event3 from "../images/Gellary/event3.jpg";
import event4 from "../images/Gellary/event4.jpg";
import class1 from "../images/Gellary/class1.jpg";
import class2 from "../images/Gellary/class2.jpg";
import class3 from "../images/Gellary/class3.jpg";
import lab1 from "../images/Gellary/lab1.jpg";
import lab2 from "../images/Gellary/lab2.jpg";

// --- Main Gallery Component ---
export default function Gallery() {
  // Function to create image data
  const createImageData = (images) => 
    images.map((image, i) => ({
      src: image,
      alt: `Image ${i + 1}`,
    }));

  // Array of gallery data with actual images
  const galleryData = [
    {
      title: "আইসিটি ডিজিটাল ল্যাব",
      images: createImageData([lab1, lab2]),
    },
    {
      title: "ক্যাম্পাস ও মাঠ",
      images: createImageData([event1, event2]),
    },
    {
      title: "ক্লাসরুম",
      images: createImageData([class1, class2, class3]),
    },
    {
      title: "অ্যাকটিভিটি ও ইভেন্ট",
      images: createImageData([event3, event4]),
    },
    {
      title: "লাইব্রেরি ও রিডিং রুম",
      images: createImageData([class3, event1]), // Reusing class3 and event1 for this section
    },
  ];

  return (
    <div className="bg-gray-50">
      <main className="py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-teal-800 mb-4 tracking-tighter">
              জামদিয়া মাধ্যমিক বিদ্যালয় গ্যালারি
            </h2>
            <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
              আমাদের বিদ্যালয়ের বিভিন্ন মুহূর্ত এবং সুযোগ-সুবিধা দেখুন। মানসম্পন্ন শিক্ষা এবং সহ-পাঠ্যক্রমিক কার্যক্রমের একটি ঝলক।
            </p>
            {/* Stylish Underline */}
            <div className="mx-auto w-full h-1 bg-amber-500 mt-4 rounded-full shadow-md"></div>
          </div>

          {/* Gallery Categories */}
          <div className="space-y-24">
            {galleryData.map((category, index) => (
              <div key={index} className="pb-4">
                {/* Category Header */}
                <h3 className={`text-3xl font-extrabold text-teal-700 mb-10 pb-3 border-b-2 border-teal-300`}>
                  {category.title}
                </h3>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-6 lg:px-8"> {/* Adjusted padding for left and right space */}
                  {category.images.map((image, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:ring-4 ring-teal-100"
                    >
                      {/* Updated image size: Increased height */}
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-96 object-cover group-hover:opacity-95 transition duration-300" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/CCCCCC/666666?text=Image+Failed" }}
                      />
                      {/* Card Content (Caption) */}
                      <div className="p-5 sm:p-6 bg-gray-50">
                        <p className="text-lg font-semibold text-gray-800 line-clamp-2">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
