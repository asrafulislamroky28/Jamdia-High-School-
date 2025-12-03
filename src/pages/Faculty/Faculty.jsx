import React, { useState, useMemo } from 'react';
import { Search, Mail, Phone, X, User, GraduationCap, Calendar, Briefcase } from 'lucide-react';

import img03 from "../../images/Faculty/03.JPG";
import img04 from "../../images/Faculty/04.JPG";
import img06 from "../../images/Faculty/06.jpg";
import img07 from "../../images/Faculty/07.JPG";
import img12 from "../../images/Staff/12.JPG";
import img13 from "../../images/Staff/13.JPG";
import img14 from "../../images/Staff/14.JPG";
import img18 from "../../images/Staff/18.JPG";

// Sample data for faculty and staff
const sampleData = [
  {
    id: 1,
    full_name: "জন ডো",
    designation: "সহকারী অধ্যাপক",
    department: "গণিত বিভাগ",
    contact_phone: "01700000000",
    contact_email: "johndoe@example.com",
    photo: img03, // Using imported image
    subject: "উচ্চতর গণিত",
    joining_date: "01/01/2010",
    mpo_date: "01/01/2015",
    education: "M.Sc (Mathematics), BUET",
    teacher_intro: "গণিত অলিম্পিয়াডের প্রশিক্ষক এবং ২০ বছরের অভিজ্ঞতাসম্পন্ন শিক্ষক। শিক্ষার্থীদের সৃজনশীল মেধা বিকাশে বিশেষ যত্নবান।",
    role: "teacher"
  },
  {
    id: 2,
    full_name: "মাহমুদুল হাসান",
    designation: "অফিস সহকারী",
    department: "প্রশাসন",
    contact_phone: "01800000000",
    contact_email: "mahmudul@example.com",
    photo: img04, // Using imported image
    subject: "",
    joining_date: "15/03/2018",
    mpo_date: "",
    education: "B.A (Honours)",
    teacher_intro: "অফিস ব্যবস্থাপনা এবং নথিপত্র সংরক্ষণে দক্ষ।",
    role: "staff"
  },
  {
    id: 3,
    full_name: "নাসরিন আক্তার",
    designation: "প্রভাষক",
    department: "বাংলা বিভাগ",
    contact_phone: "01900000000",
    contact_email: "nasrin@example.com",
    photo: img06, // Using imported image
    subject: "বাংলা সাহিত্য",
    joining_date: "10/02/2012",
    mpo_date: "10/02/2016",
    education: "M.A (Bangla), Dhaka University",
    teacher_intro: "সাহিত্য চর্চা ও বিতর্ক ক্লাবের মডারেটর হিসেবে দায়িত্ব পালন করছেন।",
    role: "teacher"
  },
  {
    id: 4,
    full_name: "মোঃ কামাল হোসেন",
    designation: "সহকারী পরিচালক",
    department: "প্রশাসন",
    contact_phone: "01790000000",
    contact_email: "kamal@example.com",
    photo: img07, // Using imported image
    subject: "",
    joining_date: "05/01/2015",
    mpo_date: "12/10/2020",
    education: "M.B.A, Dhaka University",
    teacher_intro: "বিশ্ববিদ্যালয়ে প্রশাসনিক কার্যক্রম পরিচালনা এবং উন্নত দক্ষতা অর্জনে নিবেদিত।",
    role: "staff"
  },
  {
    id: 5,
    full_name: "সুমন সিকদার",
    designation: "অধ্যাপক",
    department: "ইংরেজি বিভাগ",
    contact_phone: "01730000000",
    contact_email: "sumon@example.com",
    photo: img12, // Using imported image
    subject: "আধুনিক ইংরেজি সাহিত্য",
    joining_date: "20/07/2008",
    mpo_date: "15/06/2012",
    education: "Ph.D (English Literature), Harvard University",
    teacher_intro: "প্রফেসর সুমন ইংরেজি সাহিত্য বিষয়ের একজন প্রতিষ্ঠিত বিশেষজ্ঞ। পাঠ্যক্রম উন্নয়নে তাঁর অভিজ্ঞতা অমূল্য।",
    role: "teacher"
  },
  {
    id: 6,
    full_name: "শামসুল ইসলাম",
    designation: "অফিস সহকারী",
    department: "মানব সম্পদ বিভাগ",
    contact_phone: "01790001234",
    contact_email: "shamsul@example.com",
    photo: img13, // Using imported image
    subject: "",
    joining_date: "05/02/2019",
    mpo_date: "",
    education: "B.S.S. (Management), National University",
    teacher_intro: "বিশ্ববিদ্যালয়ে প্রশাসনিক কার্যক্রম পরিচালনায় দক্ষ, অফিস ব্যবস্থাপনায় অভিজ্ঞ।",
    role: "staff"
  },
  {
    id: 7,
    full_name: "রাহুল রায়",
    designation: "প্রভাষক",
    department: "অর্থনীতি বিভাগ",
    contact_phone: "01987654321",
    contact_email: "rahul@example.com",
    photo: img14, // Using imported image
    subject: "মৌলিক অর্থনীতি",
    joining_date: "25/03/2014",
    mpo_date: "25/03/2018",
    education: "M.A (Economics), Jahangirnagar University",
    teacher_intro: "অর্থনীতির বিষয়েও একজন খ্যাতনামা শিক্ষক, এবং সম্প্রতি বিভিন্ন আন্তর্জাতিক সেমিনারে বক্তৃতা দিয়েছেন।",
    role: "teacher"
  },
  {
    id: 8,
    full_name: "লতা দাস",
    designation: "অফিস সহকারী",
    department: "অ্যাকাউন্টস",
    contact_phone: "01982345678",
    contact_email: "lata@example.com",
    photo: img18, // Using imported image
    subject: "",
    joining_date: "12/10/2020",
    mpo_date: "",
    education: "B.Com (Hons.)",
    teacher_intro: "অ্যাকাউন্টিং ও অর্থ ব্যবস্থাপনার কাজে দক্ষ। অফিসে নথিপত্র সংরক্ষণে দক্ষ।",
    role: "staff"
  }
];

