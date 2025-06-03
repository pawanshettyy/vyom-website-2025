"use client";

import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className = "", delay = 0 }: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const radialGradient = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    rgba(148, 163, 184, 0.4) 0%,
    transparent 60%
  )`;

  // Adjusting hover scale and transition to match Hermetica's example
  const hoverScale = 1.05;
  const hoverTransitionDuration = 0.3; // seconds

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: hoverScale,
        transition: { duration: hoverTransitionDuration },
      }}
      className={`relative group rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Glow effect following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-hidden"
        style={{
          background: radialGradient,
        }}
      />

      {/* Card content */}
      <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard; 