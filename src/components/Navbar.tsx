"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, UserCircle2, LogOut, LogIn } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Domains", href: "/domains" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/yourvyomvoyage", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/vyomvoyage", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@vyomvoyage", label: "YouTube" },
];

// Simulate auth state (replace with real auth logic)
const fakeUser = {
  name: "Vyom User",
  image: null, // or a URL
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<null | typeof fakeUser>(null); // null means signed out
  const [loading, setLoading] = useState(false);

  // Shimmer animation for the brand button
  const shimmerClass =
    "relative inline-block px-6 py-2 rounded-full font-extrabold text-xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-[length:200%_auto] animate-shimmer shadow-lg";

  // Sign in/out handlers (simulate)
  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(fakeUser);
      setLoading(false);
    }, 1000);
  };
  const handleSignOut = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Overlay for mobile drawer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/30 z-40 ${isOpen ? '' : 'pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      {/* Sliding Drawer */}
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: isOpen ? 0 : 300 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-indigo-900/80 to-black/90 backdrop-blur-xl z-50 p-8 flex flex-col gap-8 shadow-2xl"
      >
        <button
          className="self-end mb-8 text-white text-3xl font-bold hover:text-purple-400 transition"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="flex flex-col gap-6 items-start">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-gray-200 hover:text-white font-semibold tracking-wide transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-6 mt-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-700 hover:bg-purple-600 transition-colors text-white"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Floating, glassy, rounded header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl z-50 flex justify-between items-center px-6 py-3 rounded-full bg-black/70 backdrop-blur-lg shadow-xl border border-indigo-900"
      >
        {/* Hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 rounded bg-indigo-700 hover:bg-indigo-800 transition-colors md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
        {/* Center shimmer brand button */}
        <Link href="/" className="flex items-center gap-2 mx-auto">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: [ -10, 10, -10 ], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <Image
              src="/assets/vyom_logo.jpg"
              alt="Vyom Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
          <span className={shimmerClass}>
            Vyom Voyage
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/0 to-white/20 blur-md opacity-60 animate-shimmer" style={{ zIndex: -1 }} />
          </span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Sign In/Out Button & Avatar */}
        <div className="ml-4 flex items-center gap-2">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
              >
                <LogOut className="w-5 h-5" />
                {loading ? "Signing out..." : "Sign Out"}
              </button>
              <div className="ml-2">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-indigo-500"
                  />
                ) : (
                  <UserCircle2 className="w-8 h-8 text-indigo-400" />
                )}
              </div>
            </>
          ) : (
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
            >
              <LogIn className="w-5 h-5" />
              {loading ? "Signing in..." : "Sign In"}
            </button>
          )}
        </div>
      </motion.header>
    </>
  );
}

// Tailwind shimmer animation
// Add this to your tailwind.config.js theme.extend.animation:
// shimmer: "shimmer 2s linear infinite"
// And theme.extend.keyframes:
// shimmer: { to: { backgroundPosition: '200% center' } } 