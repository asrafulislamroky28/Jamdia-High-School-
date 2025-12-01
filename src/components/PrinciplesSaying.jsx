import React from 'react';
import defaultImage from '../images/person.PNG';

export default function PrinciplesSaying() {
  // Hardcoded principal data
  const principal = {
    full_name: "xx xxxxxxxxxx xxxxx", // Example name in Bangla
    message: ` 
      “শিক্ষক জাতির শিহরুন। জাতিকেই শিক্ষিত করে পরে ঘোরের ধারা সমগ্রের একত্র না দিলে প্রতিটি জাতির মুল্যে সক্ষমতা। শিক্ষার মাধ্যমে নীতি নৈতিকতায় অনুশাসন দিলে মানবিক মার্গে তাকে উঠাতে সাহায্য দেওয়া হয় এবং বিশ্বব্যাপী সমৃদ্ধির আগমন হয়। 
      বিদ্যমান মানের জন্য তাকে যথাযথভাবে নিযুক্ত করে ভবিষ্যতের পরিবেশন শিখাতে পারে।
      আমাদের বিদ্যালয়ের ছাত্র/ছাত্রীরা, তাদের বৈশিষ্ট্য শিক্ষার কোন আদর্শ আয়াতে জীবনের পথে থেকে ফলস্বরূপ সময় কিছু শিক্ষার পিছনে নিয়োগ করা হয়।
      এরপর শিক্ষার সময় এটা আমাদের গর্ব,উত্সাহ,বিকাশ সবগুলো গুরুত্বপূর্ণ হিসেবই অন্নায়।” 
    `, // Expanded message in Bangla
    photo: "PERSON.PNG", // Replace with actual image path
  };

  return (
    <section className="w-full py-4 px-2 md:px-10" style={{ fontFamily: 'Siyam Rupali, sans-serif' }}>
      {/* Title bar */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white bg-black py-3">
          প্রধান শিক্ষকের বার্তা
        </h2>
      </div>

      {/* Card (writing left, image right) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow-md p-4 md:p-8">
        {/* Principal Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src={principal?.photo || defaultImage}
              alt="Principal"
              className="w-52 h-52 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Principal Message */}
        <div className="text-gray-800 space-y-3">
          <blockquote className="text-xl italic text-gray-700 border-l-4 pl-3 border-blue-400 font-serif">
            “{principal?.message || 'প্রধান শিক্ষকের বার্তা লোড হচ্ছে...'}”
          </blockquote>
          <p className="font-medium text-[#0A3B68] text-right mt-4 text-2xl">
            - {principal?.full_name || 'প্রধান শিক্ষকের নাম লোড হচ্ছে...'}
          </p>
        </div>
      </div>
    </section>
  );
}
