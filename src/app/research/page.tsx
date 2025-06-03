"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCard from "@/components/AnimatedCard";

// Consider creating or using a carousel component here, e.g., an Embla Carousel or a custom one with Framer Motion.
// import ResearchPaperCarousel from "@/components/ResearchPaperCarousel";

export default function Research() {
  return (
    <main className="min-h-screen text-white font-sans overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute inset-0 z-0"
          style={{ background: `url('/assets/Screenshot 2025-06-02 051317.png') center/cover no-repeat` }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center z-10"
        >
          Research
        </motion.h1>
      </section>

      {/* Research Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 text-center mb-12"
          >
            Explore our research initiatives and scientific contributions to space exploration.
          </motion.p>
          <div className="space-y-8">
            <AnimatedCard delay={0.3}>
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300">
                We&apos;re currently working on exciting research projects. Stay tuned for updates!
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </main>
  );
} 