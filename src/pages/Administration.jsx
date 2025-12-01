import React from "react";
import defaultImage from "../images/person.PNG";


export default function Administration() {
  // Hardcoded members data for frontend
  const members = [
    {
      full_name: "xxxxxxxx", // Fixed quote issue
      role: "সভাপতি",
      photo: "PERSON.PNG",
    },
  ];

  return (
    <section id="administration" className="py-10 px-10 w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white bg-black py-3">
          স্কুল প্রশাসন
        </h2>
        <br />
        <p className="text-sm text-gray-700">নিবেদিতপ্রাণ নেতৃবৃন্দ</p>
      </div>

      {/* Member Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
          >
            {
              <img
                src={member.photo || defaultImage}
                alt={member.full_name}
                className="w-20 h-20 mx-auto object-cover rounded-full border-2 border-[#0a3b68] mb-3"
                onError={(e) => {
                  e.target.src = defaultImage;
                }} // Handle broken image
              />
            }
            <h3 className="text-sm font-semibold text-[#0a3b68]">
              {member.full_name}
            </h3>
            <p className="text-xs text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
