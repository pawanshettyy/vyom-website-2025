"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-visible bg-black pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4">
      {/* Animated Glowing Orb Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-br from-blue-800 via-slate-800 to-black opacity-50 blur-3xl shadow-2xl"
          animate={{
            scale: [1, 1.07, 1],
            rotate: [0, 8, -8, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full border-4 border-blue-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            boxShadow: [
              "0 0 60px 20px #60a5fa88",
              "0 0 120px 40px #1e40af66",
              "0 0 60px 20px #60a5fa88",
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
        className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-slate-300 text-center mb-4 sm:mb-6 px-2"
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
        className="z-10 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wider sm:tracking-widest text-white mb-6 sm:mb-8 text-center px-2"
        style={{
          fontFamily: "var(--font-orbitron), sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        VYOM VOYAGE
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-10 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 text-center max-w-xs sm:max-w-md md:max-w-2xl px-4"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
        }}
      >
        Vyom Voyage is a passionate team dedicated to unraveling the mysteries of the universe and making space exploration accessible to all. Join us as we journey through the stars, innovate, and inspire the next generation of explorers.
      </motion.p>
    </section>
  );
}