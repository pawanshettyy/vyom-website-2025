"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react"; // Corrected import for Github
import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/vyomvoyage", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/vyomvoyage", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/vyomvoyage", label: "GitHub" },
    // Add other social links as needed
  ];

  const workLinks = [
    { name: "Research", href: "/research" },
    { name: "Domains", href: "/domains" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    // Add other relevant links
  ];

  const [formData, setFormData] = useState({
    name: "",
    suggestion: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send to API route)
    console.log("Footer form submitted:", formData);
    // You might want to add a success/error message or clear the form
    alert("Suggestion submitted!"); // Placeholder alert
    setFormData({ name: "", suggestion: "" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-900/30 bg-opacity-30 to-black text-gray-400">
      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Vyom Voyage Info */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Vyom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Voyage</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Exploring the cosmos, one mission at a time. Join us on our journey through space and beyond.
            </motion.p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors hover:scale-110 duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Links</span>
            </motion.h2>
            <ul className="space-y-2">
              {workLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Suggestions Form */}
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4 text-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Give <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Suggestions</span>
            </motion.h2>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div>
                {/* Input for Name */}
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                {/* Textarea for Suggestions */}
                <textarea
                  placeholder="Suggestions"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleInputChange}
                  rows={4} // Adjusted rows for better appearance in footer
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Send
              </button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {currentYear} Vyom Voyage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 