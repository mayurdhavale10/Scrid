'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-[100px]">
      <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Scrid Logo"
            width={90}
            height={40}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* RIGHT: Navigation Links and Buttons */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-800 hover:text-green-600">Home</Link>
            <Link href="/scan-scrap" className="text-gray-800 hover:text-green-600">Scan Scrap</Link>
            <Link href="/schedule-pickup" className="text-gray-800 hover:text-green-600">Schedule Pickup</Link>
            <Link href="/rewards" className="text-gray-800 hover:text-green-600">Rewards</Link>
            <Link href="/impact" className="text-gray-800 hover:text-green-600">Impact</Link>
            <Link href="/partners" className="text-gray-800 hover:text-green-600">Partners</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link href="/login">
              <button className="px-4 py-2 text-sm border border-green-700 text-green-700 rounded hover:bg-green-50 transition">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 text-sm bg-green-700 text-white rounded hover:bg-green-800 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}  


