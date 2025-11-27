"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          Test Website
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700 transition"
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700 transition"
              }
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/our-clients"
              className={
                pathname === "/our-clients"
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700 transition"
              }
            >
              Our Clients
            </Link>
          </li>

          <li>
            <Link
              href="/contact-us"
              className={
                pathname === "/contact-us"
                  ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700 transition"
              }
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