// Define the new primary theme color
const PRIMARY_COLOR = '#006064'; // Deep Cyan/Teal

// Profile Modal Component
const ProfileModal = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div style={{ backgroundColor: PRIMARY_COLOR }} className="p-5 flex justify-between items-center text-white shrink-0">
          <h3 className="font-bold text-2xl">বিস্তারিত তথ্য</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition">
            <X size={28} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            
            {/* Left Side: Big Photo */}
            <div className="shrink-0 w-full md:w-auto flex justify-center">
               <div style={{ borderColor: `${PRIMARY_COLOR}1A` }} className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-100 border-8 flex items-center justify-center overflow-hidden shadow-lg">
                {person.photo ? (
                  <img src={person.photo} alt={person.full_name} className="w-full h-full object-cover" />
                ) : (
                  <User size={80} className="text-gray-300" />
                )}
              </div>
            </div>

            {/* Right Side: Info */}
            <div className="grow w-full text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{person.full_name}</h2>
              <p style={{ color: PRIMARY_COLOR }} className="font-bold text-2xl mb-1">{person.designation}</p>
              {person.department && <p className="text-xl text-gray-500 mb-6">{person.department}</p>}
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                 {person.contact_phone && (
                    <a href={`tel:${person.contact_phone}`} className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 text-green-800 rounded-full text-lg font-medium hover:bg-green-100 border border-green-200 transition">
                      <Phone size={18} /> {person.contact_phone}
                    </a>
                 )}
                 {person.contact_email && (
                    <a href={`mailto:${person.contact_email}`} className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-800 rounded-full text-lg font-medium hover:bg-blue-100 border border-blue-200 transition">
                      <Mail size={18} /> Email
                    </a>
                 )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {person.subject && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-1">
                        <Briefcase style={{ color: PRIMARY_COLOR }} size={20}/>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">বিষয়</p>
                    </div>
                    <p className="text-xl text-gray-800 font-medium pl-8">{person.subject}</p>
                  </div>
                )}

                {person.education && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <div className="flex items-center gap-3 mb-1">
                        <GraduationCap style={{ color: PRIMARY_COLOR }} size={20}/>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">শিক্ষাগত যোগ্যতা</p>
                    </div>
                    <p className="text-xl text-gray-800 font-medium pl-8">{person.education}</p>
                  </div>
                )}

                {(person.joining_date || person.mpo_date) && (
                   <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 md:col-span-2">
                     <div className="flex items-center gap-3 mb-1">
                        <Calendar style={{ color: PRIMARY_COLOR }} size={20}/>
                        <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">যোগদান ও অন্যান্য</p>
                    </div>
                    <p className="text-xl text-gray-800 font-medium pl-8">
                      ১ম যোগদান: {person.joining_date || 'N/A'} 
                      {person.mpo_date && <span className="ml-4 text-gray-500">• MPO: {person.mpo_date}</span>}
                   </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {person.teacher_intro && (
            <div className="mt-8 pt-6 border-t border-gray-100">
               <h4 className="text-lg font-bold text-gray-400 mb-3 uppercase">পরিচিতি ও অন্যান্য তথ্য</h4>
               <p style={{ backgroundColor: `${PRIMARY_COLOR}0A`, borderColor: `${PRIMARY_COLOR}30` }} className="text-gray-700 text-lg leading-relaxed p-6 rounded-xl border">
                 {person.teacher_intro}
               </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Faculty Card Component
const FacultyCard = ({ person, onOpenModal }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
      <div style={{ backgroundColor: PRIMARY_COLOR }} className="h-28 relative transition-colors duration-300">
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
             <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md overflow-hidden flex items-center justify-center z-10">
                <img 
                    src={person.photo} 
                    alt={person.full_name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }}
                />
                <div className={`w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 ${person.photo ? 'hidden' : ''}`}>
                    <User size={36} />
                </div>
            </div>
          </div>
      </div>
      
      <div className="p-5 pt-16 grow flex flex-col items-center text-center">
        <h3 style={{ color: PRIMARY_COLOR }} className="text-xl font-bold group-hover:text-cyan-700 transition-colors line-clamp-1">
          {person.full_name}
        </h3>
        <p className="text-base font-semibold text-red-500 mb-1">{person.designation}</p>
        <p className="text-sm text-gray-500 mb-6 h-4">{person.subject || person.department}</p>

        <div className="flex items-center gap-3 w-full mt-auto justify-between px-2">
           <button 
             onClick={() => onOpenModal(person)}
             style={{ '--tw-ring-color': PRIMARY_COLOR }}
             className="flex-1 bg-gray-50 text-gray-700 py-2.5 px-4 rounded border border-gray-200 text-base font-medium hover:text-white transition-colors hover:bg-[var(--primary-color)]"
             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR}
             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
           >
             বিস্তারিত দেখুন
           </button>
           
           {person.contact_phone && (
              <a href={`tel:${person.contact_phone}`} style={{ borderColor: `${PRIMARY_COLOR}30` }} className="p-3 text-gray-400 border rounded hover:text-white hover:bg-[var(--primary-color)] transition-colors" title="Call"
                onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = PRIMARY_COLOR; e.currentTarget.style.color = 'white';}}
                onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#9ca3af';}}
              >
                <Phone size={20} />
              </a>
           )}
        </div>
      </div>
    </div>
  );
};

