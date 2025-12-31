import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userData from "@/constants/data";

function Hero() {
  const titles = ["Front-End Developer", "Web Developer", "UI/UX Enthusiast"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % titles.length), 2500);
    return () => clearInterval(id);
  }, [titles.length]);

  // Profile photo removed per request — no photo will be displayed.

  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] overflow-hidden">
      {/* Text container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-2/3 mx-auto text-center p-8 lg:p-20 flex flex-col items-center"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="text-4xl lg:text-8xl font-bold my-2 bg-gradient-to-r from-[#4fd1c5] via-[#63b3ed] to-[#a4cfe4] text-transparent bg-clip-text"
          >
            {titles[index]}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mt-3"
        >
          I build clean, accessible interfaces that scale.
        </motion.p>
      </motion.div>
    </div>
  );

}

export default Hero;
