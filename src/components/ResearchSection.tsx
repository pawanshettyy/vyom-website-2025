'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCard from "@/components/AnimatedCard";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
        >
          Research & Innovation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
        >
          Discover our groundbreaking research initiatives and innovative projects in space exploration
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/research">
            <AnimatedCard delay={0.4} className="h-full">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-white mb-2">Research Projects</h3>
              <p className="text-gray-300">
                Explore our ongoing research projects and scientific contributions to space exploration.
              </p>
            </AnimatedCard>
          </Link>
          <AnimatedCard delay={0.5} className="h-full">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-300">
              Stay tuned for exciting new research initiatives and innovative projects in the pipeline.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
} 