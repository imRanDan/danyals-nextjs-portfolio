import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import userData from "@/constants/data";

const ProjectCard = ({ title, link, imgUrl, number, description, stack }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      whileHover={{ y: -5 }}
      className="block rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
      tabIndex={0}
      role="article"
      aria-label={`Project: ${title}`}
    >
      <div className="relative">
        <div className="h-64 w-full relative">
          <Image
            src={imgUrl}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform transition-transform duration-500 hover:scale-110"
            priority={number === "1"}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="text-sm text-gray-200">Project {number}</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack?.split(',').map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-[#a4cfe4] bg-opacity-20 text-[#a4cfe4] rounded-full"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
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
