import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800">
      {/* Title */}
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4 -mt-10">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Left column – Contact only (killed the freelance pitch) */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Open to full-time frontend roles in Toronto or remote Canada.
                <br />
                <a
                  href="mailto:dan.imran97@gmail.com"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  dan.imran97@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a href="https://linkedin.com/in/danyalimran" target="_blank" rel="noreferrer" className="block text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                linkedin.com/in/danyalimran
              </a>
              <a href="https://github.com/imRanDan" target="_blank" rel="noreferrer" className="block text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                github.com/imRanDan
              </a>
              <a href="https://x.com/TheRanDan" target="_blank" rel="noreferrer" className="block text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                x.com/TheRanDan
              </a>
            </div>
          </div>

          {/* Right side – Bio (updated + confident) */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Self-taught Front-End Developer with 3.5+ years of experience shipping production web applications end-to-end.
                I build in public and focus on clean, user-focused interfaces that ship and get used.

              </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I’ve shipped performant, user-facing tools both solo and in team settings, from scoping requirements through delivery.
                My strongest experience is in React, Next.js, and TypeScript, with backend experience supporting end-to-end features.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills & Technologies – cleaned up + modern */}
       {/* Skills & Technologies – grouped for clarity */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-16">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 text-center shadow-md hover:shadow-xl transition-shadow"
                  >
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend (Supporting) */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Backend (Supporting)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "Node.js",
                  "Go",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Firebase",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 text-center shadow-md hover:shadow-xl transition-shadow"
                  >
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "Git",
                  "Vercel",
                  "Docker",
                  "REST APIs",
                  "OAuth / JWT",
                  "CI/CD",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 text-center shadow-md hover:shadow-xl transition-shadow"
                  >
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Other
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  "AI Agents (Claude API)",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white dark:bg-gray-800 rounded-lg px-6 py-4 text-center shadow-md hover:shadow-xl transition-shadow"
                  >
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;