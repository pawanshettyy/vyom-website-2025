'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedLogoBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Large Background Logo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/assets/vyom_logo.jpg"
          alt="Vyom Logo Background"
          width={800}
          height={800}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-5"
          priority
        />
      </motion.div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(30, 58, 138, 0.1), rgba(88, 28, 135, 0.1), rgba(67, 56, 202, 0.1))',
            'linear-gradient(225deg, rgba(67, 56, 202, 0.1), rgba(30, 58, 138, 0.1), rgba(88, 28, 135, 0.1))',
            'linear-gradient(45deg, rgba(30, 58, 138, 0.1), rgba(88, 28, 135, 0.1), rgba(67, 56, 202, 0.1))',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating logo instances */}
      <motion.div
        className="absolute top-1/4 left-1/4 opacity-5"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/assets/vyom_logo.jpg"
          alt="Vyom Logo"
          width={120}
          height={120}
          className="w-30 h-30 opacity-30"
        />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4 opacity-3"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <Image
          src="/assets/vyom_logo.jpg"
          alt="Vyom Logo"
          width={100}
          height={100}
          className="w-25 h-25 opacity-20"
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 opacity-4"
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      >
        <Image
          src="/assets/vyom_logo.jpg"
          alt="Vyom Logo"
          width={80}
          height={80}
          className="w-20 h-20 opacity-25"
        />
      </motion.div>

      {/* Animated particles/stars */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle geometric patterns */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 25% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full translate-x-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogoBackground;