import React, { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

const CATEGORY_TABS = ["Public", "Internal"]; // Public results vs Internal results

// --- Expanded Static Data (2020 - 2024 for JSC/SSC, plus Internal) ---
const staticResults = [
  // 2024 Results
  {
    id: 1,
    year: "2024",
    category: "Public",
    class_name: "Class 10",
    exam_name: "মাধ্যমিক স্কুল সার্টিফিকেট পরীক্ষা (SSC) - সর্বশেষ ফলাফল",
    file_url: "https://example.com/ssc-2024.pdf",
    image_url:
      "https://placehold.co/800x600/134E4A/FFFFFF?text=SSC+2024+Result+Sheet",
  },
  {
    id: 2,
    year: "2024",
    category: "Internal",
    class_name: "Class 10",
    exam_name: "বিজ্ঞান বিভাগ  পরীক্ষা ফলাফল",
    file_url: "https://example.com/internal-science-2024.pdf",
    image_url:
      "https://placehold.co/800x600/22577E/FFFFFF?text=Science+Internal+2024",
  },
  {
    id: 3,
    year: "2023",
    category: "Public",
    class_name: "Class 8",
    exam_name: "জুনিয়র স্কুল সার্টিফিকেট পরীক্ষা (JSC) ফলাফল",
    file_url: "https://example.com/jsc-2023.pdf",
    image_url:
      "https://placehold.co/800x600/8155BA/FFFFFF?text=JSC+Result+2023",
  },
  // 2023 Results
  {
    id: 4,
    year: "2023",
    category: "Public",
    class_name: "Class 10",
    exam_name: "এসএসসি ফলাফল",
    file_url: "https://example.com/ssc-2023.pdf",
    image_url:
      "https://placehold.co/800x600/134E4A/FFFFFF?text=SSC+2023+Result+Sheet",
  },
  {
    id: 5,
    year: "2023",
    category: "Internal",
    class_name: "Class 8",
    exam_name: "প্রাক-নির্বাচনী মডেল টেস্ট ফলাফল",
    file_url: "https://example.com/pre-test-2023.pdf",
    image_url: "https://placehold.co/800x600/F05454/FFFFFF?text=PreTest+2023",
  },
  // 2022 Results
  {
    id: 6,
    year: "2022",
    category: "Public",
    class_name: "Class 8",
    exam_name: "জেএসসি ফলাফল",
    file_url: "https://example.com/jsc-2022.pdf",
    image_url:
      "https://placehold.co/800x600/8155BA/FFFFFF?text=JSC+Result+2022",
  },
  {
    id: 7,
    year: "2022",
    category: "Public",
    class_name: "Class 10",
    exam_name: "এসএসসি ফলাফল",
    file_url: "https://example.com/ssc-2022.pdf",
    image_url:
      "https://placehold.co/800x600/134E4A/FFFFFF?text=SSC+2022+Result+Sheet",
  },
  // 2021 Results
  {
    id: 8,
    year: "2021",
    category: "Public",
    class_name: "Class 8",
    exam_name: "জেএসসি ফলাফল",
    file_url: "https://example.com/jsc-2021.pdf",
    image_url:
      "https://placehold.co/800x600/8155BA/FFFFFF?text=JSC+Result+2021",
  },
  {
    id: 9,
    year: "2021",
    category: "Public",
    class_name: "Class 10",
    exam_name: "এসএসসি ফলাফল",
    file_url: "https://example.com/ssc-2021.pdf",
    image_url:
      "https://placehold.co/800x600/134E4A/FFFFFF?text=SSC+2021+Result+Sheet",
  },
  {
    id: 10,
    year: "2021",
    category: "Internal",
    class_name: "Class 7",
    exam_name: "বার্ষিক পরীক্ষার ফলাফল",
    file_url: "https://example.com/routine-2021.pdf",
    image_url: "https://placehold.co/800x600/40C4FF/FFFFFF?text=Exam+Routine",
  },
  // 2020 Results
  {
    id: 11,
    year: "2020",
    category: "Public",
    class_name: "Class 8",
    exam_name: "জেএসসি ফলাফল",
    file_url: "https://example.com/jsc-2020.pdf",
    image_url:
      "https://placehold.co/800x600/8155BA/FFFFFF?text=JSC+Result+2020",
  },
  {
    id: 12,
    year: "2020",
    category: "Public",
    class_name: "Class 10",
    exam_name: "এসএসসি ফলাফল",
    file_url: "https://example.com/ssc-2020.pdf",
    image_url:
      "https://placehold.co/800x600/134E4A/FFFFFF?text=SSC+2020+Result+Sheet",
  },
];

// --- helpers ---
const isImageUrl = (u) => {
  if (!u || typeof u !== "string") return false;
  try {
    const url = new URL(u, window.location.href);
    const p = (url.pathname + (url.search || "")).toLowerCase();
    return /\.(png|jpe?g|webp|gif|bmp|tiff)($|\?)/i.test(p);
  } catch {
    return false;
  }
};
const isPdfUrl = (u) => {
  if (!u || typeof u !== "string") return false;
  try {
    const url = new URL(u, window.location.href);
    const p = (url.pathname + (url.search || "")).toLowerCase();
    return /\.pdf($|\?)/i.test(p);
  } catch {
    return false;
  }
};

export default function Results({
  title = " জামদিয়া মাধ্যমিক বিদ্যালয়ের পরীক্ষার ফলাফল",
}) {
  const [activeCat, setActiveCat] = useState(CATEGORY_TABS[0]);

  // Static rows, using predefined data
  const rows = staticResults;

  const classNameFromId = (idOrName) => {
    return idOrName || "N/A";
  };

  const createdOrUpdated = (r) => r?.created_at || r?.updated_at || null;

  const filtered = useMemo(() => {
    // Filter by active category
    const arr = rows.filter((r) => !r?.category || r.category === activeCat);

    // Sort: Primary by Year (descending), Secondary by creation/update date (descending)
    return [...arr].sort((a, b) => {
      const ya = Number(a?.year) || 0;
      const yb = Number(b?.year) || 0;
      if (yb !== ya) return yb - ya;
      const da = new Date(createdOrUpdated(a) || 0).getTime();
      const db = new Date(createdOrUpdated(b) || 0).getTime();
      return db - da;
    });
  }, [rows, activeCat]);

  // Show class column for Internal (not Public)
  const showClassCol = activeCat !== "Public";

  // Increased font size on headers
  const headers = [
    "বছর (Year)",
    "বিভাগ (Category)",
    ...(showClassCol ? ["শ্রেণি (Class)"] : []),
    "পরীক্ষার নাম (Exam Name)",
    "ফাইল / প্রিভিউ (File / Preview)",
  ];

  const FileCell = ({ row }) => {
    const fileUrl = row.file_url || "";
    const imageUrlExplicit = row.image_url || "";

    const hasPdf = isPdfUrl(fileUrl);
    const hasImgFromFile = isImageUrl(fileUrl);
    const hasImgExplicit = isImageUrl(imageUrlExplicit);

    const imageUrl = hasImgExplicit
      ? imageUrlExplicit
      : hasImgFromFile
      ? fileUrl
      : "";
    const examLabel = row.exam_name || "Exam";

    if (!fileUrl && !imageUrl) {
      return (
        <span className="opacity-70 text-base md:text-lg text-gray-500">
          কোন ফাইল নেই
        </span>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {hasPdf && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-semibold text-teal-700 hover:text-teal-900 transition hover:underline"
          >
            <Download className="w-6 h-6" />
            ডাউনলোড (PDF)
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </a>
        )}
        {imageUrl && (
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 py-2"
            aria-label={`${examLabel} image`}
            title="Open image in new tab"
          >
            <img
              src={imageUrl}
              alt={`${examLabel} preview`}
              className="h-24 w-24 object-cover rounded-lg border-2 border-amber-400 shadow-md transition-all group-hover:shadow-xl"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.replaceWith(
                  Object.assign(document.createElement("span"), {
                    className: "text-base text-gray-600",
                    textContent: "চিত্র প্রিভিউ নেই",
                  })
                );
              }}
            />
            <span className="text-lg font-semibold text-teal-600 opacity-80 group-hover:opacity-100 transition">
              <ImageIcon className="w-5 h-5 inline-block mr-2" />
              চিত্র খুলুন
            </span>
          </a>
        )}
        {!hasPdf && !hasImgFromFile && fileUrl && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-semibold text-teal-700 hover:text-teal-900 transition hover:underline"
          >
            <FileText className="w-6 h-6" />
            ফাইল খুলুন
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="w-full py-16 px-2 md:px-4 bg-gray-100 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-teal-800 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
            সকল পাবলিক (JSC, SSC) এবং অভ্যন্তরীণ পরীক্ষার ফলাফল দেখুন।
          </p>
          <div className="mx-auto w-full h-2 bg-amber-500 rounded-full shadow-lg"></div>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-2xl border-2 border-teal-500 bg-white p-3 shadow-3xl">
            {CATEGORY_TABS.map((cat) => {
              const active = cat === activeCat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={[
                    "px-8 py-4 text-xl font-extrabold rounded-xl transition-all duration-300 transform hover:scale-[1.03]",
                    active
                      ? "bg-teal-700 text-white shadow-xl shadow-teal-300/50"
                      : "text-gray-700 hover:bg-teal-50 hover:text-teal-800",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {cat === "Public"
                    ? "পাবলিক (JSC/SSC)"
                    : "অভ্যন্তরীণ (Internal)"}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="p-12 rounded-2xl bg-white shadow-3xl border border-gray-200 text-3xl text-center text-gray-600">
            <b>{activeCat}</b> বিভাগে কোনো রেজাল্ট বা বিজ্ঞপ্তি পাওয়া যায়নি।
          </div>
        )}

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
                  {filtered.map((r, index) => (
                    <tr
                      key={r.id}
                      className={`transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-teal-50 border-t border-gray-200`}
                    >
                      <td className="px-8 py-5 font-extrabold text-2xl text-teal-800">
                        {r.year ?? "-"}
                      </td>
                      <td className="px-8 py-5 text-gray-700">
                        {r.category ?? "-"}
                      </td>
                      {showClassCol && (
                        <td className="px-8 py-5 text-gray-700">
                          {classNameFromId(r.class_name ?? r.className)}
                        </td>
                      )}
                      <td className="px-8 py-5 font-medium text-gray-700">
                        {r.exam_name ?? "-"}
                      </td>
                      <td className="px-8 py-5">
                        <FileCell row={r} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-5 text-lg border-t border-gray-300 bg-gray-100 text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center">
              <span>
                <b className="font-extrabold">{activeCat}</b> বিভাগের জন্য মোট{" "}
                {filtered.length} টি রেকর্ড দেখানো হচ্ছে।
              </span>
              <span className="text-base md:text-lg font-bold text-amber-600 mt-2 md:mt-0">
                তথ্যগুলি বছরের ভিত্তিতে সাজানো হয়েছে।
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
