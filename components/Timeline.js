import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022-Present",
    title: "Freelance Web Developer",
    description:
      "Designed and launched responsive, SEO-optimized websites for small businesses. Built scalable web apps with React, Next.js, and PostgreSQL. Integrated real-time features with Firebase and Firestore. Deployed using Vercel, Netlify, and CI/CD pipelines.",
  },
  {
    year: "2024",
    title: "Frontend Developer – Chingu (Collaborative Project)",
    description:
      "Led frontend work on an AI-powered color palette tool using React and Groq APIs. Built interactive UI from Figma designs. Collaborated with an 8-person global dev team using Git workflows.",
  },
  {
    year: "2024",
    title: "Mentor – PathPeer",
    description:
      "Mentored aspiring developers on React, Node.js, and full-stack web dev. Reviewed portfolios, provided technical interview prep, and guided industry best practices",
  },
  {
    year: "2022-2023",
    title: "Software Developer – 100Devs",
    description:
      "Built full-stack apps with TypeScript, JavaScript, and the MERN stack. Developed REST APIs and integrated databases (MongoDB, PostgreSQL). Deployed production-ready apps with platforms like Vercel and Google Cloud.",
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
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
