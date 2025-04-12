import React from "react";
import { servicesList } from "../data/servicesData";

const Services = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-16 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
        {/* LEFT TEXT SECTION */}
        <div className="lg:w-1/2 w-full animate-slide-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            HIGH-QUALITY OFFSET PRINTING SOLUTIONS
          </h2>
          <p className="text-gray-600 mb-4">
            At Subak Offset LLP, we specialize in delivering high-quality printing solutions that cater to a wide range of commercial and personal needs.
          </p>
          <p className="text-gray-600 mb-4">
            With state-of-the-art offset printing technology and a passion for precision, we produce everything from brochures, catalogues, and business cards to packaging and promotional materials with exceptional clarity and vibrant color.
          </p>
          <p className="text-gray-600 mb-4">
            Our commitment to excellence, timely delivery, and customer satisfaction makes us a trusted partner for businesses looking to make a bold, professional statement through print.
          </p>
          <p className="mt-6 text-blue-700 font-semibold">
            Please use the Contact Us form below for any queries or quotations. Our team is ready to assist you!
          </p>
        </div>

        {/* RIGHT SERVICE CARDS SECTION */}
        <div className="lg:w-1/2 w-full flex flex-wrap justify-center gap-10 animate-slide-right">
          {servicesList.map((service, idx) => {
            const rotation = idx % 2 === 0 ? "-rotate-3" : "rotate-3";
            const zIndex = 10 + idx;
            return (
              <div
                key={service.id}
                className={`relative bg-white border border-gray-200 p-6 w-72 rounded-3xl shadow-xl transform ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer`}
                style={{ zIndex }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600 text-3xl">
                    <service.icon />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
                </div>
                <div className="overflow-hidden rounded-2xl h-44 w-full shadow-md">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
