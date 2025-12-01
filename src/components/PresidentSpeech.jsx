import defaultImage from "../images/person.PNG";

export default function PresidentSpeech() {
  
  const president = {
    full_name: "md. xxxxxx xxxxxxxx", 
    message: `
      আমরা জামদিয়া উচ্চ বিদ্যালয়ের পরিবারে আপনাদের সবাইকে স্বাগতম জানাই। আমাদের লক্ষ্য হচ্ছে, শিক্ষার মান বৃদ্ধি ও ছাত্রদের সামগ্রিক উন্নয়ন নিশ্চিত করা।
      
      আমরা বিশ্বাস করি যে, সঠিক দিকনির্দেশনা ও সম্পূর্ণ সমর্থনের মাধ্যমে আমাদের শিক্ষার্থীরা সমাজে সাফল্য অর্জন করতে সক্ষম হবে। আমরা তাদেরকে কেবল পাঠ্য বইয়ের মধ্যে সীমাবদ্ধ না রেখে, তাদের জীবনে বাস্তব জ্ঞান প্রদান করার চেষ্টা করি। আমাদের প্রতিষ্ঠানে সবসময় আধুনিক শিক্ষা ব্যবস্থা ও প্রযুক্তির ব্যবহার করা হয়, যাতে ছাত্ররা আন্তর্জাতিক পর্যায়ে প্রতিযোগিতামূলক হয়ে উঠতে পারে।
      
      আমাদের দল এবং শিক্ষকবৃন্দ, ছাত্রদের জন্য সর্বোচ্চ মানের শিক্ষা নিশ্চিত করতে অবিরাম কাজ করে যাচ্ছেন। এই প্রতিষ্ঠানটি শুধু একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি একটি পরিবার যেখানে আমরা একে অপরের জন্য প্রতিশ্রুতিবদ্ধ। আমি আশা করি, আমাদের ছাত্ররা একদিন তাদের অর্জিত জ্ঞান এবং দক্ষতা দিয়ে দেশের সেবায় নিয়োজিত হবে।    `, // Expanded message in Bangla
    contact_phone: "+88 xxxxxxxxxxxxxxxxxx", 
    contact_email: "president@jamdia.edu.bd", 
    photo: "PERSON.PNG", 
  };

  return (
    <section className="w-full py-4 px-2 md:px-10">
      {/* Title bar */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white bg-black py-3">
          সভাপতির বার্তা
        </h2>
      </div>

      {/* Card (writing left, image right) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow-md p-4 md:p-8">
        {/* Message (left side) */}
        <div className="text-gray-800 space-y-3 text-justify order-1">
          <blockquote className="text-base italic text-gray-700 border-l-4 pl-3 border-blue-400">
            “
            {president?.message ||
              "সভাপতির বার্তা পাওয়া যাচ্ছে না / লোড হচ্ছে..."}
            ”
          </blockquote>

          <p className="font-medium text-[#0A3B68] text-right mt-4">
            - {president?.full_name || "সভাপতির নাম লোড হচ্ছে..."}
          </p>

          {(president?.contact_phone || president?.contact_email) && (
            <div className="text-sm text-gray-600 text-right">
              {president?.contact_phone && (
                <div>ফোন: {president.contact_phone}</div>
              )}
              {president?.contact_email && (
                <div>ইমেইল: {president.contact_email}</div>
              )}
            </div>
          )}
        </div>

        {/* Image (right side) */}
        <div className="flex justify-center order-2">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src={president?.photo || defaultImage}
              alt={president?.full_name || "President"}
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-lg border-4 border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
