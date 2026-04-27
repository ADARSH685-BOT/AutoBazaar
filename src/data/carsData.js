const cars = [
  "Maruti Suzuki WagonR", "Maruti Suzuki Alto K10", "Maruti Suzuki Swift", "Maruti Suzuki Dzire", "Maruti Suzuki Baleno",
  "Maruti Suzuki Vitara Brezza", "Maruti Suzuki Ertiga", "Maruti Suzuki S-Cross", "Maruti Suzuki Celerio", "Maruti Suzuki Ignis",
  "Hyundai Creta", "Hyundai i20", "Hyundai Verna", "Hyundai Venue", "Hyundai Grand i10 Nios",
  "Hyundai Aura", "Hyundai Tucson", "Hyundai Santro", "Tata Nexon", "Tata Punch",
  "Tata Tiago", "Tata Tigor", "Tata Harrier", "Tata Safari", "Tata Altroz",
  "Mahindra Scorpio", "Mahindra XUV700", "Mahindra Bolero", "Mahindra Thar", "Mahindra XUV300",
  "Mahindra KUV100", "Honda City", "Honda Amaze", "Honda Jazz", "Honda WR-V",
  "Toyota Innova Crysta", "Toyota Fortuner", "Toyota Glanza", "Toyota Urban Cruiser", "Kia Seltos",
  "Kia Sonet", "Kia Carens", "Renault Kwid", "Renault Triber", "Renault Kiger",
  "Nissan Magnite", "Ford EcoSport", "Volkswagen Polo", "Skoda Rapid", "MG Hector"
];

const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Jaipur", "Bhopal"];
const fuels = ["Petrol", "Diesel", "CNG"];

export const CARS_DATA = cars.map((name, index) => {
  const brand = name.split(" ")[0];
  const year = Math.floor(Math.random() * (2023 - 2015 + 1)) + 2015;
  const km = Math.floor(Math.random() * (120000 - 10000 + 1)) + 10000;
  const price = Math.floor(Math.random() * (2500000 - 250000 + 1)) + 250000;
  const fuel = fuels[Math.floor(Math.random() * fuels.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  
  return {
    id: index + 1,
    name,
    brand,
    year,
    km,
    price,
    fuel,
    city,
    transmission: Math.random() > 0.5 ? "Manual" : "Automatic",
    owner: ["1st Owner", "2nd Owner"][Math.floor(Math.random() * 2)],
    image: `https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800&q=80&car=${encodeURIComponent(name)}`, // Using a base car image and appending name as query to help unsplash vary if possible, or just a placeholder
    // Alternative: `https://source.unsplash.com/800x600/?${brand},car,${name.split(' ').pop()}`
    // Since Unsplash Source is deprecated, I'll use a more reliable method or just high quality placeholders
    // Actually, I'll use specific car-related images from Unsplash
    description: `This ${year} ${name} is in excellent condition, single owner, and meticulously maintained. Perfect for city driving and long highway trips.`,
    specs: {
      engine: "1.2L Petrol",
      power: "85 bhp",
      torque: "113 Nm",
      mileage: "18.5 kmpl",
      seating: "5 Seater"
    },
    seller: {
      name: "Aditya Sharma",
      phone: "+91 98765 43210",
      rating: 4.8
    }
  };
});
