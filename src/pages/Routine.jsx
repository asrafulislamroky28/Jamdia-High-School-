import React, { useState, useMemo } from "react";
import { FileText, Download, ExternalLink, CalendarDays } from "lucide-react";

// ✅ Add "কম্পিউটার ল্যাব" tab
const CATEGORY_TABS = ["একাডেমিক", "পরীক্ষা", "কম্পিউটার ল্যাব"];

// Static data representing routines
const staticData = [
  // Academic category - Classes 6 to 10
  {
    id: 1,
    category: "একাডেমিক",
    class_name: "Class 10",
    title: "একাডেমিক রুটিন - ক্লাস ১০",
    file_url: "https://example.com/academic-routine-class10.pdf",
  },
  {
    id: 2,
    category: "একাডেমিক",
    class_name: "Class 9",
    title: "একাডেমিক রুটিন - ক্লাস ৯",
    file_url: "https://example.com/academic-routine-class9.pdf",
  },
  {
    id: 6,
    category: "একাডেমিক",
    class_name: "Class 8",
    title: "একাডেমিক রুটিন - ক্লাস ৮",
    file_url: "https://example.com/academic-routine-class8.pdf",
  },
  {
    id: 7,
    category: "একাডেমিক",
    class_name: "Class 7",
    title: "একাডেমিক রুটিন - ক্লাস ৭",
    file_url: "https://example.com/academic-routine-class7.pdf",
  },
  {
    id: 8,
    category: "একাডেমিক",
    class_name: "Class 6",
    title: "একাডেমিক রুটিন - ক্লাস ৬",
    file_url: "https://example.com/academic-routine-class6.pdf",
  },
  {
    id: 15,
    category: "একাডেমিক",
    class_name: "Class 10",
    title: "চূড়ান্ত সিলেবাস ও সাজেশন",
    file_url: "https://example.com/syllabus-and-suggestion.pdf",
  },

  // Exam category - Classes 6 to 10
  {
    id: 3,
    category: "পরীক্ষা",
    class_name: "Class 10",
    title: "এসএসসি পরীক্ষা রুটিন",
    file_url: "https://example.com/ssc-exam-routine.pdf",
  },
  {
    id: 4,
    category: "পরীক্ষা",
    class_name: "Class 9",
    title: "জেএসসি পরীক্ষা রুটিন",
    file_url: "https://example.com/jsc-exam-routine.pdf",
  },
  {
    id: 9,
    category: "পরীক্ষা",
    class_name: "Class 8",
    title: "বার্ষিক পরীক্ষা রুটিন - ক্লাস ৮",
    file_url: "https://example.com/annual-exam-routine-class8.pdf",
  },
  {
    id: 10,
    category: "পরীক্ষা",
    class_name: "Class 7",
    title: "অর্ধ-বার্ষিক পরীক্ষা রুটিন - ক্লাস ৭",
    file_url: "https://example.com/half-yearly-exam-routine-class7.pdf",
  },
  {
    id: 11,
    category: "পরীক্ষা",
    class_name: "Class 6",
    title: "মডেল টেস্ট রুটিন - ক্লাস ৬",
    file_url: "https://example.com/model-test-routine-class6.pdf",
  },

  // Computer Lab category - Classes 6 to 10
  {
    id: 5,
    category: "কম্পিউটার ল্যাব",
    class_name: "Class 10",
    title: "কম্পিউটার ল্যাব রুটিন",
    file_url: "https://example.com/computer-lab-routine-class10.pdf",
  },
  {
    id: 12,
    category: "কম্পিউটার ল্যাব",
    class_name: "Class 8",
    title: "কম্পিউটার ল্যাব রুটিন - ক্লাস ৮",
    file_url: "https://example.com/lab-routine-class8.pdf",
  },
  {
    id: 13,
    category: "কম্পিউটার ল্যাব",
    class_name: "Class 7",
    title: "কম্পিউটার ল্যাব রুটিন - ক্লাস ৭",
    file_url: "https://example.com/lab-routine-class7.pdf",
  },
  {
    id: 14,
    category: "কম্পিউটার ল্যাব",
    class_name: "Class 6",
    title: "কম্পিউটার ল্যাব রুটিন - ক্লাস ৬",
    file_url: "https://example.com/lab-routine-class6.pdf",
  },
];

