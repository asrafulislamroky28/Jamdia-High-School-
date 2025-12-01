import React, { useState } from 'react';

// Custom Inline SVG Icons
const Icon = ({ children, className }) => <span className={className}>{children}</span>;

// Paper Plane Icon (for the form title)
const FaPaperPlane = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M511.6 36.86c-11-13.6-28.7-21.7-47.5-21.7C382.5 15.16 0 196.46 0 200.56v151.7c0 14.9 11.8 27.6 26.7 29.1L248 376c2.6 .3 5.1-.3 7.4-1.6l192-128c11-7.3 15.3-20.2 10.8-32.1-4.7-12.7-18.3-21.5-32.2-21.5h-94.7c-17.7 0-32-14.3-32-32s14.3-32 32-32h143.2c19.7 0 38.4 10.5 48.7 28.5L511.6 36.86z"/>
    </svg>
  </Icon>
);

// Phone Icon
const FaPhoneAlt = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M164.9 24.6c-7.7-18.6-28-28.8-47.8-21.5l-95.2 37.8C4.5 44.5-2.7 67.2 1.6 86.8l61.2 276.5c2.1 9.4 6.8 18.2 13.8 25.1L274.3 475.2c16 16 38.4 25.1 61.3 25.1H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H335.6c-11.2 0-22.3-4.5-30.3-12.5L108.8 271.6c-11.4-11.4-15.5-27.1-11.6-42.5l25.8-116.5 61.9 24.6c19.8 7.9 40-2.3 47.7-20.8l49.3-118.8c7.7-18.6-2.3-39.7-21-47.4L164.9 24.6z"/>
    </svg>
  </Icon>
);

// Envelope Icon
const FaEnvelope = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M480 96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L256 320l224-160c17.7-12.6 15.9-38.3 3.3-56s-38.3-15.9-56-3.3L256 224l-224-160c-17.7-12.6-15.9-38.3 3.3-56s38.3-15.9 56-3.3L256 256 480 96zM0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160H0z"/>
    </svg>
  </Icon>
);

// Map Marker Icon
const FaMapMarkerAlt = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
      <path d="M172.268 50.785L21.56 230.638C1.517 250.702 0 272.247 0 288c0 105.875 184.184 224 184.184 224s184.184-118.125 184.184-224c0-15.753-1.517-37.298-21.56-57.362L211.732 50.785C199.184 38.237 184.184 32 184.184 32s-15 6.237-27.916 18.785zM184 272c-27.625 0-50-22.375-50-50s22.375-50 50-50 50 22.375 50 50-22.375 50-50 50z"/>
    </svg>
  </Icon>
);

// ID Card Icon (for EIIN/MPO)
const FaIdCard = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm48 112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16z"/>
    </svg>
  </Icon>
);

// Facebook Icon (for social media)
const FaFacebookF = (props) => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.7 90.3 226.4 209.6 245.9V348.6H177.3V256h32.4V221.7c0-32.3 24.5-56.3 58.7-56.3h41.6v62.4h-28c-12.7 0-15.1 6.5-15.1 14.2v25.2h43.3l-5.6 92.6h-37.7V501.9C413.7 482.4 504 379.7 504 256z"/>
    </svg>
  </Icon>
);

export default function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() && !formData.phone.trim()) {
      setStatus('❌ অনুগ্রহ করে ইমেইল অথবা ফোন নম্বর প্রদান করুন।');
      return;
    }

    setStatus('বার্তা পাঠানো হচ্ছে...');
    setTimeout(() => {
      setStatus('✅ মেসেজ সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 2500);
  };

  // Define common input classes for consistent look and feel
  const inputClass = "w-full border-2 border-gray-300 rounded-lg px-5 py-3 text-gray-800 outline-none focus:ring-4 focus:ring-amber-500/50 focus:border-amber-500 transition duration-200 shadow-sm placeholder:text-gray-500";

  return (
    <div id="contact" className="bg-gray-50 min-h-screen flex items-start justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto"> 
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#006064] border-b-4 border-amber-500 inline-block pb-2 mb-3">
            যোগাযোগ করুন
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-lg mx-auto">
            শিক্ষা সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। অনুগ্রহ করে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Contact Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          
          {/* 1. Contact Information Card */}
          <div className="bg-[#006064] p-6 sm:p-8 lg:p-12 rounded-xl shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-amber-500 inline-block pb-2 mb-8">
              যোগাযোগের তথ্য
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="w-6 h-6 flex-shrink-0 mt-1 text-amber-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">ফোন নম্বর</h3> 
                  <p className="text-gray-200">01719730136</p> 
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-6 h-6 flex-shrink-0 mt-1 text-amber-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">ইমেইল</h3> 
                  <p className="text-gray-200">jamdia.high.school@gmail.com</p> 
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 flex-shrink-0 mt-1 text-amber-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">ঠিকানা</h3> 
                  <p className="text-gray-200">গ্রাম: জামদিয়া, উপজেলা: বাঘারপাড়া</p>
                  <p className="text-gray-200">জেলা: যশোর</p>
                </div>
              </div>

              {/* EIIN / MPO Code */}
              <div className="flex items-start space-x-4">
                <FaIdCard className="w-6 h-6 flex-shrink-0 mt-1 text-amber-300" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">কোড পরিচিতি</h3> 
                  <p className="text-gray-200">EIIN: 119553</p>
                  <p className="text-gray-200">MPO কোড: 550201507</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 2. Contact Form Section */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-2xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#006064] mb-8 flex items-center justify-center">
              <FaPaperPlane className="mr-3 text-amber-500 w-7 h-7" />
              বার্তা পাঠান
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              
              {/* Name Input */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার পুরো নাম *"
                required
                className={inputClass}
              />
              
              {/* Email Input */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="আপনার ইমেইল (ঐচ্ছিক)"
                className={inputClass}
              />
              
              {/* Phone Input */}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="আপনার ফোন নম্বর (ঐচ্ছিক)"
                className={inputClass}
              />

              {/* Message Area */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="আপনার বার্তা (প্রশ্ন বা মন্তব্য) *"
                rows={6}
                required
                className={inputClass}
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#006064] text-white font-extrabold text-lg py-4 rounded-lg hover:bg-[#004d40] transition duration-300 transform hover:scale-[1.005] shadow-lg hover:shadow-xl tracking-wider"
              >
                বার্তা পাঠান
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <p className={`mt-6 text-base font-semibold text-center p-3 rounded-lg ${status.startsWith('❌') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
