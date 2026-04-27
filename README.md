<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=FF6B00&height=200&section=header&text=AutoBazaar%20India&fontSize=60&fontColor=F5F0E8&fontAlignY=38&desc=India's%20Most%20Trusted%20Car%20Marketplace&descAlignY=58&descColor=F5F0E8&animation=fadeIn" width="100%"/>

<br/>

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-FF6B00?style=for-the-badge)](LICENSE)

<br/>

```
🚗  BUY  •  💰  SELL  •  🔧  SERVICE  —  ALL IN ONE PLACE
```

<br/>

> **AutoBazaar India** is a premium, dark-luxury React frontend application for buying, selling, and servicing pre-owned Indian cars. Featuring 50+ Indian car listings, cinematic UI, full filter support, multi-step sell wizard, and a service booking system — all client-side, zero backend needed.

<br/>

[🚀 Live Demo](https://github.com/ADARSH685-BOT/AutoBazaar) · [🐛 Report Bug](https://github.com/ADARSH685-BOT/AutoBazaar/issues) · [✨ Request Feature](https://github.com/ADARSH685-BOT/AutoBazaar/issues)

</div>

---

## 📸 Preview

<div align="center">

| Home Page | Buy Cars | Service Center |
|:---------:|:--------:|:--------------:|
| ![Home](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=🏠+Home+Page) | ![Buy](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=🚗+Buy+Cars) | ![Service](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=🔧+Service) |

| Sell Wizard | Car Detail | Wishlist |
|:-----------:|:----------:|:--------:|
| ![Sell](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=💰+Sell+Wizard) | ![Detail](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=📋+Car+Detail) | ![Wishlist](https://via.placeholder.com/280x160/0D0D0D/FF6B00?text=❤️+Wishlist) |

</div>

---

## ✨ Features

### 🏠 Home Page
- Cinematic hero section with animated background glow
- Smart search bar with **Brand**, **City**, and **Budget** filters
- Featured car listings with real-time search
- Trust badges — *10 Lakh+ Happy Customers*, *50,000+ Cars Listed*, *Pan India Service*
- Live statistics counter section

### 🚗 Buy a Car
- **50 Indian cars** — WagonR, Alto, Swift, Creta, Nexon, Scorpio, Thar, XUV700, Fortuner & more
- Advanced sidebar filters:
  - Brand / Model
  - Price Range (₹2.5L – ₹25L)
  - Fuel Type (Petrol / Diesel / CNG / Electric)
  - Year of Manufacture
  - City (Delhi, Mumbai, Bangalore, Pune, Hyderabad, Chennai, Jaipur, Bhopal)
  - Transmission (Manual / Automatic)
- **Wishlist toggle** — save favourite cars with heart icon (state-persisted)
- Hover zoom & card lift animations on every car card
- Grid / List view toggle

### 💰 Sell Your Car
- **Multi-step form wizard** with smooth transitions:
  - Step 1 — Car Details (Brand, Model, Year, KM, Fuel, Color, City)
  - Step 2 — Photo Upload (drag-and-drop, up to 10 images)
  - Step 3 — Set Price (expected price + negotiable toggle)
  - Step 4 — Contact Info (Name, Phone, Email)
- Animated progress bar
- Final confirmation screen with animated checkmark ✅

### 🔧 Service Center
8 service packages with icons and pricing:

| Service | Price |
|---------|-------|
| 🔧 Basic Service (Oil change, Filter) | ₹999 |
| ⚙️ Full Service (Engine check, all fluids) | ₹2,499 |
| 🛞 Tyre & Wheel Alignment | ₹1,299 |
| 🧼 Car Detailing & Wash | ₹799 |
| 🚗 AC Service & Repair | ₹1,799 |
| 🔋 Battery Replacement | ₹3,999 |
| 🚦 Denting & Painting | ₹4,999 |
| 🔍 Pre-Purchase Inspection | ₹599 |

- **Book Service Appointment** form with date picker, city selector, and car model input

### 📋 Car Detail Page
- Full-screen image gallery with thumbnails
- Complete specs table (Year, KM, Fuel, Transmission, Color, City)
- Masked seller contact info
- "Contact Seller" & "Make Offer" CTAs
- Similar cars recommendation section

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary Color** | `#FF6B00` (Saffron Orange) |
| **Background** | `#0D0D0D` (Deep Charcoal) |
| **Accent** | `#F5F0E8` (Ivory White) |
| **Heading Font** | Bebas Neue |
| **Body Font** | DM Sans |
| **Theme** | Dark Luxury |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js v18+** and **npm** installed.

```bash
node --version   # v18+
npm --version    # v9+
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ADARSH685-BOT/AutoBazaar.git

# 2. Navigate into the project folder
cd AutoBazaar

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **@tailwindcss/postcss** | Tailwind PostCSS plugin (v4) |
| **Framer Motion** | Animations & transitions |
| **React Router DOM** | Client-side routing |
| **Lucide React** | Icon library |
| **clsx + tailwind-merge** | Conditional class utilities |

---

## 📁 Project Structure

```
AutoBazaar/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism navbar
│   │   ├── Footer.jsx          # Multi-column footer with social links
│   │   └── CarCard.jsx         # Premium car card with wishlist toggle
│   ├── data/
│   │   └── carsData.js         # 50 Indian cars — hardcoded dataset
│   ├── pages/
│   │   ├── Home.jsx            # Hero + search + featured section
│   │   ├── Buy.jsx             # Filter sidebar + car grid
│   │   ├── Sell.jsx            # Multi-step sell wizard
│   │   ├── Service.jsx         # Service packages + booking form
│   │   └── CarDetail.jsx       # Full car detail view
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + Google Fonts + globals
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚘 Cars in the Dataset

<details>
<summary>Click to see all 50 Indian cars →</summary>

| # | Car | Brand |
|---|-----|-------|
| 1 | WagonR | Maruti Suzuki |
| 2 | Alto K10 | Maruti Suzuki |
| 3 | Swift | Maruti Suzuki |
| 4 | Dzire | Maruti Suzuki |
| 5 | Baleno | Maruti Suzuki |
| 6 | Vitara Brezza | Maruti Suzuki |
| 7 | Ertiga | Maruti Suzuki |
| 8 | S-Cross | Maruti Suzuki |
| 9 | Celerio | Maruti Suzuki |
| 10 | Ignis | Maruti Suzuki |
| 11 | Creta | Hyundai |
| 12 | i20 | Hyundai |
| 13 | Verna | Hyundai |
| 14 | Venue | Hyundai |
| 15 | Grand i10 Nios | Hyundai |
| 16 | Aura | Hyundai |
| 17 | Tucson | Hyundai |
| 18 | Santro | Hyundai |
| 19 | Nexon | Tata |
| 20 | Punch | Tata |
| 21 | Tiago | Tata |
| 22 | Tigor | Tata |
| 23 | Harrier | Tata |
| 24 | Safari | Tata |
| 25 | Altroz | Tata |
| 26 | Scorpio | Mahindra |
| 27 | XUV700 | Mahindra |
| 28 | Bolero | Mahindra |
| 29 | Thar | Mahindra |
| 30 | XUV300 | Mahindra |
| 31 | KUV100 | Mahindra |
| 32 | City | Honda |
| 33 | Amaze | Honda |
| 34 | Jazz | Honda |
| 35 | WR-V | Honda |
| 36 | Innova Crysta | Toyota |
| 37 | Fortuner | Toyota |
| 38 | Glanza | Toyota |
| 39 | Urban Cruiser | Toyota |
| 40 | Seltos | Kia |
| 41 | Sonet | Kia |
| 42 | Carens | Kia |
| 43 | Kwid | Renault |
| 44 | Triber | Renault |
| 45 | Kiger | Renault |
| 46 | Magnite | Nissan |
| 47 | EcoSport | Ford |
| 48 | Polo | Volkswagen |
| 49 | Rapid | Skoda |
| 50 | Hector | MG |

</details>

---

## 🤝 Contributing

Contributions are what make open source amazing! Any contributions are **greatly appreciated**.

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m 'Add some AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 🐛 Known Issues & Fixes

> **Tailwind CSS v4 PostCSS Error?**
>
> Run this fix:
> ```bash
> npm uninstall tailwindcss
> npm install tailwindcss @tailwindcss/postcss
> ```
> Then update `postcss.config.js`:
> ```js
> export default { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } }
> ```
> And `index.css`: replace `@tailwind` directives with `@import "tailwindcss";`

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/ADARSH685-BOT" width="100" style="border-radius:50%;border:3px solid #FF6B00"/>

### **Adarsh Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-ADARSH685--BOT-181717?style=for-the-badge&logo=github)](https://github.com/ADARSH685-BOT)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/adarsh-kumar)

*Built with passion for India's automotive community 🚗🇮🇳*

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=FF6B00&height=100&section=footer&text=Made%20with%20❤️%20by%20Adarsh%20Kumar&fontSize=18&fontColor=F5F0E8&fontAlignY=65" width="100%"/>

⭐ **Star this repo** if you found it helpful!

</div>