// Main Faculty Page Component
export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredData = useMemo(() => {
    return sampleData.filter((person) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch = 
        person.full_name.toLowerCase().includes(lowerSearch) ||
        person.designation.toLowerCase().includes(lowerSearch) ||
        (person.subject && person.subject.toLowerCase().includes(lowerSearch)) ||
        (person.department && person.department.toLowerCase().includes(lowerSearch));

      const matchesRole = selectedRole === "all" || 
                         (selectedRole === "teacher" && person.role === "teacher") ||
                         (selectedRole === "staff" && person.role === "staff");

      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole]);

  return (
    <div className="bg-[#f8f9fa] font-sans pb-12" style={{ '--primary-color': PRIMARY_COLOR }}>
      <div style={{ backgroundColor: PRIMARY_COLOR }} className="text-white py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">শিক্ষক ও কর্মচারী তালিকা</h1>
        <p className="text-white/80 text-sm sm:text-base">আমাদের দক্ষ শিক্ষক মণ্ডলী এবং নিবেদিত প্রাণ কর্মচারীবৃন্দ</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4 flex flex-col md:flex-row gap-3 items-center justify-between border border-gray-100">
          <div className="relative w-full md:grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              style={{ '--tw-ring-color': PRIMARY_COLOR, '--tw-border-color': PRIMARY_COLOR }}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[var(--tw-ring-color)] focus:border-[var(--tw-border-color)] text-sm transition"
              placeholder="নাম, পদবি বা বিভাগ দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex bg-gray-100 p-1 rounded w-full md:w-auto">
            {[ 
                { id: 'all', label: 'সকল' },
                { id: 'teacher', label: 'শিক্ষক' },
                { id: 'staff', label: 'কর্মচারী' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id)}
                style={selectedRole === tab.id ? { color: PRIMARY_COLOR } : {}}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-all duration-200 flex-1 md:flex-none ${
                  selectedRole === tab.id ? 'bg-white shadow-sm font-bold' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6 border-l-4 border-[#e94560] pl-3">
          <h2 className="text-xl font-bold text-gray-800">তালিকাভুক্ত সদস্য</h2>
          <span className="text-xs font-semibold text-gray-500 bg-white px-2 py-1 rounded border">মোট: {filteredData.length}</span>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((person) => (
              <FacultyCard key={person.id} person={person} onOpenModal={setSelectedPerson} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
              <Search size={24} />
            </div>
            <p className="text-gray-500 text-sm">কোন ফলাফল পাওয়া যায়নি</p>
          </div>
        )}
      </div>

      <ProfileModal 
        person={selectedPerson} 
        onClose={() => setSelectedPerson(null)} 
      />
    </div>
  );
}
