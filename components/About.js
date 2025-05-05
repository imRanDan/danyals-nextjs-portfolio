import React from "react";
import userData from "@/constants/data";
import { motion } from "framer-motion";

const skillsData = {
  "Programming Languages": [
    {
      name: "JavaScript (ES6+)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      noInvert: true,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      noInvert: true,
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png",
    },
  ],
  "Frontend Development": [
    {
      name: "React.js",
      icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    },
    { name: "Next.js", icon: "/next-js-seeklogo.svg" },
    {
      name: "TailwindCSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      noInvert: true,
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      noInvert: true,
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      noInvert: true,
    },
  ],
  "Backend Development": [
    { name: "Node.js", icon: "/node-js-seeklogo.svg" },
    { name: "Express", icon: "/express-js-seeklogo.svg" },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      noInvert: true,
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      noInvert: true,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      noInvert: true,
    },
  ],
  "Infrastructure & Deployment": [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      noInvert: true,
    },
    {
      name: "GitHub Actions",
      icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    },
    { name: "Netlify", icon: "https://www.netlify.com/icon.svg" },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      noInvert: true,
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
    },
  ],
  "Project Management": [
    { name: "Agile", icon: "" },
    { name: "Scrum", icon: "" },
  ],
};

function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        {/* <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}Currently working on{" "}
            <a
              target="_blank"
              className="bg-[#a4cfe4] rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div> */}
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort of help / inquiry, shoot me an{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  e-mail
                </a>{" "}
                and I'll get back to you.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Looking for your next Developer?
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                If you are an individual or business who is looking to get a
                website built, or improve your SEO and/or digital footprint,
                message me on{" "}
                <a
                  href={userData.socialLinks.linkedin}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  LinkedIn
                </a>{" "}
                and I'd love to work with you.
              </p>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Bio
            </h2>
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl leading-relaxed text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                <div
                  className={`grid gap-8 ${
                    skills.length <= 3
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center gap-3 group"
                    >
                      {skill.icon ? (
                        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-[#a4cfe4]/10 transition-colors duration-200">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className={`h-12 w-12 object-contain ${
                              skill.noInvert
                                ? ""
                                : "dark:invert dark:brightness-0 dark:grayscale dark:opacity-70 dark:hover:opacity-100"
                            } transition-opacity`}
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-[#a4cfe4]/10 transition-colors duration-200">
                          <span className="text-[#a4cfe4] font-semibold text-lg">
                            {skill.name.split(" ")[0]}
                          </span>
                        </div>
                      )}
                      <span className="text-base text-center text-gray-600 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
