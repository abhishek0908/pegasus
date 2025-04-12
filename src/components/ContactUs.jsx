import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import contactSupport from '../assets/support.png';

export default function ContactUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#aboutus') {
      const aboutUsSection = document.getElementById('aboutus');
      if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <div className="flex text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-medium mb-6">Get in touch</h2>

            <form
              action="https://formspree.io/f/xanevjjn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <select
                  name="reason"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="" disabled>Reason For Contact</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-72 h-72 border-4 border-white shadow-lg">
              <img src={contactSupport} alt="Customer support team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="relative w-full h-96 mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3129309461603!2d75.8801679!3d22.6000565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8bdf4d8f33%3A0x7a09ddabbd0b3134!2sPrincess%20Empire%2C%20Race%20Course%20Rd%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1718184462953!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
            <span className="text-3xl animate-bounce">📍</span>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  {/* Call Us */}
  <div className="bg-blue-600 text-white rounded-lg p-6">
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-1">Call Us</h3>
      <p className="text-sm mb-2">For Emergency Purposes</p>
      <a href="tel:+919876543210" className="text-sm font-medium">+91 9876543210</a>
    </div>
  </div>

  {/* Chat to Support */}
  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-1">Chat to Support</h3>
      <p className="text-sm mb-3">We're here to help</p>
      <a 
        href="https://wa.me/917312544111" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-50"
      >
        Chat on WhatsApp
      </a>
    </div>
  </div>

  {/* Visit */}
  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-1">Visit</h3>
      <p className="text-sm mb-3">Visit our Office</p>
      <a 
        href="https://g.co/kgs/3nRqf1P" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-50"
      >
        View on Maps
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
