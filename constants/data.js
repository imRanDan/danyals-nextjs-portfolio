const userData = {
  githubUsername: "imRanDan",
  name: "Danyal Imran",
  title: "Websites that help your business stand out",
  profileUrl: "/danyal-headshot-2024.jpg",
  email: "imtherandan@gmail.com",
  projects: [
    // New addition – MUST include
    {
      title: "CafeQuest",
      link: "https://cafequest.vercel.app",
      githubLink: "https://github.com/imRanDan/cafequest",
      imgUrl: "/cafequest-app.png",
      description:
        "Location-based cafe discovery app. Includes user auth, save/favorite system, and has received organic traffic week-over-week since launch.",
      stack: "React, Chakra UI, Next.js, Mapbox, Firebase, TailwindCSS",
    },

    {
      title: "The Little Details",
      link: "https://thelittledetails.netlify.app/",
      githubLink: "https://github.com/imRanDan/the-little-details",
      imgUrl: "/the-little-details.png",
      description:
        "A modern website for a local home-staging business. Features a services section, gallery, and contact forms",
      stack: "HTML5, CSS3, JavaScript, Responsive Design",
    },

    {
    title: "Citrine – Modern Restaurant Website",
    link: "https://citrinebytheshore.netlify.app//",
    githubLink: "https://github.com/imRanDan/citrine-restaurant", 
    imgUrl: "/citrine-restaurant.png", 
    description:
      "A refined, modern restaurant site designed to showcase upscale dining. Features smooth scroll animations, curated menu sections, reservation CTA, and a bold brand aesthetic. Built for visual impact and UX polish.",
    stack: "HTML5, CSS3, JavaScript, Responsive Design",
  },


    {
      title: "Color Explorer - a tool for Designers and Developers",
      link: "https://v49-tier2-team-17.netlify.app/",
      githubLink: "https://github.com/chingu-voyages/v49-tier2-team-17",
      imgUrl: "/color-explorer-project.png",
      description:
        "Collaborative color palette tool built with a remote team of 8 via Chingu. Leverages Grok AI to generate custom palettes based on user input and sample colors. Designed by and for front-end devs and designers to streamline the early design phase of web projects.",
      stack: "React, TailwindCSS, Groq",
    },

    {
      title: "DIAGONAL - Modern Music Venue",
      link: "https://diagonalclub.netlify.app/",
      githubLink: "https://github.com/imRanDan/diagonol-venue",
      imgUrl: "/diagonal-club.png",
      description:
        "Stylish music venue site with event filtering, merch store, and newsletter signup. Designed with industrial-inspired visuals and smooth animations.",
      stack: "HTML5, CSS3, JavaScript, Responsive Design",
    },

    {
      title: "Instagram Clone",
      githubLink: "https://github.com/imRanDan/social-media-app",
      imgUrl: "/social-media-app.jpg",
      description:
        "Responsive social media app with Google/email auth, posting, commenting, and likes. Built with mobile-first UX.",
      stack: "React, TailwindCSS, Next.js, Firebase",
    },

    // Optional: keep for diversity, or move to a “Client Projects” section in the future
    {
      title: "Ayesha's Hair Salon",
      link: "https://ayeshas-salon-responsive.netlify.app/",
      githubLink: "https://github.com/imRanDan/ayeshas-hair-salon",
      imgUrl: "/project-image-1.png",
      description:
        "Mobile-first responsive site for a hair salon featuring services, lookbooks, and booking info.",
      stack: "HTML5, CSS3, Responsive Design",
    },
  ],

  about: {
    title: "Web Developer - ",
    description: [
      "I’m Danyal, a Web Developer who builds clean, responsive websites for small businesses, entrepreneurs, and creators. Whether you're starting from scratch or want to upgrade your online presence, I design sites that are fast, mobile-friendly, and built to convert visitors into customers.",
    ],
    currentProject: "cafequest",
    currentProjectUrl: "https://github.com/imRanDan/cafequest",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/danyalimran/",
    github: "https://github.com/imRanDan",
  },
};

export default userData;
