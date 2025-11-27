"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#062E26] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Company */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-200">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About ABC
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-300 hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/clients" className="text-gray-300 hover:text-white transition">
                Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-200">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products/hybrid-solar-tunnel-dryer" className="text-gray-300 hover:text-white transition">
                Product 1
              </Link>
            </li>
            <li>
              <Link href="/products/scheffler-dish" className="text-gray-300 hover:text-white transition">
                Product 2
              </Link>
            </li>
            <li>
              <Link href="/products/parabolic-cooker" className="text-gray-300 hover:text-white transition">
                Product 3
              </Link>
            </li>
            <li>
              <Link href="/products/solar-concentrator" className="text-gray-300 hover:text-white transition">
                Product 4
              </Link>
            </li>
            <li>
              <Link href="/products/parabolic-trough" className="text-gray-300 hover:text-white transition">
                Product 5
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-400">Get in touch</h3>
          <p className="text-gray-300 opacity-70 leading-relaxed">
            <br />
            Address 1
          </p>

          <div className="flex items-center gap-3 mt-4">
            <FaPhoneAlt />
            {/* <a href="tel:+91xxxxxxxxxx" className="text-gray-300 hover:text-green-300 transition"> */}
              +91xxxxxxxxxx
            {/* </a> */}
          </div>
        </div>

        {/* Contact Us / Social */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-gray-200">Contact us</h3>

          <div className="space-y-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition"
            >
              <FaInstagram size={20} />
              <span>FOLLOW US ON INSTAGRAM</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition"
            >
              <FaYoutube size={20} />
              <span>FOLLOW US ON YOUTUBE</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
            >
              <FaFacebookF size={20} />
              <span>FOLLOW US ON FACEBOOK</span>
            </a>
          </div>
        </div>

      </div>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg hover:bg-green-300 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
