import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <div className="h-14 flex items-center">
          <img 
            src=
            {logo}
            alt="Pegasus Retail Logo"
            className="h-32 w-32 mt-8"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <a href="/#aboutus" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
          <Link to="/services" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Offering</Link>
          <Link to="/contactus" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* CTA Button */}
        <Link to="/contactus" className="hidden md:flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">
          LET'S TALK 
          <span className="ml-2">→</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="flex flex-col px-4 py-2">
            <Link to="/" className="py-2 font-medium text-gray-700">Home</Link>
            <Link to="/#aboutus" className="py-2 font-medium text-gray-700">About Us</Link>
            <Link to="/#services" className="py-2 font-medium text-gray-700">Offering</Link>
            <Link to="/careers" className="py-2 font-medium text-gray-700">Careers</Link>
            <Link to="/contactus" className="py-2 font-medium text-gray-700">Contact</Link>
            <Link to="/contactus" className="mt-3 mb-2 flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-4 rounded">
              LET'S TALK 
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
