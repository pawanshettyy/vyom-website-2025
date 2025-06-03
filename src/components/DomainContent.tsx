'use client';

import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

type DomainSection = {
  title: string;
  content: string;
};

type DomainData = {
  title: string;
  description: string;
  sections: DomainSection[];
};

type DomainContentProps = {
  domain: DomainData;
};

export default function DomainContent({ domain }: DomainContentProps) {
  if (!domain) {
    return (
      <main className="min-h-screen text-white font-sans overflow-x-hidden pt-20">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <AnimatedCard delay={0.2}>
            <h1 className="text-4xl font-bold text-center mb-8">Domain Not Found</h1>
            <p className="text-center text-gray-300">The requested domain does not exist.</p>
          </AnimatedCard>
        </div>
      </main>
    );
  }

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
          {domain.title}
        </motion.h1>
      </section>

      {/* Domain Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 text-center mb-12"
          >
            {domain.description}
          </motion.p>
          <div className="space-y-8">
            {domain.sections.map((section, idx) => (
              <AnimatedCard key={section.title} delay={0.3 + idx * 0.1}>
                <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                <p className="text-gray-300">{section.content}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 