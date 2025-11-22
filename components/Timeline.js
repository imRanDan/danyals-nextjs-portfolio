import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Oct 2025 – Present",
    title: "Web Developer (Volunteer) – TechTank, Toronto",
    description:
      "Collaborating on team React migration from Squarespace • Made first contribution (Luma calendar integration) and rallying team for next steps",
  },
  {
    year: "Feb 2022 – Present",
    title: "Full-Stack Developer – Freelance, Remote (4 active clients)",
    description:
      "Independently gathered requirements, built & deployed 5+ production web apps (97+ Lighthouse average) • Delivered full projects solo from discovery to deployment",
  },
  {
    year: "Mar – Jul 2024",
    title: "Frontend Developer – Chingu, Remote",
    description:
      "Built AI-powered color palette generator with 6-person remote team • Pixel-perfect React components from Figma in 16-week agile sprint",
  },
  {
    year: "Mar 2022 – Mar 2023",
    title: "Software Developer – 100Devs Bootcamp, Remote",
    description:
      "700+ hour full-stack intensive → 3 production apps + weekly code reviews & agile sprints",
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