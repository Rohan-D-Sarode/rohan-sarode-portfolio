"use client";
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { FaWhatsapp, FaPhone, FaInstagram, FaLinkedin, FaDiscord, FaSteam } from 'react-icons/fa';

function Footer() {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! Sadly, our newsletter is currently unavailable.");
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 mt-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Me</h3>
            <p className="text-sm leading-relaxed">
              Passionate about creating modern, user-friendly web experiences. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex flex-col gap-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917875603122"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center space-x-2 text-green-500 hover:underline transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp: +91 7875603122</span>
              </a>
              {/* Phone */}
              <a
                href="tel:+917875603122"
                aria-label="Phone"
                className="flex items-center space-x-2 text-gray-900 hover:underline transition-colors"
              >
                <FaPhone size={20} />
                <span>Phone: +91 7875603122</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/_rohan_sarode_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center space-x-2 text-pink-500 hover:underline transition-colors"
              >
                <FaInstagram size={20} />
                <span>@_rohan_sarode_</span>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rohan-sarode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center space-x-2 text-blue-700 hover:underline transition-colors"
              >
                <FaLinkedin size={20} />
                <span>rohan-sarode</span>
              </a>
              {/* Discord */}
              <a
                href="https://discord.gg/shusasuke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="flex items-center space-x-2 text-indigo-500 hover:underline transition-colors"
              >
                <FaDiscord size={20} />
                <span>shusasuke</span>
              </a>
              {/* Steam */}
              <a
                href="https://steamcommunity.com/profiles/76561198322359320/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Steam"
                className="flex items-center space-x-2 text-gray-500 hover:underline transition-colors"
              >
                <FaSteam size={20} />
                <span>shusasuke</span>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest updates and news straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rohan-D-Sarode_Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
