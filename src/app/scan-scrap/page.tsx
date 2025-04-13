'use client';

import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function ScanScrapPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Handler for capturing the image
  const handleImageCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Set the captured image
        setShowResults(true); // Display the result section
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger the file input programmatically when "Scan Scrap" is clicked
  const handleScanClick = () => {
    document.getElementById("camera-input")?.click(); // Trigger the file input
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="pt-[140px] px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Scan Your Scrap</h1>
        <p className="text-center text-gray-600 mb-10">
          Upload or scan a photo of your recyclable items for instant AI analysis.
        </p>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-green-500 bg-green-50 rounded-lg p-8 text-center mb-10">
          <label htmlFor="file-upload" className="cursor-pointer block">
            <div className="text-3xl mb-2">☁️</div>
            <p className="text-lg font-semibold text-gray-700">Drag & Drop your image here</p>
            <p className="text-sm text-gray-500 my-1">or</p>
            <div className="inline-block mt-2 px-5 py-2 border border-green-600 text-green-700 rounded-md hover:bg-green-100 transition">
              Browse Files
            </div>
            <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleImageCapture} />
          </label>
        </div>

        {/* Scan Camera Button */}
        <div className="text-center mb-10">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            onClick={handleScanClick}  // Trigger the camera when clicked
          >
            Scan Scrap (Open Camera)
          </button>
          <input
            id="camera-input"
            type="file"
            accept="image/*"
            capture="user"  // Use "user" to specify the front camera (can be changed to "environment" for back camera)
            className="hidden"
            onChange={handleImageCapture} // Handle image capture
          />
        </div>

        {/* Display Image After Capture */}
        {imageSrc && showResults && (
          <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
            <div className="w-full md:w-1/2">
              <Image
                src={imageSrc}
                alt="Captured Scrap"
                width={400}
                height={200}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* AI Analysis Results */}
        {showResults && (
          <div className="bg-white border rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                AI Analysis Results <span className="text-green-600 text-xl">✅</span>
              </h3>
              <div className="space-y-3 text-sm">
                <p><strong>♲ Material Type:</strong> Mixed Plastic</p>
                <p><strong>⚖️ Approx Weight:</strong> 2.5 kg</p>
                <p><strong>💰 Estimated Value:</strong> ₹75.00</p>
              </div>
            </div>
          </div>
        )}

        {/* EcoPoints Message */}
        {showResults && (
          <div className="bg-green-100 border border-green-300 p-4 rounded-md mb-6 text-sm text-green-900 flex items-center gap-3">
            ✅ You will earn <strong>30 EcoPoints</strong> for this scan.
            <span className="text-gray-600">Points will be added after pickup.</span>
          </div>
        )}

        {/* Buttons */}
        {showResults && (
          <div className="flex gap-4 mb-6">
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              Confirm Pickup for this Item
            </button>
            <button
              className="border border-green-700 text-green-700 px-6 py-2 rounded hover:bg-green-50 transition"
              onClick={() => setShowResults(false)}
            >
              Scan Another
            </button>
          </div>
        )}

        {/* Pro Tip */}
        {showResults && (
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 text-sm text-yellow-900 mb-12">
            💡 <strong>Pro Tip:</strong> Separate plastic from paper to get more value.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
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

        <div className="mt-6 text-center text-gray-500 text-sm">
          © 2025 Scrid. All rights reserved.
        </div>
      </footer>
    </>
  );
}
