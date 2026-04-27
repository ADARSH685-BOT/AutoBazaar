import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Buy a Car', path: '/buy' },
    { name: 'Sell Your Car', path: '/sell' },
    { name: 'Service Center', path: '/service' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark bg-opacity-80 backdrop-blur-lg py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="text-primary"
          >
            <Car size={32} />
          </motion.div>
          <span className="text-3xl font-heading text-accent tracking-tighter group-hover:text-primary transition-colors">
            AUTO<span className="text-primary">BAZAAR</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/sell" className="btn-primary py-2 px-6 text-sm">
            Post an Ad
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-lighter border-b border-white border-opacity-10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-heading tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-accent'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/sell"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Post an Ad
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
