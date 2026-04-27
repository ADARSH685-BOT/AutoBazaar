import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Instagram, MessageCircle, Play, Send, Smartphone, Apple } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-20 pb-10 border-t border-white border-opacity-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="text-primary" size={28} />
              <span className="text-2xl font-heading text-accent tracking-tighter">
                AUTO<span className="text-primary">BAZAAR</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premium marketplace for buying, selling, and servicing pre-owned luxury and everyday cars. Quality you can trust, prices you'll love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
                <MessageCircle size={18} />
                <Send size={18} />
                <Play size={18} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6 tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/buy" className="hover:text-primary transition-colors">Buy a Car</Link></li>
              <li><Link to="/sell" className="hover:text-primary transition-colors">Sell Your Car</Link></li>
              <li><Link to="/service" className="hover:text-primary transition-colors">Service Center</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6 tracking-widest">Legal & Policy</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6 tracking-widest">Download Our App</h4>
            <div className="space-y-4">
              <button className="flex items-center space-x-3 bg-dark w-full p-3 border border-white border-opacity-10 hover:border-primary transition-all duration-300 group">
                <Apple size={24} className="group-hover:text-primary" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 bg-dark w-full p-3 border border-white border-opacity-10 hover:border-primary transition-all duration-300 group">
                <Smartphone size={24} className="group-hover:text-primary" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10 border-t border-b border-white border-opacity-5 mb-10">
          <div className="text-center">
            <h5 className="text-2xl font-heading text-primary">10 Lakh+</h5>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Happy Customers</p>
          </div>
          <div className="text-center">
            <h5 className="text-2xl font-heading text-primary">50,000+</h5>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Cars Listed</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <h5 className="text-2xl font-heading text-primary">Pan India</h5>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Service Network</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs">
          <p>© 2024 AutoBazaar India. All Rights Reserved. Crafted with ❤️ for Indian Roads.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
