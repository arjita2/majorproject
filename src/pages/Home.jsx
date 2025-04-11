import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/OIP.jpeg';
import videoFile from '../assets/video.mp4';

function Home() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Option A: Scroll to footer


  // Option B: Navigate to contact page
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-[1200ms] ease-out ${
              show ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'
            }`}
          >
            Welcome to <span className="text-yellow-400">Subak Offset LLP</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-white mb-10 transition-all duration-[1300ms] ease-out delay-200 ${
              show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            We’re glad you’re here. Let’s print the future together.
          </p>

          {/* 👇 Use one of these options */}

          {/* Option A: Scroll to Footer */}
          {/* <button
            onClick={scrollToFooter}
            className={`px-8 py-4 bg-yellow-500 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-1000 delay-500 ${
              show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Contact Us
          </button> */}

          {/* Option B: Navigate to Contact Page */}
          <button
            onClick={handleContactClick}
            className={`px-8 py-4 bg-yellow-500 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-1000 delay-500 ${
              show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* How Do We Do It Section */}
      <section className="bg-white text-blue-600 py-16 px-4 text-center">
        <p className="text-xl font-light mb-4">A quick glimpse of</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-10">HOW DO WE DO IT</h2>

        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            src={videoFile}
            
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Optional Footer Placeholder */}
     
    </div>
  );
}

export default Home;

