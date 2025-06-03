"use client";

import { motion } from "framer-motion";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a23] to-black opacity-80" />

      {/* Subtle animated nebula-like shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-screen blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen blur-3xl"
      />

      {/* Consider adding more complex particles or animations here */}
      {/* For example, integrating the existing Particles.tsx or a variation */}

    </div>
  );
};

export default SpaceBackground; 