import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl from-[#1e1f4b] to-[#451952] text-white py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-3xl font-extrabold mb-3 tracking-wide text-yellow-300">Servico</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Discover trusted services. Connect with skilled providers. Leave feedback. Build community trust.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-yellow-300 transition-all duration-200">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-300 transition-all duration-200">Browse Services</a></li>
            {/* <li><a href="/myreviews" className="hover:text-yellow-300 transition-all duration-200">My Reviews</a></li> */}
            {/* <li><a  className="hover:text-yellow-300 transition-all duration-200">About Us</a></li> */}
          </ul>
        </div>

         
        <div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Mail size={18} /> support@srvico.com</li>
            <li className="flex items-center gap-2"><MapPin size={18} /> Dhaka, Bangladesh</li>
          </ul>
        </div>

         
        <div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all"><Facebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all"><Instagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-300 transition-all"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Servico. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
