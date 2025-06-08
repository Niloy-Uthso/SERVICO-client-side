import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white pt-12 pb-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-3">HobbyHub</h2>
          <p className="text-sm opacity-90">Connect with others. Share your passion. Explore hobbies in real life or online.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a   className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/groups" className="hover:text-yellow-300 transition">Explore Groups</a></li>
            <li><a   className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a   className="hover:text-yellow-300 transition">FAQs</a></li>
          </ul>
        </div>

         
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@hobbyhub.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Kampala, Uganda
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/nilnineteenforty.oynineteenfortysix?locale=fr_FR" className="hover:text-yellow-300"><Facebook /></a>
            <a href="https://www.instagram.com/" className="hover:text-yellow-300"><Instagram /></a>
            <a href="https://x.com/" className="hover:text-yellow-300"><Twitter /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-indigo-300 opacity-30" />

      <p className="text-center text-sm opacity-70">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
