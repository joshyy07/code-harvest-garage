
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Premium Auto Garage</h3>
            <p className="text-white/80">
              Delivering exceptional automotive care with precision and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/70 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Engine Diagnostics</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Premium Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Performance Tuning</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Electrical Systems</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Fluid Services</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white/80">
                <span className="font-medium">Address:</span>
                <span className="ml-2">123 Luxury Lane, New York, NY 10001</span>
              </li>
              <li className="flex items-center text-white/80">
                <span className="font-medium">Phone:</span>
                <span className="ml-2">(212) 555-1234</span>
              </li>
              <li className="flex items-center text-white/80">
                <span className="font-medium">Email:</span>
                <a href="mailto:service@premiumautogarage.com" className="ml-2 hover:text-white transition-colors">
                  service@premiumautogarage.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Premium Auto Garage. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
