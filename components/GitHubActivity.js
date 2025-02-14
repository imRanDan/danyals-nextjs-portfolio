import React from 'react';
import { motion } from 'framer-motion';
import userData from '@/constants/data';

export default function GitHubActivity() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          GitHub Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={`https://ghchart.rshah.org/${userData.githubUsername}`}
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
} 