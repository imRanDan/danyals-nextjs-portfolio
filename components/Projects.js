import React from "react";
import { motion } from "framer-motion";

const projects = [
   {
    title: "CafeQuest – Real-time Cafe Discovery",
    description:
      "Location-based discovery app with user auth, favorites, and real-time search • 97+ Lighthouse • 0.7s LCP • Built solo from scratch.",
    stack: "React, Next.js, TypeScript, Mapbox, Firebase, TailwindCSS",
    link: "https://cafequest.vercel.app/",                          
    githubLink: "https://github.com/imRanDan/cafequest",
    imgUrl: "/cafequest-app.png",
  },
    {
    title: "Creator Growth Tool – Instagram Analytics",
    description:
      "Full-stack analytics platform analyzing 10,000+ Instagram posts with AI-powered growth recommendations and automated content suggestions.",
    stack: "Go, PostgreSQL, React, Next.js, TypeScript, OAuth 2.0, JWT",
    link: "https://creator-growth-api.vercel.app/",     
    githubLink: "https://github.com/imRanDan/creator-growth-api",
    imgUrl: "creator-growth.png"          
  },
  {
    title: "Color Explorer – AI Color Palette Generator",
    description:
      "Collaborative tool built with 6-person remote team (Chingu) • Uses Groq API to generate custom palettes from user prompts or sample colors.",
    stack: "React, TailwindCSS, Groq API",
    link: "https://v49-tier2-team-17.netlify.app/",       
    githubLink: "https://github.com/chingu-voyages/v49-tier2-team-17", 
    imgUrl: "/color-explorer-project.png",
  },
  {
    title: "ConnectWit – Private Social Network",
    description:
      "Mobile-first social app with Google/email auth, posting, commenting, likes, and real-time updates.",
    stack: "React, Next.js, Firebase, TailwindCSS",
    link: null,
    githubLink: "https://github.com/imRanDan/connectwit",
    imgUrl: "/social-media-app.jpg",
  },
  {
    title: "CLU – AI Test Generation Agent CLI",
    description:
      "Python AI agent using Claude API • Autonomous framework detection • Generates production-ready tests in 14 languages with zero-shot prompting.",
    stack: "Python, Claude API, Agentic Workflows",
    link: null,
    githubLink: "https://github.com/imRanDan/clu",
    imgUrl: "clu-testgrid.png"
  },
 
];

const ProjectCard = ({ title, description, stack, link, githubLink, imgUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="block rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.split(",").map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-[#a4cfe4]/20 text-[#a4cfe4] rounded-full font-medium"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#a4cfe4] text-white rounded-lg hover:bg-[#8ab8d1] transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#a4cfe4] text-[#a4cfe4] rounded-lg hover:bg-[#a4cfe4] hover:text-white transition-all font-medium"
            >
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
    <section id="projects" className="bg-white dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              stack={proj.stack}
              link={proj.link}
              githubLink={proj.githubLink}
              imgUrl={proj.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}