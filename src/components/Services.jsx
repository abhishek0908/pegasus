import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "We provide cutting-edge AI solutions to help businesses automate and optimize their processes, making them more efficient and data-driven.",
      icon: (
        <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" fill="none" className="mx-auto" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      title: "ICT Products",
      description: "Our ICT products provide seamless communication and technological solutions to businesses, enhancing their productivity and connectivity.",
      icon: (
        <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" fill="none" className="mx-auto" aria-hidden="true">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      )
    },
    {
      title: "Software Services",
      description: "Our software services include custom development and enterprise solutions tailored to your business's unique needs, from start to finish.",
      icon: (
        <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" fill="none" className="mx-auto" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 text-center md:text-left">OUR SERVICES</h2>
            <div className="h-1 w-32 bg-gray-800 mt-4 mx-auto md:mx-0"></div>
          </div>
          <Link
            to="/services"
            className="bg-blue-600 text-white rounded-full px-8 py-3 font-medium"
          >
            VIEW ALL
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg relative group hover:shadow-lg transition-shadow"
            >
              <div className="mb-8">
                {service.icon}
              </div>
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
