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
            <span className="text-gray-800">PEGASUS RETAIL INDIA PVT. LTD.</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Pegasus Retail India Pvt Ltd based out of Indore is a leading IT service provider company 
            involved into end to end solutions for Governments, Corporates and education segments. We 
            provide IT hardware's, networking solutions, power solutions and related accessories on a 
            turnkey basis to our esteem clients. We are engaged with internationally renowned OEM's like 
            HP, Dell, Acer, Samsung, LG, Cisco, Zoom and providing post warranty services as well.
          </p>

          <p className="text-gray-600 text-lg">
            We provide Desktops, Laptops, printers, multifunction printers, tablets with related softwares, 
            online and offline UPS with power solutions, Microsoft solutions, network and security solutions 
            like routers, switches, wireless and networking products, video conferencing solutions, wireless 
            Wi-Fi networking equipments, commercial & interactive panels, smartphones, projectors of IDC 
            recognized international brands.
          </p>

          <p className="text-gray-600 text-lg">
            Today Pegasus Retail India Pvt Ltd is a renowned and established business house with a hands-on 
            experience of 15 years in serving the clients across different verticals.
          </p>

          <p className="text-gray-600 text-lg">
            Looking into the current IT growth, PRIPL has expanded its presence to Chhattisgarh with plans 
            to start its operations in Gujarat & Maharashtra. A Young graduate with MBA in finance and 
            marketing <strong className="text-blue-600">Mr. Harsh Dhakad</strong> is spearheading the 
            organization and gradually converting a small organization into a professionally managed company.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-blue-600 rounded-full absolute -z-10 w-full h-full transform translate-x-4 translate-y-4"></div>
          <div className="rounded-full overflow-hidden shadow-xl">
            <img
              src={firstImage}
              alt="Pegasus team working on technology solutions"
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
                  Pegasus believes in long term relationships and is known for its trust and integrity in the market.
                </p>

                <p className="text-lg text-gray-700">
                  Pegasus enjoys working very closely with its customers and strives to be the first port of call for any challenge or new opportunity that its customers come across.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-8">OUR PARTNERS</h2>

          <div className="relative">
            <div className="flex animate-scroll gap-12 items-center">
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dell.svg" alt="Dell" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hp.svg" alt="HP" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/samsung.svg" alt="Samsung" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" alt="Microsoft" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lenovo.svg" alt="Lenovo" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/acer.svg" alt="Acer" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lg.svg" alt="LG" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cisco.svg" alt="Cisco" className="h-8 w-auto" />
                  </div>
                  <div className="flex items-center justify-center min-w-[120px] h-16 bg-white rounded-lg px-6">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg" alt="Zoom" className="h-8 w-auto" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
}