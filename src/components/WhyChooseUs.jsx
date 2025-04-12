import React from 'react';
import { ThumbsUp, Clock, Diamond } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "RELIABILITY",
      description: "We trust in our employees because we choose smart, experienced, and hard working professionals.",
      icon: <ThumbsUp size={36} className="text-gray-800" />
    },
    {
      title: "EXPERTISE",
      description: "Achieving expertise in making less-rushed estimations and smarter go/no-go decisions requires a combination of technical skills",
      icon: <Clock size={36} className="text-gray-800" />
    },
    {
      title: "Affordable",
      description: "Achieving and maintaining quality in designing is crucial for ensuring safety, functionality, and durability of products.",
      icon: <Diamond size={36} className="text-gray-800" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Benefits */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Section Title */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-gray-800"></div>
              <h2 className="text-4xl font-bold text-gray-800">WHY CHOOSE US</h2>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Digital technology interface with person typing on laptop" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}