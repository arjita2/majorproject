import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/backgound.avif';
import videoFile from '../assets/video.mp4';
import bannerImage from '../assets/OIP.jpeg';
import ServicesGrid from '../components/ServicesGrid';
import ContactForm from '../components/ContactForm'; 


function Home() {
  const [show, setShow] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setCurtainsOpen(true), 300);
    const timer2 = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section with Curtain Effect */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center text-center px-4 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

        {/* Curtain Left */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-white z-30 transition-transform duration-1000 ${
            curtainsOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        ></div>

        {/* Curtain Right */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 bg-white z-30 transition-transform duration-1000 ${
            curtainsOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          <h1
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-[1200ms] ease-out ${
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

          <button
            onClick={handleContactClick}
            className={`px-8 py-4 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-1000 delay-500 ${
              show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Gap */}
      <div className="bg-white py-8"></div>

      {/* Quote Banner Section */}
      <section
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            "Providing Solutions For Printing"
          </h2>
        </div>
      </section>

      {/* Gap */}
      <div className="bg-white py-8"></div>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* How Do We Do It Section */}
      <section className="bg-white text-blue-600 py-16 px-4 text-center">
  <p className="text-xl font-light mb-4">A quick glimpse of</p>
  <h2 className="text-5xl md:text-6xl font-bold mb-10">HOW DO WE DO IT</h2>

  {/* Add transition animation here */}
  <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl animate-fadeIn">
    <video
      src={videoFile}
      controls
      autoPlay
      muted
      loop
      className="w-full h-auto"
    />
    </div>
      </section>
      
      <>
      {/* Other sections here */}
      <ContactForm /> {/* Reuse the form */}
    </>

      {/* Footer Placeholder */}
      <div id="footer" className="bg-gray-100 p-8 text-center text-sm text-gray-500">
        Footer Placeholder — Replace with your real footer content
      </div>
    </div>
  );
}

export default Home;
