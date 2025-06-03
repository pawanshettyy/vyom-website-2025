"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-black">
      {/* Animated Glowing Orb Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-700 via-purple-700 to-black opacity-60 blur-3xl shadow-2xl"
          animate={{
            scale: [1, 1.07, 1],
            rotate: [0, 8, -8, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full border-4 border-blue-500/40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            boxShadow: [
              "0 0 60px 20px #3b82f6aa",
              "0 0 120px 40px #a78bfa88",
              "0 0 60px 20px #3b82f6aa",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Slogan */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-center mb-6"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
        }}
      >
        Exploring the Cosmos, Together!
      </motion.h2>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-10 text-6xl md:text-8xl font-extrabold tracking-widest text-white mb-8"
        style={{
          fontFamily: "var(--font-orbitron), sans-serif",
          letterSpacing: "0.2em",
        }}
      >
        VYOM VOYAGE
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-10 text-lg md:text-xl text-gray-200 text-center max-w-2xl"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
        }}
      >
        Vyom Voyage is a passionate team dedicated to unraveling the mysteries of the universe and making space exploration accessible to all. Join us as we journey through the stars, innovate, and inspire the next generation of explorers.
      </motion.p>
    </section>
  );
} 