import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, IndianRupee, Car, Shield, Gauge, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState({ brand: '', city: '', budget: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/buy?brand=${search.brand}&city=${search.city}&budget=${search.budget}`);
  };

  const features = [
    { icon: <Shield size={32} />, title: "Certified Quality", desc: "Every car undergoes a 200-point inspection by experts." },
    { icon: <Gauge size={32} />, title: "Pan India Service", desc: "Over 500+ service centers across the country." },
    { icon: <IndianRupee size={32} />, title: "Best Value", desc: "Transparent pricing and competitive finance options." },
    { icon: <Settings size={32} />, title: "Roadside Assist", desc: "24/7 emergency support for complete peace of mind." },
  ];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
        </div>

        {/* Animated Background Silhouettes (Decorative) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <motion.div
            animate={{ x: [ -100, 100, -100 ], y: [ 0, 50, 0 ] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-10"
          >
            <Car size={200} />
          </motion.div>
          <motion.div
            animate={{ x: [ 100, -100, 100 ], y: [ 0, -50, 0 ] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-10"
          >
            <Car size={300} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight"
          >
            India's Most Trusted <br />
            <span className="text-primary">Car Marketplace</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 tracking-widest uppercase"
          >
            Buy • Sell • Service — All in One Place
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto glass-card p-4 md:p-2"
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-dark-lighter px-4 py-3">
                <Car className="text-primary mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Car Brand or Model"
                  className="bg-transparent w-full outline-none text-accent"
                  value={search.brand}
                  onChange={(e) => setSearch({ ...search, brand: e.target.value })}
                />
              </div>
              <div className="flex-1 flex items-center bg-dark-lighter px-4 py-3">
                <MapPin className="text-primary mr-3" size={20} />
                <select 
                  className="bg-transparent w-full outline-none text-accent appearance-none"
                  value={search.city}
                  onChange={(e) => setSearch({ ...search, city: e.target.value })}
                >
                  <option value="" className="bg-dark">Select City</option>
                  <option value="Delhi" className="bg-dark">Delhi</option>
                  <option value="Mumbai" className="bg-dark">Mumbai</option>
                  <option value="Bangalore" className="bg-dark">Bangalore</option>
                  <option value="Pune" className="bg-dark">Pune</option>
                </select>
              </div>
              <div className="flex-1 flex items-center bg-dark-lighter px-4 py-3">
                <IndianRupee className="text-primary mr-3" size={20} />
                <select 
                  className="bg-transparent w-full outline-none text-accent appearance-none"
                  value={search.budget}
                  onChange={(e) => setSearch({ ...search, budget: e.target.value })}
                >
                  <option value="" className="bg-dark">Budget Range</option>
                  <option value="500000" className="bg-dark">Under ₹5L</option>
                  <option value="1000000" className="bg-dark">₹5L - ₹10L</option>
                  <option value="2000000" className="bg-dark">₹10L - ₹20L</option>
                  <option value="2500001" className="bg-dark">Above ₹20L</option>
                </select>
              </div>
              <button type="submit" className="btn-primary flex items-center justify-center space-x-2 px-10">
                <Search size={20} />
                <span>Search</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">Why Choose <span className="text-primary">AutoBazaar</span>?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-dark-lighter p-10 border border-white border-opacity-5 hover:border-primary transition-all duration-300 group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-lighter relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl mb-6">Ready to <span className="text-primary">Sell Your Car</span>?</h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Get the best value for your vehicle in just 3 easy steps. Professional valuation, instant payment, and free RC transfer.
              </p>
              <button 
                onClick={() => navigate('/sell')}
                className="btn-primary text-xl px-12"
              >
                Start Selling Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200&q=80" 
                alt="Luxury Car" 
                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
