"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";

const domains = [
  {
    title: "Software",
    description: "Software development and systems engineering for space applications",
    icon: "💻",
    sections: [
      {
        title: "Overview",
        content: "The Software domain at Vyom Voyage is responsible for developing and maintaining the software systems that power our space missions. This includes everything from flight control software to ground station operations.",
      },
      {
        title: "Key Responsibilities",
        content: "Our software team works on various aspects including embedded systems, real-time processing, data analysis, and mission control software. We ensure the reliability and efficiency of all software systems used in our space missions.",
      },
      {
        title: "Technologies",
        content: "We work with a wide range of technologies including C++, Python, MATLAB, and various embedded systems platforms. Our team is constantly exploring new technologies to improve our software capabilities.",
      },
    ],
  },
  {
    title: "Mechanical",
    description: "Design and development of mechanical systems for space applications",
    icon: "⚙️",
    sections: [
      {
        title: "Overview",
        content: "The Mechanical domain focuses on the design and development of mechanical systems for our space missions. This includes structural design, thermal management, and propulsion systems.",
      },
      {
        title: "Key Responsibilities",
        content: "Our mechanical team is responsible for ensuring the structural integrity and thermal management of our spacecraft. They work on everything from structural analysis to thermal protection systems.",
      },
      {
        title: "Technologies",
        content: "We use advanced CAD software, finite element analysis tools, and various simulation platforms to design and test our mechanical systems.",
      },
    ],
  },
  {
    title: "Telecommunication",
    description: "Communication systems and protocols for space missions",
    icon: "📡",
    sections: [
      {
        title: "Overview",
        content: "The Telecommunication domain handles all aspects of communication between our spacecraft and ground stations. This includes signal processing, antenna design, and communication protocols.",
      },
      {
        title: "Key Responsibilities",
        content: "Our telecommunication team ensures reliable communication links between our spacecraft and ground stations. They work on antenna design, signal processing, and communication protocols.",
      },
      {
        title: "Technologies",
        content: "We work with various communication protocols, signal processing techniques, and antenna design tools to ensure reliable communication in space.",
      },
    ],
  },
  {
    title: "Electrical",
    description: "Power systems and electrical engineering for space vehicles",
    icon: "⚡",
    sections: [
      {
        title: "Overview",
        content: "The Electrical domain is responsible for the power systems and electrical components of our spacecraft. This includes power generation, distribution, and management systems.",
      },
      {
        title: "Key Responsibilities",
        content: "Our electrical team ensures reliable power generation and distribution throughout our spacecraft. They work on solar panels, batteries, and power management systems.",
      },
      {
        title: "Technologies",
        content: "We work with various power generation technologies, including solar panels and batteries, as well as power management systems to ensure efficient power usage.",
      },
    ],
  },
  {
    title: "GN & C",
    description: "Guidance, Navigation, and Control systems for space vehicles",
    icon: "🎯",
    sections: [
      {
        title: "Overview",
        content: "The GN&C domain is responsible for the guidance, navigation, and control systems of our spacecraft. This includes attitude control, orbit determination, and trajectory planning.",
      },
      {
        title: "Key Responsibilities",
        content: "Our GN&C team ensures precise control of our spacecraft's attitude and orbit. They work on control algorithms, sensor systems, and navigation software.",
      },
      {
        title: "Technologies",
        content: "We use various sensors, control algorithms, and navigation software to ensure precise control of our spacecraft's position and orientation.",
      },
    ],
  },
  {
    title: "Instrumentation",
    description: "Development of instruments and sensors for space research",
    icon: "🔬",
    sections: [
      {
        title: "Overview",
        content: "The Instrumentation domain focuses on the development of scientific instruments and sensors for our space missions. This includes payload design, sensor calibration, and data acquisition systems.",
      },
      {
        title: "Key Responsibilities",
        content: "Our instrumentation team develops and calibrates scientific instruments and sensors for our space missions. They work on payload design, sensor calibration, and data acquisition systems.",
      },
      {
        title: "Technologies",
        content: "We work with various sensors, data acquisition systems, and calibration tools to ensure accurate measurements in space.",
      },
    ],
  },
];

export default function DomainsPage() {
  return (
    <main className="min-h-screen text-white font-sans overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
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
          Our Domains
        </motion.h1>
      </section>

      {/* Domains Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 text-center mb-12"
          >
            Explore the various technical domains that make up our space exploration team
          </motion.p>
          <div className="space-y-16">
            {domains.map((domain, domainIdx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + domainIdx * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{domain.icon}</span>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {domain.title}
                  </h2>
                </div>
                <p className="text-gray-300 mb-8">{domain.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {domain.sections.map((section, sectionIdx) => (
                    <AnimatedCard
                      key={section.title}
                      delay={0.4 + domainIdx * 0.1 + sectionIdx * 0.1}
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                      <p className="text-gray-300">{section.content}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 