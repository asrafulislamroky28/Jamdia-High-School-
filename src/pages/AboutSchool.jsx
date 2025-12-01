import React from "react";

// Import images for Mission and Objective
import missionImg from "../images/mission.jpeg";
import objectiveImg from "../images/objective.jpeg";
import studentImg from "../images/student.jpg";

// Static data for the institute
const instituteInfo = {
  name: "জামদিয়া মাধ্যমিক বিদ্যালয়",
  establishedYear: 1947,
  history:
    "যশোর নড়াইল সড়কের মধ্যভাগে জামদিয়ার হাটখোলায় ৩ একর জমির উপর ১২ কক্ষ বিশিষ্ট দ্বিতল ভবন ও সামনে সুন্দর খেলার মাঠসহ আরও দুইটা ভবন নিয়ে বিদ্যালয়টির অবস্থান। বিশিষ্ট আইনজীবী ছবির উদ্দিন আহম্মদ ১৯৪৭ সালে মধ্য (এম,ই) ইংরাজী স্কুল হিসাবে একটি সাধারণ গৃহে অল্প সংখ্যক ছাত্র/ছাত্রী নিয়ে বিদ্যালয়টির কার্যক্রম শুরু করেন। এই সময় জামদিয়ার নিকটবর্তী এলাকায় মাধ্যমিক শিক্ষার কোন ব্যবস্থা ছিল না। জামদিয়া গ্রামে শুধু মাত্র একটি জরাজীর্ণ প্রাথমিক বিদ্যালয় ছিল। বিদ্যালয়টি সূদীর্ঘ দিন এম.ই. স্কুল হিসেবে চলার পর ১৯৬৩ সালে মাধ্যমিক বিদ্যালয়ে উন্নীত হয়। মাধ্যমিক বিদ্যালয়টির আনুষ্ঠানিকভাবে উদ্বোধন করেন তৎকালীন যশোরের জেলা প্রশাসক, এম, এম, কাজিম। এই সময় বিদ্যালয়টির অবৈতনিক শিক্ষক হিসাবে বিশেষ অবদান রাখেন ছবির উদ্দিন আহম্মদের পুত্র এ, এফ, এম, মাহবুবুর রহমান। বিদ্যালয়টি ১৯৬৬ সালে যশোর শিক্ষা বোর্ড কর্তৃক মাধ্যমিক বিদ্যালয় হিসাবে অনুমোদন লাভ করে। বিদ্যালয়টি উন্নয়নের ক্ষেত্রে বিশেষ অবদান রাখেন মোঃ বজলুর রহমান মোল্যা, মোঃ হোসেন বিশ্বাস, মোঃ নাজির হোসেন ও তৎকালীন প্রধান শিক্ষক মোঃ গোলাম রসুল। বিদ্যালয়টির প্রতিষ্ঠাতা প্রধান শিক্ষক হিসেবে দায়িত্ব পালন করেন মোঃ আব্দুল মতলেব। বিদ্যালয়টি এই এলাকার একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। বর্তমানে প্রধান শিক্ষক হিসাবে দ্বায়িত্ব পালন করছেন আলহাজ্ব মোঃআবুসাঈদ মোল্যা। বিদ্যালয়ে বর্তমানে ১৮ জন শিক্ষক কর্মচারী দ্বায়িত্ব পালন করছেন।",
  mission: "শিক্ষার্থীদের জ্ঞান, চরিত্র এবং প্রযুক্তিগত দক্ষতা বৃদ্ধি করে তাদেরকে বিশ্বমানের নাগরিক হিসেবে গড়ে তোলা।",
  objective:
    "প্রতিষ্ঠানের উদ্দেশ্য হলো শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশ ঘটানো, যাতে তারা প্রতিটি শিক্ষাক্ষেত্রে জ্ঞানী, সচেতন এবং সৃজনশীল নাগরিক হিসেবে গড়ে ওঠে। আধুনিক শিক্ষাব্যবস্থা, নৈতিক মূল্যবোধ ও প্রযুক্তিগত দক্ষতার উন্নয়ন নিশ্চিত করতে তাদেরকে যথাযথ শিক্ষা প্রদান করা হবে।",
  studentsList: "path/to/students-list-image.jpg", // Static image for student list
};

export default function AboutCollege() {
  const establishedYear = instituteInfo.establishedYear;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - establishedYear;

  return (
    <section id="about-college" className="bg-white text-black py-16 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1a237e]">{instituteInfo.name}</h2>
        <p className="text-lg text-gray-700">{instituteInfo.date}</p>
      </div>

      {/* About Section */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300 flex justify-center mb-6 md:mb-0">
          <img
            src={missionImg}
            alt="Mission"
            className="h-72 w-72 object-cover rounded-full shadow-lg border-4 border-gray-300 p-2"
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h3 className="text-3xl font-semibold text-[#0a3b68] mb-4">আমাদের সম্পর্কে</h3>
          <p className="text-lg leading-relaxed text-gray-700">{instituteInfo.history}</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-3xl font-semibold text-[#0a3b68] mb-4">প্রতিষ্ঠানের লক্ষ্য</h4>
          <p className="text-lg leading-relaxed text-gray-700">{instituteInfo.mission}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300 flex justify-center">
          <img
            src={missionImg}
            alt="Mission"
            className="h-72 w-72 object-cover rounded-full shadow-lg border-4 border-gray-300 p-2"
          />
        </div>
      </div>

      {/* Objective Section */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300 flex justify-center mb-6 md:mb-0">
          <img
            src={objectiveImg}
            alt="Objective"
            className="h-72 w-72 object-cover rounded-full shadow-lg border-4 border-gray-300 p-2"
          />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-3xl font-semibold text-[#0a3b68] mb-4">প্রতিষ্ঠানের উদ্দেশ্য</h4>
          <p className="text-lg leading-relaxed text-gray-700">{instituteInfo.objective}</p>
        </div>
      </div>

      {/* Students List Section */}
      <div className="w-full max-w-6xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
        <h3 className="text-3xl font-semibold text-center text-[#0a3b68] mb-6">শিক্ষার্থীর তালিকা</h3>
        {instituteInfo.studentsList ? (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src={studentImg}
              alt="Students List"
              className="w-full max-h-[900px] object-contain rounded-lg border"
            />
          </div>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg text-center text-gray-600">
            শিক্ষার্থীর তালিকা আপলোড করা হয়নি।
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-3xl font-bold text-[#0a3b68]">{totalYears}+ বছর</h4>
          <p className="text-sm text-gray-600">শ্রেষ্ঠত্বের উত্তরাধিকার</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-3xl font-bold text-[#0a3b68]">১৮+</h4>
          <p className="text-sm text-gray-600">নিবেদিতপ্রাণ শিক্ষক</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:border-4 hover:border-yellow-500 transition-all duration-300">
          <h4 className="text-3xl font-bold text-[#0a3b68]">১০০%</h4>
          <p className="text-sm text-gray-600">মূল্যবোধের প্রতি অঙ্গীকার</p>
        </div>
      </div>
    </section>
  );
}
