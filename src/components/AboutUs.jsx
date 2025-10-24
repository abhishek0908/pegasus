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
            Pegasus Retail India Pvt. Ltd., based in Indore, is a leading IT service provider delivering
            end-to-end technology solutions for government, corporate, and educational sectors. We
            specialize in providing IT hardware, networking solutions, power solutions, and related
            accessories on a turnkey basis to our esteemed clients.
          </p>

          <p className="text-gray-600 text-lg">
            We are partnered with globally renowned OEMs such as HP, Dell, Acer, Samsung, LG, Cisco,
            and Zoom, and also offer comprehensive post-warranty services. With over 15 years of
            experience, Pegasus Retail India Pvt. Ltd. has evolved into a trusted and well-established
            business house serving clients across multiple industries.
          </p>

          <p className="text-gray-600 text-lg">
            Recognizing the rapid growth of the IT sector, PRIPL has expanded its presence to
            Chhattisgarh and has plans to commence operations in Gujarat and Maharashtra. The
            organization is spearheaded by{' '}
            <strong className="text-blue-600">Mr. Harsh Mehta</strong>, a young MBA graduate
            specializing in Finance and Marketing, who is transforming PRIPL into a professionally
            managed enterprise.
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
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cisco.svg" alt="Cisco" />
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg" alt="Zoom" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
