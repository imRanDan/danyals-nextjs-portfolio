import React from "react";
import userData from "@/constants/data";

function About() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
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
        </div>
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
                className="text-xl leading-relaxed text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-[#a4cfe4] text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                      className="h-12 w-12"
                      alt="JavaScript"
                    />
                    <span className="text-sm mt-2">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                      className="h-12 w-12"
                      alt="React"
                    />
                    <span className="text-sm mt-2">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/next-js-seeklogo.svg"
                      className="h-12 w-12 px-1 bg-[#f1f1f1] dark:bg-white"
                      alt="Next.js"
                    />
                    <span className="text-sm mt-2">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"
                      className="h-12 w-12"
                      alt="TailwindCSS"
                    />
                    <span className="text-sm mt-2">TailwindCSS</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/node-js-seeklogo.svg"
                      className="h-12 w-12 dark:bg-white"
                      alt="Node.js"
                    />
                    <span className="text-sm mt-2">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/express-js-seeklogo.svg"
                      className="h-12 w-12 dark:bg-white"
                      alt="Express"
                    />
                    <span className="text-sm mt-2">Express</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                      className="h-12 w-12"
                      alt="MongoDB"
                    />
                    <span className="text-sm mt-2">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                      className="h-12 w-12"
                      alt="PostgreSQL"
                    />
                    <span className="text-sm mt-2">PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                      className="h-12 w-12"
                      alt="Git"
                    />
                    <span className="text-sm mt-2">Git</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                      className="h-12 w-12"
                      alt="Firebase"
                    />
                    <span className="text-sm mt-2">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
