import React from "react";
import userData from "@/constants/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          My Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
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
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description, stack }) => {
  return (
    <a href={link} target="_blank" className="shadow-2xl">
      <div className="relative overflow-hidden p-4">
        <div className="h-20">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-105 transition duration-2000 ease-out"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-[#a4cfe4] rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
        <div className="relative bg-white text-center mt-48 h-32 dark:bg-gray-700">
          <p className="text-black px-2 py-2 font-mono dark:text-white">
            {description}
          </p>
          <p className="text-black px-2 py-2 font-mono dark:text-white">
            {stack}
          </p>
        </div>
      </div>
    </a>
  );
};
