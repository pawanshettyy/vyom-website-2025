"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-visible bg-black pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4">
      {/* Animated Glowing Orb Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-br from-blue-800 via-slate-800 to-black opacity-30 blur-3xl shadow-2xl"
          animate={{
            scale: [1, 1.07, 1],
            rotate: [0, 8, -8, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full border-4 border-blue-400/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            boxShadow: [
              "0 0 60px 20px #60a5fa44",
              "0 0 120px 40px #1e40af33",
              "0 0 60px 20px #60a5fa44",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[
          { left: "10%", top: "15%" },
          { left: "25%", top: "45%" },
          { left: "40%", top: "75%" },
          { left: "55%", top: "25%" },
          { left: "70%", top: "85%" },
          { left: "85%", top: "35%" },
          { left: "15%", top: "65%" },
          { left: "30%", top: "95%" },
          { left: "45%", top: "5%" },
          { left: "60%", top: "55%" },
          { left: "75%", top: "15%" },
          { left: "90%", top: "75%" },
          { left: "5%", top: "85%" },
          { left: "20%", top: "25%" },
          { left: "35%", top: "65%" },
          { left: "50%", top: "35%" },
          { left: "65%", top: "95%" },
          { left: "80%", top: "45%" },
          { left: "95%", top: "15%" },
          { left: "10%", top: "55%" },
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Animated Slogan */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-slate-300 text-center mb-4 sm:mb-6 px-2"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          textShadow: "0 0 20px rgba(103, 232, 249, 0.3)",
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
          textShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
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
          textShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        Vyom Voyage is a passionate team dedicated to unraveling the mysteries of the universe and making space exploration accessible to all. Join us as we journey through the stars, innovate, and inspire the next generation of explorers.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}