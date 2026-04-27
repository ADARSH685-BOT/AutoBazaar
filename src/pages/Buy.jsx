import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CARS_DATA } from '../data/carsData';
import CarCard from '../components/CarCard';
import { Filter, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Buy = () => {
  const [searchParams] = useSearchParams();
  const [wishlist, setWishlist] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [filters, setFilters] = useState({
    brand: searchParams.get('brand') || '',
    city: searchParams.get('city') || '',
    fuel: '',
    year: '',
    minPrice: '',
    maxPrice: searchParams.get('budget') || '',
    transmission: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const brands = Array.from(new Set(CARS_DATA.map(car => car.brand)));
  const cities = Array.from(new Set(CARS_DATA.map(car => car.city)));
  const years = Array.from(new Set(CARS_DATA.map(car => car.year))).sort((a, b) => b - a);

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter(car => {
      const matchBrand = !filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase());
      const matchCity = !filters.city || car.city === filters.city;
      const matchFuel = !filters.fuel || car.fuel === filters.fuel;
      const matchYear = !filters.year || car.year.toString() === filters.year;
      const matchMinPrice = !filters.minPrice || car.price >= parseInt(filters.minPrice);
      const matchMaxPrice = !filters.maxPrice || car.price <= parseInt(filters.maxPrice);
      const matchTransmission = !filters.transmission || car.transmission === filters.transmission;
      const matchSearch = !searchTerm || car.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchBrand && matchCity && matchFuel && matchYear && matchMinPrice && matchMaxPrice && matchTransmission && matchSearch;
    });
  }, [filters, searchTerm]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const resetFilters = () => {
    setFilters({
      brand: '',
      city: '',
      fuel: '',
      year: '',
      minPrice: '',
      maxPrice: '',
      transmission: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="pt-32 pb-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <h1 className="text-5xl mb-2">Inventory</h1>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Showing {filteredCars.length} Premium Cars Across India</p>
          </div>
          
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search by model name..."
                className="input-field w-full pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden btn-primary p-3"
            >
              <Filter size={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 space-y-8 sticky top-32 h-fit">
            <div className="glass-card p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl">Filters</h3>
                <button onClick={resetFilters} className="text-xs text-primary uppercase tracking-widest hover:underline">Reset All</button>
              </div>

              <div className="space-y-6">
                {/* Brand */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Brand</label>
                  <select
                    className="input-field w-full appearance-none"
                    value={filters.brand}
                    onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                  >
                    <option value="">All Brands</option>
                    {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">City</label>
                  <select
                    className="input-field w-full appearance-none"
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                  >
                    <option value="">All Cities</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                {/* Fuel */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Fuel Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Petrol', 'Diesel', 'CNG'].map(fuel => (
                      <button
                        key={fuel}
                        onClick={() => setFilters({ ...filters, fuel: filters.fuel === fuel ? '' : fuel })}
                        className={`text-xs py-2 border transition-all ${filters.fuel === fuel ? 'bg-primary border-primary text-white' : 'border-white border-opacity-10 text-gray-400 hover:border-primary'}`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Price Range</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="input-field w-full text-sm"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    />
                    <span className="text-gray-600">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="input-field w-full text-sm"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Year</label>
                  <select
                    className="input-field w-full appearance-none"
                    value={filters.year}
                    onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                  >
                    <option value="">All Years</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Transmission</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Manual', 'Automatic'].map(t => (
                      <button
                        key={t}
                        onClick={() => setFilters({ ...filters, transmission: filters.transmission === t ? '' : t })}
                        className={`text-xs py-2 border transition-all ${filters.transmission === t ? 'bg-primary border-primary text-white' : 'border-white border-opacity-10 text-gray-400 hover:border-primary'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="flex-1">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredCars.map((car, index) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CarCard
                        car={car}
                        isWishlisted={wishlist.includes(car.id)}
                        onWishlistToggle={toggleWishlist}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-40 glass-card">
                <Car size={64} className="mx-auto text-gray-700 mb-6" />
                <h3 className="text-3xl mb-2">No Cars Found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your filters or search terms.</p>
                <button onClick={resetFilters} className="btn-primary">Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black bg-opacity-90 lg:hidden p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={32} /></button>
            </div>

            <div className="space-y-10">
               {/* Reuse the filter logic here or similar UI */}
               {/* Brand */}
               <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Brand</label>
                  <div className="grid grid-cols-2 gap-4">
                    {brands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setFilters({ ...filters, brand: filters.brand === brand ? '' : brand })}
                        className={`text-sm py-4 border transition-all ${filters.brand === brand ? 'bg-primary border-primary text-white' : 'border-white border-opacity-10 text-gray-400'}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="btn-primary w-full py-5 text-xl"
                >
                  Show {filteredCars.length} Cars
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Buy;
