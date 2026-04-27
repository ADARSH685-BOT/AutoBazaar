import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CARS_DATA } from '../data/carsData';
import { CheckCircle, Upload, ChevronRight, ChevronLeft, Car, Camera, IndianRupee, User } from 'lucide-react';

const Sell = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    km: '',
    fuel: '',
    color: '',
    city: '',
    price: '',
    negotiable: true,
    name: '',
    phone: '',
    email: '',
    images: []
  });

  const brands = Array.from(new Set(CARS_DATA.map(car => car.brand)));
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const steps = [
    { title: "Car Details", icon: <Car size={20} /> },
    { title: "Photos", icon: <Camera size={20} /> },
    { title: "Pricing", icon: <IndianRupee size={20} /> },
    { title: "Contact", icon: <User size={20} /> }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl mx-auto glass-card p-12 py-20"
        >
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h1 className="text-5xl mb-4">Ad Posted Successfully!</h1>
          <p className="text-gray-400 text-lg mb-10">Our experts will review your listing and it will be live within 24 hours. Get ready for some serious offers!</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl mb-6">Sell Your <span className="text-primary">Car</span></h1>
          
          {/* Progress Bar */}
          <div className="flex justify-between items-center relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white bg-opacity-10 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step > i + 1 ? 'bg-primary text-white' : step === i + 1 ? 'bg-primary text-white scale-110' : 'bg-dark-lighter border border-white border-opacity-10 text-gray-500'}`}>
                  {step > i + 1 ? <CheckCircle size={20} /> : s.icon}
                </div>
                <p className={`text-[10px] uppercase tracking-widest mt-3 ${step === i + 1 ? 'text-primary' : 'text-gray-500'}`}>{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode='wait'>
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Brand</label>
                      <select 
                        className="input-field w-full appearance-none"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        required
                      >
                        <option value="">Select Brand</option>
                        {brands.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Model</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Swift VXI"
                        className="input-field w-full"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Manufacturing Year</label>
                      <select 
                        className="input-field w-full appearance-none"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        required
                      >
                        <option value="">Select Year</option>
                        {Array.from({ length: 15 }, (_, i) => 2024 - i).map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Kilometers Driven</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 45000"
                        className="input-field w-full"
                        value={formData.km}
                        onChange={(e) => setFormData({ ...formData, km: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Fuel Type</label>
                      <select 
                        className="input-field w-full appearance-none"
                        value={formData.fuel}
                        onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                        required
                      >
                        <option value="">Select Fuel</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">City</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Mumbai"
                        className="input-field w-full"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="border-2 border-dashed border-white border-opacity-10 rounded-none p-12 text-center group hover:border-primary transition-colors cursor-pointer">
                    <Upload size={48} className="mx-auto text-gray-600 group-hover:text-primary mb-4 transition-colors" />
                    <h3 className="text-xl mb-2 uppercase tracking-widest">Upload Car Photos</h3>
                    <p className="text-gray-500 mb-6">Drag & Drop or click to browse up to 10 high-quality photos</p>
                    <button type="button" className="btn-outline px-8 py-2">Select Files</button>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                     {Array.from({ length: 5 }).map((_, i) => (
                       <div key={i} className="aspect-square bg-dark-lighter border border-white border-opacity-5 flex items-center justify-center text-gray-700">
                         <Camera size={24} />
                       </div>
                     ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="max-w-md mx-auto text-center">
                    <label className="text-sm text-gray-500 uppercase tracking-widest block mb-4">Set Your Expected Price</label>
                    <div className="relative">
                       <IndianRupee className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={32} />
                       <input 
                        type="number" 
                        placeholder="0.00"
                        className="bg-dark border-b-2 border-white border-opacity-10 focus:border-primary text-5xl font-heading w-full pl-16 py-6 text-center outline-none transition-all"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mt-10 flex items-center justify-center space-x-4">
                       <span className="text-gray-400">Is this price negotiable?</span>
                       <button 
                        type="button"
                        onClick={() => setFormData({ ...formData, negotiable: !formData.negotiable })}
                        className={`w-14 h-8 rounded-full p-1 transition-all ${formData.negotiable ? 'bg-primary' : 'bg-gray-700'}`}
                       >
                         <div className={`w-6 h-6 bg-white rounded-full transition-all ${formData.negotiable ? 'ml-6' : 'ml-0'}`}></div>
                       </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="input-field w-full"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          className="input-field w-full"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Email Address</label>
                        <input 
                          type="email" 
                          className="input-field w-full"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between border-t border-white border-opacity-5 pt-8">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="uppercase tracking-widest text-sm font-bold">Back</span>
                </button>
              ) : <div></div>}

              {step < 4 ? (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="btn-primary flex items-center space-x-2 px-10"
                >
                  <span className="text-sm">Next Step</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn-primary px-12 text-lg"
                >
                  Post Advertisement
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
