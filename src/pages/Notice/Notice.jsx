import { useEffect, useState } from "react";
import { CalendarDays, Search, ArrowLeft, ArrowRight, FileText } from "lucide-react";

const colors = {
  primary: "text-teal-800",     
  primaryBg: "bg-teal-700",    
  background: "bg-gray-50",    
  card: "bg-white",            
  accent: "border-amber-500",  
  secondary: "text-gray-600",  
  primaryHover: "hover:bg-teal-100",  
  shadow: "shadow-lg",         
};

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const formatDate = (isoDate) => {
    if (!isoDate) return "N/A";
    const date = new Date(isoDate);
    const formatter = new Intl.DateTimeFormat('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formatter.format(date);
  };

  const resultsPerPage = 6;

  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        date: "2025-12-01",
        title: "বার্ষিক ক্রীড়া দিবস",
        category: "ইভেন্ট",
        description: "বার্ষিক ক্রীড়া দিবস ১৫ ডিসেম্বর অনুষ্ঠিত হবে। সমস্ত ছাত্র-ছাত্রীদের অংশগ্রহণ করার আমন্ত্রণ জানানো হচ্ছে। এটি একটি গুরুত্বপূর্ণ ঘোষণা।",
        image: "https://placehold.co/150x100/51296D/FFFFFF?text=Event",
      },
      {
        id: 2,
        date: "2025-12-02",
        title: "শীতকালীন ছুটি ঘোষণা",
        category: "ছুটি",
        description: "শীতকালীন ছুটি ২০ ডিসেম্বর থেকে ৫ জানুয়ারি পর্যন্ত থাকবে। সকলকে ছুটির নির্দেশাবলী মেনে চলতে অনুরোধ করা হচ্ছে।",
        image: "https://placehold.co/150x100/104764/FFFFFF?text=Holiday",
      },
      {
        id: 4,
        date: "2025-11-20",
        title: "বিজ্ঞান মেলা প্রতিযোগিতা",
        category: "ইভেন্ট",
        description: "আসন্ন বিজ্ঞান মেলা প্রতিযোগিতার জন্য সকল আগ্রহী শিক্ষার্থীদের নাম জমা দিতে বলা হচ্ছে। প্রতিযোগিতার নিয়মাবলী ওয়েবসাইটে উপলব্ধ।",
        image: "https://placehold.co/150x100/870233/FFFFFF?text=Science+Fair",
      },
      {
        id: 5,
        date: "2025-11-15",
        title: "শিক্ষক-অভিভাবক সভা",
        category: "সভা",
        description: "শিক্ষার্থীদের অগ্রগতি নিয়ে আলোচনার জন্য ২০ নভেম্বর একটি শিক্ষক-অভিভাবক সভা অনুষ্ঠিত হবে। অভিভাবক/অভিভাবিকাদের উপস্থিতি একান্ত কাম্য।",
        image: null,
      },
      {
        id: 6,
        date: "2025-11-10",
        title: "লাইব্রেরির নতুন সময়সূচী",
        category: "অন্যান্য",
        description: "শীতকালীন সময়সূচী অনুযায়ী লাইব্রেরি এখন সকাল ৮টা থেকে বিকাল ৪টা পর্যন্ত খোলা থাকবে।",
        image: null,
      },
      {
        id: 7,
        date: "2025-11-05",
        title: "জরুরী রক্ষণাবেক্ষণের জন্য স্কুল বন্ধ",
        category: "ছুটি",
        description: "জরুরী বিদ্যুৎ রক্ষণাবেক্ষণের কারণে ৬ নভেম্বর স্কুল একদিনের জন্য বন্ধ থাকবে।",
        image: null,
      },
      {
        id: 8,
        date: "2025-10-30",
        title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
        category: "ইভেন্ট",
        description: "বার্ষিক সাংস্কৃতিক অনুষ্ঠানের প্রস্তুতি শুরু হয়েছে। অংশগ্রহণের জন্য নাম লেখান।",
        image: "https://placehold.co/150x100/404040/FFFFFF?text=Cultural",
      },
    ];

    if (notices.length === 0) {
      setTimeout(() => {
        setNotices(sampleData);
        setLoading(false);
      }, 500);
    }
  }, [notices.length]);

  const filteredNotices = notices.filter((notice) => {
    const searchText = `${notice.title} ${notice.category} ${notice.description}`.toLowerCase();
    return searchText.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredNotices.length / resultsPerPage) || 1;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredNotices.slice(indexOfFirstResult, indexOfLastResult);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className={`py-12 ${colors.background}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Wrapper card for the entire section */}
        <div className={`p-6 bg-white rounded-3xl shadow-2xl border border-gray-200 mb-10`}>
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className={`text-4xl md:text-5xl font-extrabold ${colors.primary} mb-2`}>
              📰  জামদিয়া মাধ্যমিক বিদ্যালয় নোটিশ বোর্ড
            </h1>
            <div className={`mx-auto w-full h-1 border-b-4 ${colors.accent} mb-4`}></div>
            <p className={`${colors.secondary} text-xl font-bold`}>
              সাম্প্রতিক বিজ্ঞপ্তি এবং গুরুত্বপূর্ণ ঘোষণাগুলি দেখুন।
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden mb-10 shadow-sm">
            <div className={`p-4 ${colors.primary}`}>
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              placeholder="নোটিশ অনুসন্ধান করুন (শিরোনাম, বিভাগ, বিবরণ)..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="p-4 w-full text-lg focus:ring-0 border-none placeholder-gray-500"
            />
          </div>

          {/* Notices / Loader - GRID Layout */}
          {loading ? (
            <div className={`text-center ${colors.secondary} py-12`}>
              নোটিশ লোড হচ্ছে...
              <div className="mt-4 animate-pulse h-2 bg-gray-200 rounded w-1/4 mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentResults.map((notice) => (
                <a
                  key={notice.id}
                  href={notice.image ? notice.image : "#"}
                  target={notice.image ? "_blank" : "_self"}
                  rel={notice.image ? "noopener noreferrer" : ""}
                  className={`block ${colors.card} border border-gray-200 rounded-2xl p-6 transition duration-300 transform hover:scale-[1.02] ${colors.primaryHover} shadow-lg hover:shadow-xl`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
                    <span className={`text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full bg-teal-100 ${colors.primary} mb-2 sm:mb-0`}>
                      {notice.category}
                    </span>
                    {notice.date && (
                      <div className={`flex items-center text-sm font-medium ${colors.secondary}`}>
                        <CalendarDays className={`w-4 h-4 mr-1 ${colors.primary}`} />
                        {formatDate(notice.date)}
                      </div>
                    )}
                  </div>

                  <div className="flex items-start mb-3">
                    <FileText className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${colors.primary}`} />
                    <h2 className={`text-xl sm:text-2xl font-bold leading-tight text-gray-900`}>
                      {notice.title}
                    </h2>
                  </div>

                  {notice.description && (
                    <p className={`text-base ${colors.secondary} line-clamp-3 mb-4 pl-9`}> 
                      {notice.description}
                    </p>
                  )}

                  <div className="flex items-center mt-3 justify-end">
                    <span className={`text-sm font-bold text-amber-600 hover:text-amber-700 transition duration-150`}>
                        {notice.image ? "বিস্তারিত চিত্র দেখুন →" : "নোটিশ পড়ুন →"}
                    </span>
                  </div>
                </a>
              ))}

              {currentResults.length === 0 && (
                <div className={`md:col-span-3 text-center ${colors.secondary} py-12`}>
                  আপনার অনুসন্ধানের সাথে মেলে এমন কোনও নোটিশ পাওয়া যায়নি।
                </div>
              )}
            </div>
          )}

          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-5 py-2 rounded-xl transition-colors duration-200 text-lg font-medium ${
                  currentPage === 1
                    ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                    : `${colors.primary} border border-teal-200 hover:bg-teal-50`
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                পূর্ববর্তী
              </button>

              <div className="hidden sm:flex items-center gap-1">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`w-12 h-12 rounded-full font-bold text-lg transition-colors duration-200 ${
                      currentPage === index + 1
                        ? `${colors.primaryBg} text-white shadow-lg`
                        : `text-gray-700 hover:bg-gray-100`
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="flex sm:hidden items-center text-gray-700 font-medium text-lg">
                পৃষ্ঠা {currentPage} এর {totalPages}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-5 py-2 rounded-xl transition-colors duration-200 text-lg font-medium ${
                  currentPage === totalPages
                    ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                    : `${colors.primary} border border-teal-200 hover:bg-teal-50`
                }`}
              >
                পরবর্তী
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
