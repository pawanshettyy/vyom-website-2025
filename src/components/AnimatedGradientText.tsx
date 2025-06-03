"use client";

import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
}

const AnimatedGradientText = ({ children }: AnimatedGradientTextProps) => {
  return (
    <motion.h1
      className="text-4xl md:text-6xl lg:text-7xl font-bold text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
        {children}
      </span>
    </motion.h1>
  );
};

export default AnimatedGradientText; 