import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Gauge, Droplets, Wind, Battery, Paintbrush, Search, CheckCircle, Calendar, MapPin, Phone } from 'lucide-react';

const Service = () => {
  const [isBooked, setIsBooked] = useState(false);

  const packages = [
    { icon: <Settings />, title: "Basic Service", desc: "Oil change, filter replacement, and general check-up.", price: "999" },
    { icon: <Shield />, title: "Full Service", desc: "Complete engine check, all fluids top-up, and brake inspection.", price: "2,499" },
    { icon: <Gauge />, title: "Tyre & Wheel Alignment", desc: "Precision 3D alignment and wheel balancing.", price: "1,299" },
    { icon: <Droplets />, title: "Car Detailing & Wash", desc: "Deep interior cleaning and exterior premium wax polish.", price: "799" },
    { icon: <Wind />, title: "AC Service & Repair", desc: "Gas top-up, filter cleaning, and vent sanitization.", price: "1,799" },
    { icon: <Battery />, title: "Battery Replacement", desc: "Exide/Amaron branded batteries with warranty.", price: "3,999" },
    { icon: <Paintbrush />, title: "Denting & Painting", desc: "Per panel painting with color matching technology.", price: "4,999" },
    { icon: <Search />, title: "Pre-Purchase Inspection", desc: "Detailed 150-point report before you buy.", price: "599" },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl mb-4">Service <span className="text-primary">Center</span></h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm max-w-2xl mx-auto">Expert care for your vehicle. Premium parts, transparent pricing, and master technicians.</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group hover:border-primary transition-all duration-300"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(pkg.icon, { size: 40 })}
              </div>
              <h3 className="text-2xl mb-4">{pkg.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{pkg.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-white border-opacity-5">
                <span className="text-2xl font-heading text-primary">₹{pkg.price}</span>
                <button className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-dark-lighter border border-white border-opacity-5 overflow-hidden">
            <div className="p-12 bg-primary text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl mb-6">Book an <br />Appointment</h2>
                <p className="text-primary-foreground opacity-80 mb-10">Schedule a visit to our nearest service center and get priority service for your car.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                   <Phone size={24} />
                   <div>
                     <p className="text-xs uppercase tracking-widest opacity-60">Call Support</p>
                     <p className="text-xl font-bold">1800-123-4567</p>
                   </div>
                </div>
                <div className="flex items-center space-x-4">
                   <MapPin size={24} />
                   <div>
                     <p className="text-xs uppercase tracking-widest opacity-60">Main Center</p>
                     <p className="text-xl font-bold">Andheri East, Mumbai</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-12 relative">
              {isBooked ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle size={64} className="text-primary mb-6" />
                  <h3 className="text-3xl mb-2">Booking Received!</h3>
                  <p className="text-gray-400">Our service advisor will call you shortly to confirm the slot.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-6">
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Car Model</label>
                    <input type="text" className="input-field w-full" placeholder="e.g. Maruti Swift" required />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Service Type</label>
                    <select className="input-field w-full appearance-none" required>
                      <option value="">Select Service</option>
                      {packages.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Preferred Date</label>
                      <input type="date" className="input-field w-full" required />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">City</label>
                      <input type="text" className="input-field w-full" placeholder="e.g. Pune" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                    <input type="tel" className="input-field w-full" placeholder="+91" required />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">Confirm Appointment</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
