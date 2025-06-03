"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  width: number;
  height: number;
  top: string;
  left: string;
  opacity: number;
}

export default function HeroSection() {
  const [stars, setStars] = useState<Star[]>([]);
  const text = "VYOM VOYAGE";
  const characters = text.split("");
  const controls = useAnimation(); // Use AnimationControls

  useEffect(() => {
    // Only run on client
    const generatedStars: Star[] = Array.from({ length: 80 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.2,
    }));
    setStars(generatedStars);

    // Start the animation sequence when the component mounts
    const sequence = async () => {
      await controls.start("visible"); // Trigger typewriter (staggered children)
      controls.start("glow"); // Trigger glow after typing is complete
    };

    sequence();

  }, [controls]); // Add controls to dependency array

  const containerVariants = {
    hidden: { opacity: 1 }, // Container is visible initially (or hidden if preferred)
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay between characters
      },
    },
    glow: { // Variant for the pulsating glow
       filter: [ // Pulsating glow effect
         "drop-shadow(0 0 10px rgba(80, 0, 255, 0))",
         "drop-shadow(0 0 40px rgba(80, 0, 255, 0.8))",
         "drop-shadow(0 0 10px rgba(80, 0, 255, 0))"
       ],
       transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    }
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Sleek Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="absolute inset-0 z-0"
        style={{ background: `url('/assets/Screenshot 2025-06-02 051317.png') center/cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </motion.div>
      {/* Animated Glowing Circle (Planet) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-full bg-purple-700/30 blur-3xl animate-pulse z-0"
      />
      {/* Animated Stars/Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: star.opacity, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.01 }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
        {/* Gradient Animated Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-8 mt-24 md:mt-0 text-center"
        >
          Embark on a Journey Beyond the Stars
        </motion.h2>
        {/* Large Project Name with Typewriter and Glow */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate={controls} // Use animation controls
          className="text-6xl md:text-8xl font-extrabold tracking-widest text-white mb-8 text-center inline-block"
          style={{ filter: "drop-shadow(0 2px 40px rgba(80,0,255,0.5))"}} // Keep initial drop shadow
        >
          {characters.map((char, index) => (
            <motion.span key={index} variants={characterVariants}>
              {char === " " ? "\u00A0" : char} {/* Render space character */}
            </motion.span>
          ))}
        </motion.h1>
        {/* Subtitle/Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }} // Adjust delay based on typing duration
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto text-center"
        >
          Vyom Voyage is your gateway to the universe. Explore, learn, and connect with the cosmos.
        </motion.p>
      </div>
    </section>
  );
} 