import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Gauge, Fuel, MapPin, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarCard = ({ car, isWishlisted, onWishlistToggle, onViewDetails }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-dark-lighter border border-white border-opacity-5 overflow-hidden group hover:border-primary transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              onWishlistToggle(car.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isWishlisted ? 'bg-primary text-white' : 'bg-black bg-opacity-40 text-white hover:bg-primary'}`}
          >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button 
             onClick={() => onViewDetails(car)}
             className="w-full py-2 bg-primary text-white font-heading tracking-widest flex items-center justify-center space-x-2"
           >
             <Eye size={18} />
             <span>Quick View</span>
           </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-1">{car.year} Model</p>
            <h3 className="text-xl font-heading tracking-tight group-hover:text-primary transition-colors">{car.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-xl font-heading text-primary">₹{(car.price / 100000).toFixed(2)}L</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-tighter">
            <Gauge size={14} className="text-primary" />
            <span>{car.km.toLocaleString()} KM</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-tighter">
            <Fuel size={14} className="text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-tighter">
            <Calendar size={14} className="text-primary" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-400 uppercase tracking-tighter">
            <MapPin size={14} className="text-primary" />
            <span>{car.city}</span>
          </div>
        </div>

        <Link
          to={`/car/${car.id}`}
          className="block w-full text-center py-3 border border-white border-opacity-10 font-heading tracking-widest hover:bg-white hover:text-dark transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
