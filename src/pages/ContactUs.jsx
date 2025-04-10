import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      {/* Top Banner */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src="/pic.jpg" // replace with your actual banner image path
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact SK</h1>
          <div className="mt-2">
            <Link to="/" className="text-white hover:underline">Home</Link>
            <span className="mx-2 text-white">›</span>
            <span className="text-white font-semibold">Contact SK</span>
          </div>
        </div>
      </div>

      {/* Info Boxes */}
      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/support.png" alt="Support" className="w-10 h-10" /> {/* Replace with your own icon */}
              <h3 className="text-2xl font-semibold text-black">Need Our Support</h3>
            </div>
            <p className="text-lg text-gray-600">
              Reach out to our team of printing experts and let us bring your vision to life.
              We value your interest and would love to hear from you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src="/icons/client.png" alt="Client" className="w-10 h-10" /> {/* Replace with your own icon */}
              <h3 className="text-2xl font-semibold text-black">Already Our Client</h3>
            </div>
            <p className="text-lg text-gray-600">
              Whether you have a query, a printing project in mind, or simply want to explore our
              services, we're here to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
