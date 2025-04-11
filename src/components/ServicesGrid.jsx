import React from 'react';
import { useInView } from 'react-intersection-observer';

import corporate_stationery from '../assets/corporate_stationery.jpg';
import marketing_collateral from '../assets/marketing_collateral.jpg';
import Outdoor_signages from '../assets/Outdoor_signages.webp';
import box_packaging from '../assets/box_packaging.jpg';
import pos_display from '../assets/pos_display.jpg';
import indoor_signage from '../assets/indoor_signage.jpg';

const ServicesGrid = () => {
  const services = [
    { title: 'Corporate Stationery', image: corporate_stationery },
    { title: 'Marketing Collaterals', image: marketing_collateral },
    { title: 'Outdoor Signage', image: Outdoor_signages },
    { title: 'Box Packaging', image: box_packaging },
    { title: 'POS Display Shelves', image: pos_display },
    { title: 'Indoor Signage', image: indoor_signage },
  ];

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        WE ARE YOUR ONE STOP SHOP FOR ALL PRINTING NEEDS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <div
              key={index}
              ref={ref}
              className={`bg-gray-100 rounded shadow transition-all duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="py-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {service.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;

