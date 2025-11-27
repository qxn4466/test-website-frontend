"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-green-700 font-bold border-b-2 border-green-700 pb-1"
      : "text-gray-700 hover:text-green-700 transition";

  return (
    <nav className="w-full bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          Test Website
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-green-700 focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/" className={linkClass("/")}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={linkClass("/about")}>About Us</Link>
          </li>
          <li>
            <Link href="/our-clients" className={linkClass("/our-clients")}>Our Clients</Link>
          </li>
          <li>
            <Link href="/contact-us" className={linkClass("/contact-us")}>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            <li>
              <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/our-clients" className={linkClass("/our-clients")} onClick={() => setIsOpen(false)}>
                Our Clients
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={linkClass("/contact-us")} onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
