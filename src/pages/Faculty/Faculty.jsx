import React, { useState } from 'react';
import defaultImage from "../../images/person.PNG"; // Default image if no photo is available
import { FaWindowClose } from "react-icons/fa";

// Sample data to simulate your teachers and staff
const sampleData = [
  {
    id: 1,
    full_name: "জন ডো",
    designation: "শিক্ষক",
    contact_phone: "0123456789",
    contact_email: "johndoe@example.com",
    photo: "", // Replace with image URL or leave empty for default
    subject: "গণিত",
    teacher_intro: "জন্ম তারিখ: 01/01/1980, ১ম যোগদান: 01/01/2010, MPO ভুক্তির তারিখ: 01/01/2015",
  },
  {
    id: 2,
    full_name: "মাহমুদুল হাসান",
    designation: "কর্মচারী",
    contact_phone: "0987654321",
    contact_email: "mahmudul@example.com",
    photo: "", // Default
    subject: "",
    teacher_intro: "",
  },
  {
    id: 3,
    full_name: "নাহিদা আক্তার",
    designation: "শিক্ষক",
    contact_phone: "0147856321",
    contact_email: "nahida@example.com",
    photo: "", // Default
    subject: "ইংরেজি",
    teacher_intro: "জন্ম তারিখ: 02/11/1985, ১ম যোগদান: 10/12/2015, MPO ভুক্তির তারিখ: 01/04/2020",
  },
  {
    id: 4,
    full_name: "মুহাম্মদ রফিকুল ইসলাম",
    designation: "কর্মচারী",
    contact_phone: "0156974832",
    contact_email: "rafikul@example.com",
    photo: "", // Default
    subject: "",
    teacher_intro: "",
  },
  {
    id: 5,
    full_name: "জোবায়ের আহমেদ",
    designation: "শিক্ষক",
    contact_phone: "0135678901",
    contact_email: "jobayer@example.com",
    photo: "", // Default
    subject: "বিজ্ঞান",
    teacher_intro: "জন্ম তারিখ: 01/03/1990, ১ম যোগদান: 01/01/2016, MPO ভুক্তির তারিখ: 01/06/2018",
  },
  {
    id: 6,
    full_name: "ফারহানা রহমান",
    designation: "কর্মচারী",
    contact_phone: "0173847561",
    contact_email: "farhana@example.com",
    photo: "", // Default
    subject: "",
    teacher_intro: "",
  },
  {
    id: 7,
    full_name: "আলিমুল হক",
    designation: "শিক্ষক",
    contact_phone: "0164567321",
    contact_email: "alimul@example.com",
    photo: "", // Default
    subject: "বাংলা",
    teacher_intro: "জন্ম তারিখ: 05/06/1982, ১ম যোগদান: 03/09/2012, MPO ভুক্তির তারিখ: 12/01/2015",
  },
  {
    id: 8,
    full_name: "শামিম আহমেদ",
    designation: "কর্মচারী",
    contact_phone: "0198675309",
    contact_email: "shamim@example.com",
    photo: "", // Default
    subject: "",
    teacher_intro: "",
  },
];

const INTRO_LABELS = [
  "জন্ম তারিখ",
  "১ম যোগদান",
  "MPO ভুক্তির তারিখ",
];

function formatIntroToLines(raw = "") {
  if (!raw || typeof raw !== "string") return [];
  let text = raw.replace(/\s+/g, " ").trim();
  INTRO_LABELS.forEach((lbl) => {
    const re = new RegExp(`(?:\\s|^)?(${lbl})\\s*[:：]?\\s*`, "g");
    text = text.replace(re, (m, g1, offset) => {
      const atStart = offset === 0 || text[offset - 1] === "\n";
      return `${atStart ? "" : "\n"}${g1}: `;
    });
  });
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function renderIntro(lines) {
  return lines.map((line, i) => {
    const label = INTRO_LABELS.find((l) => line.startsWith(l));
    if (label) {
      const value = line.slice(label.length).replace(/^:\s*/, "");
      return (
        <p key={i} className="leading-6">
          <span className="font-semibold">{label}:</span> {value || "—"}
        </p>
      );
    }
    return (
      <p key={i} className="leading-6">
        {line}
      </p>
    );
  });
}

export default function Faculty() {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return (
    <div className="px-4 py-8 bg-[#f6f7fb] min-h-screen text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0a3b68]">শিক্ষক ও কর্মচারী তালিকা</h1>
      </div>

      {/* Sample data rendered here */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8"> {/* Apply padding here */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {sampleData.map((person) => (
            <div key={person.id} className="group relative bg-white border border-[#0A3B68] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="flex-shrink-0">
                <img
                  src={person.photo || defaultImage}
                  alt={person.full_name}
                  className="w-40 h-40 object-cover rounded-full border-[#0A3B68] border-4"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultImage;
                  }}
                />
              </div>

              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="mb-1">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{person.full_name}</h3>
                  <p className="text-sm text-gray-600 truncate">{person.designation || "—"}</p>
                </div>

                {/* Teacher-only intro modal */}
                {!person.subject && (
                  <div>
                    <button
                      onClick={() => setIsModalOpen(isModalOpen === person.id ? null : person.id)}
                      className="bg-[#0a3b68] text-white px-3 py-1 rounded text-xs hover:opacity-90"
                    >
                      শিক্ষক পরিচিতি
                    </button>

                    {isModalOpen === person.id && (
                      <div className="absolute z-50 mt-2 w-[min(95vw,28rem)] bg-white border rounded-lg p-4 shadow-xl left-1/2 -translate-x-1/2">
                        <div className="flex items-start gap-3">
                          <img
                            src={person.photo || defaultImage}
                            alt={person.full_name}
                            className="w-24 h-28 object-cover rounded-lg border"
                          />
                          <div className="text-sm text-gray-800 break-words text-left space-y-1">
                            {formatIntroToLines(person.teacher_intro).length > 0 ? renderIntro(formatIntroToLines(person.teacher_intro)) : <p>তথ্য প্রদান করা হয়নি।</p>}
                          </div>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <button
                            className="text-red-600 text-xl"
                            onClick={() => setIsModalOpen(null)}
                            aria-label="Close"
                          >
                            <FaWindowClose />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="text-sm text-gray-800 space-y-1">
                  {/* Subject only for teachers */}
                  {person.subject && (
                    <p className="flex gap-1">
                      <span className="font-semibold">বিষয়:</span>
                      <span className="truncate">{person.subject || "—"}</span>
                    </p>
                  )}
                  <p className="flex gap-1">
                    <span className="font-semibold">ফোন:</span>
                    <span className="truncate">{person.contact_phone || "—"}</span>
                  </p>
                  <p className="flex gap-1">
                    <span className="font-semibold">ইমেইল:</span>
                    <span className="truncate">{person.contact_email || "—"}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
