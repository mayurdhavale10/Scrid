'use client';

import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [showCoins, setShowCoins] = useState(false);

  const handleDustbinClick = () => {
    setShowCoins(true);
    setTimeout(() => setShowCoins(false), 4000); // Reset after 4 sec
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="pt-[140px] px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between min-h-[calc(100vh-140px)]">
        <div className="w-full md:w-1/2 md:pr-10">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-snug mb-6 break-words">
            Recycle Smart.<br />
            Earn Smarter.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Turn your waste into rewards while saving the planet. Join thousands
            of eco-warriors making a difference, one recycling action at a time.
          </p>

          <div className="flex gap-6 mb-24">
            <button className="bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition">
              Start Recycling
            </button>
            <button className="border border-green-700 text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-green-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Dustbin & Coin Animation */}
        <div className="w-full md:w-[420px] h-[300px] mt-10 md:mt-0 relative flex items-center justify-center overflow-hidden">
          <motion.div
            onClick={handleDustbinClick}
            className="cursor-pointer rounded-xl border border-dashed border-gray-300 bg-gray-100 w-full h-full flex items-center justify-center relative"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence>
              {!showCoins && (
                <motion.div
                  key="dustbin"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/dustbin.png"
                    alt="Recycling Illustration"
                    width={220}
                    height={280}
                    className="object-contain"
                  />
                </motion.div>
              )}

              {showCoins && (
                <motion.div
                  key="coins"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-wrap justify-center items-start pointer-events-none"
                >
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="text-yellow-400 text-xl absolute"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 400, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: i * 0.05 }}
                      style={{ left: `${Math.random() * 100}%` }}
                    >
                      💰
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Feature Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 px-4 max-w-7xl mx-auto">
        {[{
          icon: "/upload.png",
          title: "Scan & Identify",
          desc: "Upload photos of your scrap for instant AI-powered identification and pricing",
          link: "Upload Now →",
        },
        {
          icon: "/star.png",
          title: "Collect EcoPoints",
          desc: "Convert your recycling actions into points and unlock exciting rewards",
          link: "View Rewards →",
        },
        {
          icon: "/earth.png",
          title: "See Your Impact",
          desc: "Track your contribution to environmental conservation in real-time",
          link: "Check Impact →",
        }].map((card, idx) => (
          <div key={idx} className="bg-green-100 p-6 rounded-lg shadow-md">
            <img src={card.icon} alt="Icon" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">{card.title}</h3>
            <p className="text-green-800 text-sm mb-4">{card.desc}</p>
            <a href="#" className="text-green-900 font-medium hover:underline">
              {card.link}
            </a>
          </div>
        ))}
      </section>

      {/* Our Collective Impact */}
      <section className="max-w-7xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Collective Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[["🌲", "1,234", "Trees Preserved"],
            ["🌍", "50,000", "kg CO₂ Reduced"],
            ["♻️", "100,000", "kg Waste Recycled"],
            ["⭐", "500,000", "EcoPoints Earned"]].map(([icon, value, label], i) => (
              <div key={i}>
                <div className="text-green-700 text-4xl">{icon}</div>
                <div className="text-xl font-bold">{value}</div>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Top Recyclers */}
      <section className="max-w-7xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-2xl font-bold mb-10">Top Recyclers</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((rank, index) => (
            <div key={rank} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className={`text-${rank === 1 ? 'yellow' : 'gray'}-500 font-bold`}>{rank}</span>
                Eco Warrior {rank}
              </span>
              <span className="text-sm text-gray-600">{1000 - index * 100} points 🌟</span>
            </div>
          ))}
        </div>
      </section>

      {/* Redeem & Eat */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-xl font-bold text-center mb-6">Redeem & Eat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(num => (
            <div key={num} className="bg-white rounded-lg shadow p-4">
              <img src={`/cafe${num}.jpg`} alt={`Eco Cafe ${num}`} className="rounded mb-2" />
              <h3 className="text-sm font-semibold">Eco Cafe {num}</h3>
              <p className="text-xs text-gray-600 mb-2">Redeem your points for delicious meals</p>
              <div className="text-xs text-green-700 font-semibold">500 points</div>
              <button className="mt-2 text-sm px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800">
                Redeem
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Image src="/logo.png" alt="Scrid Logo" width={100} height={50} className="mb-4" />
            <h3 className="text-lg font-bold mb-2">Scrid</h3>
            <p className="text-sm text-gray-300">
              Making recycling rewarding for everyone while saving our planet.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-300">📍 Kalyan, India</p>
            <p className="text-sm text-gray-300">✉️ helloscrid@gmail.com</p>
            <p className="text-sm text-gray-300">📞 +91 9372652742</p>
          </div>

          <div className="bg-green-100 p-4 rounded-md">
            <h4 className="font-semibold text-gray-800 mb-2">Newsletter</h4>
            <p className="text-sm text-gray-700 mb-3">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Write email"
                className="w-full px-3 py-2 text-sm text-gray-800 bg-white rounded-l focus:outline-none"
              />
              <button className="px-4 py-2 bg-green-700 text-white text-sm rounded-r hover:bg-green-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-white text-2xl">
          <span title="Instagram">📷</span>
          <span title="LinkedIn">💼</span>
          <span title="Twitter">🐦</span>
          <span title="Facebook">📘</span>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">© 2025 Scrid. All rights reserved.</div>
      </footer>
    </>
  );
}
