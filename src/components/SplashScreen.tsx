"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [stars, setStars] = useState<{ left: string; top: string; delay: number }[]>([]);

  useEffect(() => {
    // Generate stars only on the client side
    const generatedStars = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative w-full h-full">
            {/* Stars background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a23] to-black">
              {stars.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    delay: star.delay,
                  }}
                  style={{
                    left: star.left,
                    top: star.top,
                  }}
                />
              ))}
            </div>

            {/* Rocket */}
            <motion.div
              initial={{ y: "100vh", x: "-50%" }}
              animate={{ y: "-100vh" }}
              transition={{
                duration: 2,
                ease: [0.17, 0.67, 0.83, 0.67],
                delay: 0.5,
              }}
              className="absolute left-1/2 bottom-0 w-16 h-32"
            >
              <div className="relative w-full h-full">
                {/* Rocket body */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full" />
                
                {/* Rocket window */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full" />
                
                {/* Rocket fins */}
                <div className="absolute bottom-0 left-0 w-full h-8">
                  <div className="absolute bottom-0 left-1/4 w-4 h-8 bg-gray-400 transform -skew-x-12" />
                  <div className="absolute bottom-0 right-1/4 w-4 h-8 bg-gray-400 transform skew-x-12" />
                </div>

                {/* Rocket flame */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-16"
                >
                  <div className="w-full h-full bg-gradient-to-t from-orange-500 via-red-500 to-transparent rounded-b-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white"
            >
              VYOM VOYAGE
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen; 