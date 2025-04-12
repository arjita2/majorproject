import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesList } from "../data/servicesData";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesList.find((s) => s.id === serviceId);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (service?.subservices?.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % service.subservices.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500 font-semibold">
        Service not found 😢
      </div>
    );
  }

  const currentSub = service.subservices[currentIndex];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans transition-all duration-1000">
      {/* LEFT: Service Info */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center opacity-0 translate-x-[-100px] animate-slide-left">
        <h1 className="text-4xl font-extrabold text-[#040618] mb-6 leading-tight">{service.name}</h1>
        <p className="text-lg text-[#565772] leading-relaxed tracking-wide">{service.longDescription}</p>
      </div>

      {/* RIGHT: Animated Subservice Card */}
      <div className="md:w-1/2 p-8 flex items-center justify-center relative overflow-hidden opacity-0 translate-x-[100px] animate-slide-right">
        <div
          key={currentSub.id}
          className="w-full max-w-xl h-[28rem] bg-white border border-gray-200 rounded-2xl shadow-2xl transform transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-3xl cursor-pointer scale-100 hover:scale-105"
          onClick={() => navigate(`/subservices/${currentSub.id}`)}
        >
          <div className="h-2/3 overflow-hidden rounded-t-2xl">
            <img
              src={currentSub.image}
              alt={currentSub.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#040618] mb-2">{currentSub.name}</h2>
            <p className="text-base text-[#565772] leading-snug">{currentSub.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
