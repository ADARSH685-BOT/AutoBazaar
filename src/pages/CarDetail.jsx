import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS_DATA } from '../data/carsData';
import { IndianRupee, MapPin, Calendar, Gauge, Fuel, Shield, Star, Phone, MessageSquare, Heart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';

const CarDetail = () => {
  const { id } = useParams();
  const car = useMemo(() => CARS_DATA.find(c => c.id === parseInt(id)), [id]);

  const similarCars = useMemo(() => {
    return CARS_DATA.filter(c => c.brand === car?.brand && c.id !== car?.id).slice(0, 3);
  }, [car]);

  if (!car) {
    return <div className="pt-40 text-center text-3xl font-heading">Car Not Found</div>;
  }

  return (
    <div className="pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <Link to="/buy" className="hover:text-primary">Buy a Car</Link>
          <ChevronRight size={12} />
          <span className="text-accent">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-video w-full bg-dark-lighter overflow-hidden border border-white border-opacity-5"
             >
               <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
             </motion.div>
             <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="aspect-video bg-dark-lighter border border-white border-opacity-5 hover:border-primary transition-colors cursor-pointer overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
             </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl">{car.name}</h1>
                <button className="text-primary hover:scale-110 transition-transform"><Heart size={28} /></button>
              </div>
              <p className="text-gray-400 uppercase tracking-widest text-xs mb-6">{car.year} • {car.km.toLocaleString()} KM • {car.owner}</p>
              
              <div className="flex items-center space-x-2 mb-8">
                <IndianRupee className="text-primary" size={32} />
                <span className="text-5xl font-heading">{(car.price / 100000).toFixed(2)}L</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-lighter p-4 border border-white border-opacity-5">
                   <p className="text-[10px] text-gray-500 uppercase mb-1">Fuel Type</p>
                   <p className="font-bold">{car.fuel}</p>
                </div>
                <div className="bg-dark-lighter p-4 border border-white border-opacity-5">
                   <p className="text-[10px] text-gray-500 uppercase mb-1">Transmission</p>
                   <p className="font-bold">{car.transmission}</p>
                </div>
                <div className="bg-dark-lighter p-4 border border-white border-opacity-5">
                   <p className="text-[10px] text-gray-500 uppercase mb-1">City</p>
                   <p className="font-bold">{car.city}</p>
                </div>
                <div className="bg-dark-lighter p-4 border border-white border-opacity-5">
                   <p className="text-[10px] text-gray-500 uppercase mb-1">Insurance</p>
                   <p className="font-bold text-green-500">Valid</p>
                </div>
              </div>

              <button className="btn-primary w-full py-4 text-lg mb-4 flex items-center justify-center space-x-3">
                <Phone size={20} />
                <span>Contact Seller</span>
              </button>
              <button className="btn-outline w-full py-4 text-lg flex items-center justify-center space-x-3">
                <MessageSquare size={20} />
                <span>Make an Offer</span>
              </button>
            </div>

            {/* Seller Card */}
            <div className="glass-card p-6 flex items-center space-x-4">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl font-heading">
                 {car.seller.name.charAt(0)}
               </div>
               <div>
                 <h4 className="text-xl">{car.seller.name}</h4>
                 <div className="flex items-center space-x-1 text-primary">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold">{car.seller.rating} Rating</span>
                 </div>
                 <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Verified Individual Seller</p>
               </div>
            </div>
          </div>
        </div>

        {/* Specs and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl mb-6 border-l-4 border-primary pl-6">Technical Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{key}</p>
                    <p className="text-lg font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl mb-6 border-l-4 border-primary pl-6">Description</h2>
              <p className="text-gray-400 leading-relaxed text-lg italic">"{car.description}"</p>
            </section>

            <section className="bg-dark-lighter p-8 border border-white border-opacity-5">
               <div className="flex items-center space-x-4 mb-4">
                  <Shield size={32} className="text-primary" />
                  <h3 className="text-2xl">AutoBazaar Promise</h3>
               </div>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                  <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> <span>200-Point Inspection Report</span></li>
                  <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> <span>6-Month Warranty Included</span></li>
                  <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> <span>7-Day Money Back Guarantee</span></li>
                  <li className="flex items-center space-x-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> <span>Free RC Transfer & Documentation</span></li>
               </ul>
            </section>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <section>
            <h2 className="text-4xl mb-10 text-center">Similar <span className="text-primary">Options</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {similarCars.map(c => (
                 <CarCard key={c.id} car={c} isWishlisted={false} onWishlistToggle={() => {}} />
               ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CarDetail;
