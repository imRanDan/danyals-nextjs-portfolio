import React from "react";
import { motion } from "framer-motion";
import userData from "@/constants/data";

function Hero() {
  const titles = ["Clean, Fast, and Mobile-Ready Websites"];

  return (
    <div className="flex flex-col md:flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mx-auto text-center lg:text-right lg:p-20"
      >
        {titles.map((title, index) => (
          <motion.h1
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-4xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2"
          >
            {title}
          </motion.h1>
        ))}
      </motion.div>

      {/* Image container */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mt-20 lg:mt-0"
      >
        <div className="w-4/6 mx-auto lg:mx-0">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={userData.profileUrl}
            alt="avatar"
            className="shadow rounded-xl"
          />
          <div className="flex flex-row justify-between mt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-row space-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me, Danyal!</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#a4cfe4] rounded-md mx-2 p-2 whitespace-nowrap text-white"
                href={`mailto:${userData.email}`}
              >
                Contact me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
