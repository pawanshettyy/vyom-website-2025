"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Linkedin, Youtube } from "lucide-react";
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

export default function HeroHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-indigo-900/90 to-black/95 backdrop-blur-xl z-50 p-8 flex flex-col gap-8 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="self-end mb-8 text-white text-3xl font-bold hover:text-purple-400 transition"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
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
      </div>

      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between z-50 pointer-events-none py-3">
        {/* Left: Hamburger */}
        <div className="pl-8 pointer-events-auto">
          <button
            className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg hover:bg-indigo-700 transition"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="text-white w-7 h-7" />
          </button>
        </div>
        {/* Center: Brand */}
        <div className="flex-1 flex justify-center pointer-events-auto">
          <Link href="/" className="focus:outline-none">
            <div
              className="flex items-center gap-2 px-8 py-2 rounded-full bg-black/90 shadow-xl border border-gray-800 font-bold text-white text-xl md:text-2xl cursor-pointer hover:bg-black/80 transition"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              <Image
                src="/assets/vyom_logo.jpg"
                alt="Vyom Logo"
                width={32}
                height={32}
                className="rounded-full bg-white"
              />
              Vyom Voyage
            </div>
          </Link>
        </div>
        {/* Right: Sign In */}
        <div className="pr-8 pointer-events-auto">
          <Link href="/signin">
            <button className="px-7 py-2 rounded-full bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition text-lg">
              SIGN IN
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}