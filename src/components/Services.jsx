// Services.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData.jsx';

export default function Services() {
  const services = servicesData.slice(0, 3); // Show only first 3 in the landing view

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 text-center md:text-left">OUR SERVICES</h2>
            <div className="h-1 w-32 bg-gray-800 mt-4 mx-auto md:mx-0"></div>
          </div>
          <Link to="/services" className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium">
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg relative group hover:shadow-lg transition-shadow">
              <div className="mb-8">{service.svgIcon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="absolute top-6 right-6 bg-gray-700 text-white p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
