"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

export default function AboutUs() {
  // Placeholder data for About Us sections
  const aboutItems = [
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
  ];

  // Placeholder data for Team Members
  const teamMembers = [
    { name: "John Doe", role: "Team Lead", icon: "👨‍🚀" },
    { name: "Jane Smith", role: "Technical Lead", icon: "👩‍🚀" },
    { name: "Mike Johnson", role: "Research Lead", icon: "🧑‍🚀" },
    { name: "Sarah Wilson", role: "Operations Lead", icon: "👩‍🚀" },
    // Add more team members as needed
  ];

  // Placeholder data for FAQ items
  const faqItems = [
    {
      question: "What is Vyom Voyage?",
      answer: "Vyom Voyage is a team of passionate space enthusiasts dedicated to exploring the mysteries of the universe and making space exploration accessible to everyone.",
    },
    {
      question: "How can I join Vyom Voyage?",
      answer: "We are always looking for passionate individuals to join our team. Please visit our Contact Us page to get in touch with us.",
    },
    {
      question: "What projects does Vyom Voyage work on?",
      answer: "We work on a variety of projects, including satellite development, space robotics, and astronomy research. Visit our Research page to learn more.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <main className="min-h-screen text-white font-sans overflow-x-hidden">
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
          About Us
        </motion.h1>
      </section>

      {/* About Vyom Voyage Section */}
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
            {aboutItems.map((item, idx) => (
              <AnimatedCard key={item.title} delay={0.4 + idx * 0.1}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
          >
            Meet the Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
          >
            Meet the passionate individuals who make Vyom Voyage possible.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <AnimatedCard key={member.name} delay={0.4 + idx * 0.1}>
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqItems.map((faq, idx) => (
              <AnimatedCard key={idx} delay={0.4 + idx * 0.1}>
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 