const FileCell = ({ fileUrl, titleText }) => {
  if (!fileUrl) {
    return <span className="opacity-70 text-gray-500">কোনো ফাইল নেই</span>;
  }

  // Check if the file is a PDF (for specific Download label)
  const isPdf = fileUrl.toLowerCase().endsWith(".pdf");

  return (
    <a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xl font-semibold text-teal-700 hover:text-teal-900 transition hover:underline"
      title={`Download ${titleText}`}
    >
      <Download className="w-6 h-6" />
      {isPdf ? "ডাউনলোড (PDF)" : "ফাইল দেখুন"}
      <ExternalLink className="w-5 h-5 text-gray-400" />
    </a>
  );
};

export default function Routine({ title = "স্কুলের সময়সূচী ও রুটিন" }) {
  const [activeCat, setActiveCat] = useState(CATEGORY_TABS[0]);

  // Normalize the category for display
  const normalizeCategory = (c) => {
    const s = String(c || "").toLowerCase();
    if (s.includes("exam") || s.includes("পরীক্ষা")) return "পরীক্ষা";
    if (
      s.includes("computer") ||
      s.includes("lab") ||
      s.includes("কম্পিউটার") ||
      s.includes("ল্যাব")
    )
      return "কম্পিউটার ল্যাব";
    return "একাডেমিক";
  };

  // Filter and sort the static data based on the active category
  const filtered = useMemo(() => {
    const arr = staticData.filter(
      (r) => normalizeCategory(r.category) === activeCat
    );
    // Sort by class name for a stable order
    return [...arr].sort((a, b) => {
      return String(a.class_name).localeCompare(String(b.class_name));
    });
  }, [activeCat]);

  // Headers adjusted for professionalism and increased size
  const headers = ["শ্রেণি (Class)", "শিরোনাম (Title)", "ডাউনলোড / দেখুন"];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-100 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Title Header - Professional Look */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-teal-800 tracking-tight mb-4">
            <CalendarDays className="inline w-14 h-14 mr-3 text-amber-500" />
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
            শিক্ষার্থীদের জন্য সকল ধরণের পরীক্ষা ও ক্লাস রুটিন।
          </p>
          <div className="mx-auto w-full h-2 bg-amber-500 rounded-full shadow-lg"></div>
        </div>

        {/* Tabs - Enhanced, Professional Styling */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-2xl border-2 border-teal-500 bg-white p-2 shadow-3xl">
            {CATEGORY_TABS.map((cat) => {
              const active = cat === activeCat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={[
                    "px-8 py-3 text-xl font-extrabold rounded-xl transition-all duration-300 transform hover:scale-[1.03]",
                    active
                      ? "bg-teal-700 text-white shadow-xl shadow-teal-300/50"
                      : "text-gray-700 hover:bg-teal-50 hover:text-teal-800",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* No data message */}
        {filtered.length === 0 && (
          <div className="p-12 rounded-2xl bg-white shadow-3xl border border-gray-200 text-3xl text-center text-gray-600">
            <b>{activeCat}</b> বিভাগে কোনো রুটিন পাওয়া যায়নি।
          </div>
        )}

        {/* Table - Increased size and professional theme */}
        {filtered.length > 0 && (
          <div className="bg-white rounded-2xl shadow-3xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xl">
                <thead className="bg-teal-700 text-white border-b-4 border-amber-500">
                  <tr>
                    {headers.map((h) => (
                      <th
                        key={h}
                        className="text-left px-8 py-5 font-extrabold text-2xl"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, index) => {
                    return (
                      <tr
                        key={r.id}
                        className={`transition-colors duration-150 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-teal-50 border-t border-gray-200`}
                      >
                        {/* Increased padding and font size for data cells */}
                        <td className="px-8 py-5 font-extrabold text-2xl text-teal-800">
                          {r.class_name}
                        </td>
                        <td className="px-8 py-5 font-medium text-gray-700">
                          {r.title || "রুটিন"}
                        </td>
                        <td className="px-8 py-5">
                          <FileCell fileUrl={r.file_url} titleText={r.title} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Footer Row - Enhanced Styling */}
            <div className="px-8 py-5 text-lg border-t border-gray-300 bg-gray-100 text-gray-700">
              <span>
                <b className="font-extrabold">{activeCat}</b> ধরণের জন্য মোট{" "}
                {filtered.length} টি রেকর্ড দেখানো হচ্ছে।
              </span>
            </div>
          </div>
        )}

        {/* Added note for sample data */}
        <div className="mt-8 text-center text-sm text-gray-500">
          * দ্রষ্টব্য: এই ডেটাগুলো (Class 6 থেকে Class 10 পর্যন্ত) শুধুমাত্র
          নমুনা হিসেবে যোগ করা হয়েছে।
        </div>
      </div>
    </section>
  );
}
