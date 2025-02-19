import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import userData from "@/constants/data";

const ProjectCard = ({ title, link, githubLink, imgUrl, number, description, stack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      whileHover={{ y: -5 }}
      className="block rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="relative">
        <div className="h-64 w-full overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
          <span className="text-sm text-gray-200">Project {number}</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack?.split(',').map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-[#a4cfe4] bg-opacity-20 text-[#a4cfe4] rounded-full"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#a4cfe4] text-white rounded-lg hover:bg-[#93bcd1] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-[#a4cfe4] text-[#a4cfe4] rounded-lg hover:bg-[#a4cfe4] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <motion.h1 
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center md:text-left"
        >
          Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={proj.id || idx}
              title={proj.title}
              link={proj.link}
              githubLink={proj.githubLink}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
              stack={proj.stack}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
