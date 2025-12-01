import React from "react";

// Inline SVG for Facebook Icon (to keep the component self-contained)
const FaFacebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={props.className}>
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.7 90.3 226.4 209.6 245.9V348.6H177.3V256h32.4V221.7c0-32.3 24.5-56.3 58.7-56.3h41.6v62.4h-28c-12.7 0-15.1 6.5-15.1 14.2v25.2h43.3l-5.6 92.6h-37.7V501.9C413.7 482.4 504 379.7 504 256z"/>
  </svg>
);

function Footer() {
  // The background color is set to #006064, matching the dark teal in the contact card and the uploaded image.
  // Highlight color is changed to amber for consistency and a more professional look.
  return (
    <footer className="bg-[#006064] text-white py-8 shadow-2xl">
      <div className="container mx-auto px-6">
        {/* Flex Container for Left (Info) and Right (Map) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          
          {/* Left Side: School Info */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-bold text-amber-400 mb-1 tracking-wider">
              জামদিয়া মাধ্যমিক বিদ্যালয়
            </h2>
            {/* Font size increased from text-sm to text-base */}
            <p className="text-base mb-1 text-gray-200 hover:text-amber-300 transition-colors duration-300">
              গ্রাম: জামদিয়া, উপজেলা: বাঘারপাড়া, জেলা: যশোর
            </p>
            {/* Font size increased from text-sm to text-base */}
            <p className="text-base mb-1 text-gray-200 hover:text-amber-300 transition-colors duration-300">
              ফোন: <span className="font-bold">01719730136</span>
            </p>
            {/* Font size increased from text-sm to text-base */}
            <p className="text-base mb-2 text-gray-200">
              ইমেইল:
              <a
                href="mailto:jamdia.high.school@gmail.com"
                className="hover:text-amber-300 ml-1 transition-colors duration-300"
              >
                jamdia.high.school@gmail.com
              </a>
            </p>
            {/* Font size increased from text-sm to text-base */}
            <p className="text-base mb-3 text-gray-200 hover:text-amber-400 transition-colors duration-300">
              EIIN: <span className="font-semibold">119553</span> | MPO কোড: <span className="font-semibold">550201507</span>
            </p>

            {/* Facebook Link with Facebook Icon */}
            <div className="mt-4">
              <a
                href="https://www.facebook.com/JamdiaHighSchool1963/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors w-max mx-auto md:mx-0"
              >
                <FaFacebook className="text-2xl" />
                <span className="font-medium text-lg">Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Right Side: Google Map */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-amber-400 mb-2 text-center md:text-left">Location</h3>
            <div className="w-full h-40 lg:h-48 overflow-hidden rounded-xl shadow-lg border-2 border-amber-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5157227621216!2d89.37349577505681!3d23.18786871013992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff0875cbcb59a1%3A0x97f71489991dae7f!2sJamdia%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1764571159432!5m2!1sen!2sbd"
                title="Jamdia High School Location"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright and Footer Text */}
        <div className="mt-8 pt-6 border-t border-white text-center text-gray-300">
          {/* Text in one line with separator */}
          <p className="text-lg md:text-xl mb-1">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-amber-400">
              জামদিয়া মাধ্যমিক বিদ্যালয়
            </span>
            . সর্বস্বত্ব সংরক্ষিত। Powered by{" "}
            <span className="font-semibold text-amber-300">
              Utshab Technology Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
