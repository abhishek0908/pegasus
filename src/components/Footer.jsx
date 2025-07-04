import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '../assets/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Pegasus Retail Logo" 
                className="h-16"
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-300">
              Pegasus is a leading technology solutions enterprise enabling 
              advanced technology hardware, software and services put 
              together offering power and flexibility at cost effective and 
              competitive commercial offerings.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="text-xl font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Offering</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">GET IN TOUCH</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
<span>501, Princess Empire, Race Course Road, Indore, Madhya Pradesh – 452003</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:sales@pegasusretail.in" className="hover:text-blue-400 transition-colors">
                  sales@pegasusretail.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a href="tel:+917312544111" className="hover:text-blue-400 transition-colors">
                  +91 7312544111
                </a>
                <Phone size={20} />
                <a href="tel:+919039030116" className="hover:text-blue-400 transition-colors">
                  +91 9039030116
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Social Media Links */}
      {/* <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div> */}
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 bg-black">
  <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
    © {currentYear} Pegasus Retail India Pvt. Ltd. All rights reserved.
  </div>
</div>

    </footer>
  );
}