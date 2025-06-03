'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";

const domains = [
  {
    title: "Software",
    description: "Software development and systems engineering for space applications",
    icon: "💻",
    slug: "software",
  },
  {
    title: "Mechanical",
    description: "Design and development of mechanical systems for space applications",
    icon: "⚙️",
    slug: "mechanical",
  },
  {
    title: "Telecommunication",
    description: "Communication systems and protocols for space missions",
    icon: "📡",
    slug: "telecommunication",
  },
  {
    title: "Electrical",
    description: "Power systems and electrical engineering for space vehicles",
    icon: "⚡",
    slug: "electrical",
  },
  {
    title: "GN & C",
    description: "Guidance, Navigation, and Control systems for space vehicles",
    icon: "🎯",
    slug: "gnc",
  },
  {
    title: "Instrumentation",
    description: "Development of instruments and sensors for space research",
    icon: "🔬",
    slug: "instrumentation",
  },
];

export default function DomainsSection() {
  return (
    <section id="domains" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
        >
          Our Domains
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
        >
          Explore the various technical domains that make up our space exploration team
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <Link key={domain.slug} href={`/domains/${domain.slug}`}>
              <AnimatedCard delay={0.4 + idx * 0.1} className="bg-[#181824] border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col items-center h-full">
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
                <p className="text-gray-300">{domain.description}</p>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 