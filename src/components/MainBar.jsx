import React from 'react';

const MainBar = () => {
  return (
    <div className="w-full my-8 px-4 md:px-8">
      <div className="mx-4 md:mx-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-16 md:py-24 relative overflow-hidden rounded-2xl">
        {/* Circle Decorations */}
        <div className="absolute w-64 h-64 rounded-full bg-blue-400 bg-opacity-20 -left-32 top-12"></div>
        <div className="absolute w-48 h-48 rounded-full bg-blue-400 bg-opacity-20 -right-12 -bottom-12"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            EMPOWERING BUSINESSES WITH ADVANCED TECHNOLOGY SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Innovative hardware, software, and services tailored to your needs at cost-effective rates
          </p>

          <a href="#services" className="inline-block">
            <button className="bg-white text-blue-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors">
              Explore Our Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
