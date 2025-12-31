import React from 'react';

const ICONS = {
  "TypeScript": (
    <svg aria-hidden="true" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <text x="50%" y="60%" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" dominantBaseline="middle">TS</text>
    </svg>
  ),
  "JavaScript": (
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <text x="50%" y="60%" fill="black" fontSize="10" fontWeight="700" textAnchor="middle" dominantBaseline="middle">JS</text>
    </svg>
  ),
  "React": (
    <svg aria-hidden="true" className="w-5 h-5 text-[#61dafb]" viewBox="0 0 24 24" fill="none">
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <ellipse cx="12" cy="12" rx="6" ry="2.8" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="6" ry="2.8" transform="rotate(-30 12 12)" />
        <ellipse cx="12" cy="12" rx="6" ry="2.8" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </g>
    </svg>
  ),
  "Next.js": (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <text x="50%" y="62%" fill="currentColor" fontSize="8" fontWeight="700" textAnchor="middle" dominantBaseline="middle">Next</text>
    </svg>
  ),
  "TailwindCSS": (
    <svg aria-hidden="true" className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none">
      <path d="M4 13c3-1 6-1 9 1s6 2 8-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Node.js": (
    <svg aria-hidden="true" className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" />
    </svg>
  ),
  "Go": (
    <svg aria-hidden="true" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <text x="50%" y="60%" fill="currentColor" fontSize="8" fontWeight="700" textAnchor="middle" dominantBaseline="middle">Go</text>
    </svg>
  ),
  "Python": (
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v4a3 3 0 01-3 3H7v-7zM17 17H7v-4a3 3 0 013-3h7v7z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "PostgreSQL": (
    <svg aria-hidden="true" className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <text x="50%" y="60%" fill="currentColor" fontSize="7" fontWeight="700" textAnchor="middle" dominantBaseline="middle">PG</text>
    </svg>
  ),
  "MongoDB": (
    <svg aria-hidden="true" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none">
      <path d="M12 2s4 3 4 6-1.5 5-4 7-4-3-4-6 4-7 4-7z" fill="currentColor" />
    </svg>
  ),
  "Firebase": (
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3 7 4 1-7 5-7-5 4-1 3-7z" fill="currentColor" />
    </svg>
  ),
  "Git": (
    <svg aria-hidden="true" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none">
      <path d="M3 12l9-9 9 9-9 9-9-9z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
    </svg>
  ),
  "Vercel": (
    <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="none">
      <path d="M12 4l8 14H4L12 4z" fill="currentColor" />
    </svg>
  ),
  "Docker": (
    <svg aria-hidden="true" className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="8" rx="1" fill="currentColor" />
    </svg>
  ),
  "REST APIs": (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "OAuth / JWT": (
    <svg aria-hidden="true" className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v6M12 16v6M4 12h6M14 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "CI/CD": (
    <svg aria-hidden="true" className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h6l3-6 3 12 3-6h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "AI Agents (Claude API)": (
    <svg aria-hidden="true" className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 6h-2v6h2V8zm0 8h-2v2h2v-2z" fill="currentColor" />
    </svg>
  ),
  "default": (
    <svg aria-hidden="true" className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  )
};

function getIcon(name) {
  return ICONS[name] || ICONS['default'];
}

export default function Skills() {
  const skills = {
    "Frontend": ["TypeScript", "JavaScript", "React", "Next.js", "TailwindCSS"],
    "Backend (Supporting)": ["Node.js", "Go", "Python", "PostgreSQL", "MongoDB", "Firebase"],
    "Tools & Platforms": ["Git", "Vercel", "Docker", "REST APIs", "OAuth / JWT", "CI/CD"],
    "Other": ["AI Agents (Claude API)"]
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <section
              key={category}
              aria-labelledby={`skills-${category.replace(/\s+/g, '-').toLowerCase()}`}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg min-w-0"
            >
              <h3 id={`skills-${category.replace(/\s+/g, '-').toLowerCase()}`} className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="flex flex-col gap-2" role="list">
                {items.map(skill => (
                  <li key={skill} className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#f1f8fb] dark:bg-gray-600 w-full">
                    <span className="flex-shrink-0" aria-hidden="true">{getIcon(skill)}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}