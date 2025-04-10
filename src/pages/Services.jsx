// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import servicesList from '../data/servicesData';

const Services = () => {
  return (
    <div className="px-6 md:px-32 py-10">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesList.map(service => (
          <Link
            to={`/services/${service.id}`}
            key={service.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center gap-4">
              <div className="text-3xl text-blue-600">{service.icon}</div>
              <div>
                <h2 className="text-xl font-semibold">{service.name}</h2>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
