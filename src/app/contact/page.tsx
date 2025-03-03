"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaInstagram, FaLinkedin, FaDiscord, FaSteam } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    technology: "",
    workType: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          reason: "",
          technology: "",
          workType: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message.");
    }
  };

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing! Sadly, our newsletter is currently unavailable.");
  };

  return (
    <main>
      {/* CONTACT FORM SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-gray-700 mb-2">
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a reason</option>
                <option value="general">General Inquiry</option>
                <option value="project">Project Inquiry</option>
                <option value="job">Job Inquiry</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>
            <div>
              <label htmlFor="technology" className="block text-gray-700 mb-2">
                Technology / Tools
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                value={formData.technology}
                onChange={handleChange}
                placeholder="e.g., React, Next.js, Tailwind CSS"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="workType" className="block text-gray-700 mb-2">
                What Kind of Work?
              </label>
              <input
                type="text"
                id="workType"
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                placeholder="e.g., Full-time, freelance, consultation"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* OTHER CONTACT METHODS SECTION */}
      <section id="other-contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Other Ways to Contact Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917875603122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:underline transition-colors"
              aria-label="Contact me on WhatsApp"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp: +91 7875603122</span>
            </a>
            {/* Phone */}
            <a
              href="tel:+917875603122"
              className="flex items-center space-x-2 text-gray-900 hover:underline transition-colors"
              aria-label="Call me on Phone"
            >
              <FaPhone size={20} />
              <span>Phone: +91 7875603122</span>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/_rohan_sarode_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-500 hover:underline transition-colors"
              aria-label="Visit my Instagram"
            >
              <FaInstagram size={20} />
              <span>@_rohan_sarode_</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rohan-sarode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-700 hover:underline transition-colors"
              aria-label="Visit my LinkedIn"
            >
              <FaLinkedin size={20} />
              <span>rohan-sarode</span>
            </a>
            {/* Discord */}
           
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
