"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg" aria-label="Primary Navigation">
      <div className="container mx-auto px-4 py-7 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-1200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded hover:text-blue-900 transition-colors"
        >
          Rohan-D-Sarode_Portfolio
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-xl">
          <li>
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-900 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2 hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 transition-all duration-300">
          <li>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block px-4 py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-3 text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}