'use client';

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
        >
          Have questions about our projects or want to collaborate? We&apos;d love to hear from you!
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "contact@vyomvoyage.com",
              link: "mailto:contact@vyomvoyage.com",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+91 1234567890",
              link: "tel:+911234567890",
            },
            {
              icon: MapPin,
              title: "Location",
              content: "Mumbai, India",
              link: "https://maps.google.com/?q=Mumbai,India",
            },
          ].map((item, idx) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedCard delay={0.4 + idx * 0.1} className="h-full">
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.content}</p>
              </AnimatedCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 