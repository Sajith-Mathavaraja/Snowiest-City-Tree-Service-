import React from 'react';
import { Link } from 'react-router-dom';
import { Trees } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1F2933]/90 backdrop-blur-md text-white pt-20 pb-24 md:pb-10 relative z-10 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-accent/60 shadow-md shrink-0 flex items-center justify-center bg-[#02493e]">
                <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Snowiest City Tree Service Logo" className="w-full h-full object-cover scale-[1.55]" />
              </div>
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-accent uppercase text-xs tracking-wider">
                Snowiest City<br/>Tree Service
              </span>
            </Link>
            <p className="text-gray-300 mb-6 font-body">
              Premium tree care services built for every season. Fully licensed, insured, and certified arborists.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-accent">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-heading font-bold text-white mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Tree Removal</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Emergency Response</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Pruning & Trimming</a ></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Stump Grinding</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Plant Health Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-heading font-bold text-white mb-6">Quick Links</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-heading font-semibold mb-6">Contact</h2>
            <ul className="space-y-4 text-gray-300">
              <li>9950 County Rd, Clarence Center, NY 14032</li>
              <li>315-375-7877</li>
              <li>syracuse@syracusetreeservices.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Snowiest City Tree Service. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-accent transition-colors font-medium">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors font-medium">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
