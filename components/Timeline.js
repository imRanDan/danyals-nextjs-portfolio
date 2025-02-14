import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2024",
    title: "Software Developer at Chingu",
    description: "Developed an AI-powered color palette tool using React and Groq SDK APIs. Led frontend development implementing interactive UI/UX components from Figma designs. Collaborated with a team of eight developers using Git for version control.",
  },
  {
    year: "2024",
    title: "Mentor at PathPeer",
    description: "Guided students in modern web development practices, focusing on React, Node.js, and full-stack applications. Provided mentorship in portfolio development, technical interview preparation, and current industry practices.",
  },
  {
    year: "2022-Present",
    title: "Full Stack Developer (Freelance & Contract)",
    description: "Built and deployed scalable web applications using React, Next.js, and PostgreSQL. Implemented real-time features using Firebase and Firestore. Set up CI/CD pipelines and managed deployments through Vercel and Netlify. Specialized in creating responsive, SEO-optimized websites for small businesses.",
  },
  {
    year: "2022-2023",
    title: "Software Developer at 100Devs",
    description: "Developed full-stack applications using TypeScript, JavaScript, and the MERN stack. Created RESTful APIs with Node.js and Express, integrated with MongoDB and PostgreSQL databases. Deployed applications using cloud platforms including Vercel, Render, and Google Cloud.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Journey So Far
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-8"
            >
              <div className="w-24 text-[#a4cfe4] font-bold">{exp.year}</div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 