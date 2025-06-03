'use client';

import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
        >
          About Vyom Voyage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
        >
          We are a team of passionate space enthusiasts dedicated to exploring the mysteries of the universe and making space exploration accessible to everyone.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description: "To inspire and educate the next generation of space explorers through innovative projects and research.",
              icon: "🚀",
            },
            {
              title: "Our Vision",
              description: "A world where space exploration is accessible to all, and humanity's presence extends beyond Earth.",
              icon: "🌌",
            },
            {
              title: "Our Values",
              description: "Innovation, collaboration, and a relentless pursuit of knowledge drive everything we do.",
              icon: "💫",
            },
          ].map((item, idx) => (
            <AnimatedCard key={item.title} delay={0.4 + idx * 0.1}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
} 