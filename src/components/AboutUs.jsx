import React from 'react';
import firstImage from '../assets/first.jpg';
import secondImage from '../assets/second.jpg';

export default function AboutPage() {
  return (
    <div id="aboutus" className="bg-white">
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-1 bg-blue-600"></div>
            <h3 className="text-lg font-medium text-gray-700">ABOUT US</h3>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-800">PEGASUS: Your</span><br />
            <span className="text-gray-800">Key to </span>
            <span className="text-blue-600">Branding</span><br />
            <span className="text-blue-600">Success</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Our role as a leading technology solutions enterprise enabling
            advanced technology hardware, software and services put
            together offering power and flexibility at cost effective and
            competitive commercial offerings.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-blue-600 rounded-full absolute -z-10 w-full h-full transform translate-x-4 translate-y-4"></div>
          <div className="rounded-full overflow-hidden shadow-xl">
            <img
              src={firstImage}
              alt="Team meeting with laptops"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Identifiers Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={secondImage}
                  alt="Analytics dashboard on laptop"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">IDENTIFIERS</h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Pegasus Retail believes in long term relationships and is known for its trust and integrity in the market.
                </p>

                <p className="text-lg text-gray-700">
                  Pegasus Retail enjoys working very closely with its customers and strives to be the first port of call for any challenge / new opportunity that its customers come across.
                </p>
              </div>

              <div className="pt-2">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
<section className="py-12 marquee-container">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-5xl font-bold text-white text-center mb-8">OUR PARTNERS</h2>

    <div className="marquee-track">
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dell.svg" alt="Dell" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hp.svg" alt="HP" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg" alt="Samsung" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" alt="Microsoft" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lenovo.svg" alt="Lenovo" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/acer.svg" alt="Acer" />
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lg.svg" alt="LG" />
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
