// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesList from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesList.find(s => s.id === serviceId);
  const otherServices = servicesList.filter(s => s.id !== serviceId);

  if (!service) return <p>Service not found.</p>;

  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-32 py-10 gap-10">
      <div className="flex-1">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
        {/* You can add more details here */}
      </div>

      <aside className="lg:w-1/3 border-l pl-6">
        <h2 className="text-xl font-semibold mb-4">Other Services</h2>
        <ul className="space-y-3">
          {otherServices.map(s => (
            <li key={s.id}>
              <Link
                to={`/services/${s.id}`}
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <span>{s.icon}</span> {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ServiceDetail;
