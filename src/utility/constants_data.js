import { Icon } from "@mui/material";
import images from "../assets/base_assets";

const languages = [
  {
    name: "JavaScript",
    icon: images.js_icon,
  },
  {
    name: "TypeScript",
    icon:images.typeScript,
  },
  {
    name: "Java",
    icon: images.java,
  },
  {
    name: "HTML5",
    icon: images.html,
  },
];
const lib_n_tech = [
  {
    name: "React",
    icon: images.react_icon,
  },
  {
    name: "Tailwind",
    icon: images.tailwind,
  },
  {
    name: "MUi",
    icon: images.mui_icon,
  },
  {
    name: "NodeJS",
    icon: images.node_icon,
  },
  {
    name: "Postman",
    icon: images.postman,
  },

  {
    name: "MongoDB",
    icon: images.mongo_icon,
  },
  {
    name: "Firebase",
    icon: images.firebase_icon,
  },
  {
    name: "Git",
    icon: images.git_icon,
  },
  {
    name: "GitHub",
    icon: images.github_icon,
  },
];

const recommendation = [
  {
    name: "Figma",
    icon: images.figma_icon,
  },
  {
    name: "Notion",
    icon: images.notion_icon,
  },
  {
    name: "DevToy",
    icon: images.devtoy_icon,
  },
  {
    name: "Obsidian",
    icon: images.obsidian,
  },
  {
    name: "PowerToys",
    icon: images.power_toy,
  },
];

export const tech_stack = {
  languages,
  lib_n_tech,
  recommendation,
};

export const about_me =
  "Greetings. I am a 22-year-old alumnus from India, having completed BTech at Parala Maharaja Engineering College. I am a versatile professional with a fervent passion ⚡ for web development and an avid interest in emerging 💡 technologies. As a proactive problem-solver, I leverage code to address complex challenges 👀. My background encompasses extensive experience in frontend development, and I am currently delving into backend/server-side technologies. Consequently, you will seldom find me away from my workstation 🧑‍💻. In addition to my coding pursuits, I am dedicated to advancing my design and user interface expertise, and I have a keen interest 💜 in staying abreast of current news and articles.";

export const work_experience_two = {
  company_name: "Embrays Technologies",
  company_link: "https://embraystechnologies.com/",
  date: "14 June 2024 - Current",
  job_title: "Software Developer Intern",
  points: [
    "Developed React.js Web Application for Money Transactions",
    "Integrated 10+ REST APIs for various functionalities",
    "Implemented local storage management, JWT token verification, and data validation",
    "Managed secure API authentication and data transmission",
    "Utilized React Router and Context API for efficient state management",
    "Created advanced custom filters and paginated data display for enhanced user experience",
    "Contributions to Embrays Technology's Official Website",
    "Migrated website to React.js + Tailwind for better performance",
    "Added a blog section using Hashnode's GraphQL API with React pagination",
    "Developing additional features like a link shortener and QR generator for enhanced user engagement",
    "Analyzed and improved Core Web Vitals (LCP, FID, CLS)",
    "Implemented lazy loading, WebP images and deferring strategies, increasing performance scores from 60% to 97%",
  ],
  extra: {
    data1: "has 50K+ downloads",
    appLink:
      "https://play.google.com/store/apps/details?id=com.easemytrades.stockdaddy",
  },
};

export const work_experience_one = {
  company_name: "Velozity",
  company_link: "https://velozityglobal.com/",
  date: "25 Feb(2022) - July(2022)",
  job_title: "Flutter Developer",
  points: [
    "Contributed to Customer, Restaurant, and Delivery apps which are  part of a Food delivery service, In which I was responsible for developing UI, Business Logic with proper state-management using BLOC and MVC architecture",
    "Designed the Authentication and Authorization flow for Restaurant and Delivery the app login, register, and OTP by using RiverPod as state-management and restful APIs    ",
    "Integrated 20+ Restful APIs, creating orders, Oder tracking using Google Maps API, Payment integration using Razor Pay, Signing APK and other business logic for all three apps.",
  ],
};
export const work_experience_three = {
  company_name: "Caravel",
  company_link: "https://caravel.tech/",
  date: "Aug(2022) - Feb(2023)",
  job_title: "Software Developer",
  points: [
    "Contributed to and maintained an ed tech app, I am responsible for architecture and Business Logic following best practices",
    "Integrated 60+ Restful APIs with RiverPod (state management), Dio (networking), Hive (local storage) following MVC",
    "Signing the APKs, made the app ready for release and launched to production",
  ],
};

export const work_experience_four = {
  company_name: "Nymble",
  company_link: "https://www.eatwithnymble.com/",
  date: "Feb(2023) - current",
  job_title: "Flutter Developer",
  points: [],
};

export const projects_names = [
  " Extension Enabler",
  "Ping-It",
  "QuickTweets",
  "PixelLab",
];

export const projects_zero = {
  // picture: images.pro1,
  name: "QR Generator",
  link: "https://github.com/narayann7/ExtensionEnabler",
  preview: "https://pub.dev/packages/extension_enabler",
  description:
    "QR Generator is an application that generates QR codes for input links, emails, text, mobile numbers, and more..",
};
export const projects_one = {
  picture: images.pro1,
  name: "Tempstation",
  link: "https://tempstation.web.app/",
  preview: "https://github.com/narayann7/ping-it#readme",
  description:
    "Tempstation is a weather app developed in React, offering real-time weather updates, detailed forecasts, and an intuitive user interface for a seamless weather-tracking experience. ",
};

export const projects_two = {
  picture: images.pro2,
  name: "Portfolio",
  link: "https://github.com/narayann7/QuickTweets",
  preview: "https://github.com/narayann7/QuickTweets#readme",
  description:
    "Jayshree Portfolio is a dynamic and responsive personal portfolio website built using React, showcasing my projects, skills, and professional experiences with a sleek and modern design.",
};

export const projects_three = {
  picture: images.pro3,
  name: "SillySaga",
  link: "https://github.com/narayann7/pixelLab-WallpaperApp-",
  preview: "https://sillysaaga.web.app/",
  description:
    "SillySaga is a fun game made with HTML, CSS, and JavaScript designed for entertainment purposes..",
};
export const projects_four = {
  picture: images.pro3,
  name: "Linktree",
  link: "https://github.com/narayann7/pixelLab-WallpaperApp-",
  preview: "https://connect.jayshree.tech/",
  description:
    "Link Tree project, built with HTML and CSS, consolidates all my social media links in one place, providing easy access for user interaction and engagement.",
};
