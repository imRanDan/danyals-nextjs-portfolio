import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Oct 2025 – Present",
    title: "Frontend Developer (Volunteer) – TechTank, Toronto",
    description:
      "Contributing to a React migration from Squarespace, building and refining user-facing components. Shipped first feature (Luma calendar integration) and collaborating with the team on upcoming frontend improvements.",
  },
  {
    year: "Feb 2022 – Present",
    title: "Frontend Developer – Freelance, Remote",
    description:
      "Delivered 5+ production web applications for clients, owning frontend architecture, UI implementation, and performance optimization (97+ Lighthouse average). Led projects end-to-end from requirements through deployment.",
  },
  {
    year: "Mar – Jul 2024",
    title: "Frontend Developer – Chingu, Remote",
    description:
      "Built an AI-powered color palette generator with a 6-person remote team, implementing pixel-perfect React components from Figma during a 16-week sprint.",
  },
  {
    year: "Mar 2022 – Mar 2023",
    title: "Frontend-Focused Developer – 100Devs Bootcamp, Remote",
    description:
      "Completed a 700+ hour intensive focused on building production-ready web applications, including frontend feature development, code reviews, and collaborative sprints.",
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

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-8 items-start"
            >
              <div className="w-32 text-[#a4cfe4] font-bold shrink-0">
                {exp.year}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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