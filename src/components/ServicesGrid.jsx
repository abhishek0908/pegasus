// ServicesGrid.jsx
import React from 'react';
import { servicesData } from '../data/servicesData.jsx';

export default function ServicesGrid() {
  return (
    <div className="w-full">
      <div className="bg-blue-500 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">What We Offer</h1>
        <div className="flex items-center">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <a href="#" className="hover:underline">Contacts Us</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Explore Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
}
