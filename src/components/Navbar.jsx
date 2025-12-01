import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Define a professional font stack for Bengali text
  const bengaliFontStyle = {
    fontFamily: "'Kalpurush', 'Noto Sans Bengali', sans-serif",
  };

  return (
    // FIX 1: Reduced Vertical Padding (py-3) to reduce navbar height
    <nav className="bg-[#006064] text-white p-10 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Section: School Name/Logo - FIX 2: Added flex for a potential logo image */}
        <div className="flex items-center space-x-4">
          {/* Optional: Add Logo Placeholder here if needed */}
          {/* <img src="/path/to/logo.png" alt="School Logo" className="h-10 w-auto" /> */}
          <div className="text-3xl font-bold" style={bengaliFontStyle}>
            <h1>জামদিয়া মাধ্যমিক বিদ্যালয়</h1>
          </div>
        </div>

        {/* Desktop Menu - FIX 3: Used justify-end, flex-grow, and space-x-6 for proper distribution on the right */}
        <div className="hidden md:flex w-full md:w-auto md:ml-auto md:space-x-4 lg:space-x-8">
          <NavLink
            to="/"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            হোম
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            আমাদের সম্পর্কে
          </NavLink>
          <NavLink
            to="/routine"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            রুটিন
          </NavLink>
          <NavLink
            to="/results"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            ফলাফল
          </NavLink>
          <NavLink
            to="/teachers-staff"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            শিক্ষক ও কর্মচারী
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            গ্যালারি
          </NavLink>
          <NavLink
            to="/notices"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            নোটিশ
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xl lg:text-2xl text-white hover:text-[#ffcc00] transition duration-300 transform hover:scale-105"
            style={bengaliFontStyle}
          >
            যোগাযোগ
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl p-1"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Font size kept at LG for better mobile stacking */}
      {showMobileMenu && (
        <div className="md:hidden bg-[#004d40] mt-4 p-4 rounded-lg shadow-inner">
          <NavLink
            to="/"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            হোম
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            আমাদের সম্পর্কে
          </NavLink>
          <NavLink
            to="/routine"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            রুটিন
          </NavLink>
          <NavLink
            to="/results"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            ফলাফল
          </NavLink>
          <NavLink
            to="/teachers-staff"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            শিক্ষক ও কর্মচারী
          </NavLink>
          <NavLink
            to="/gallery"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            গ্যালারি
          </NavLink>
          <NavLink
            to="/notices"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            নোটিশ
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 text-lg text-white hover:text-[#ffcc00] transition duration-300"
            style={bengaliFontStyle}
          >
            যোগাযোগ
          </NavLink>
        </div>
      )}
    </nav>
  );
}