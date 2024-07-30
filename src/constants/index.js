import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `I'm an aspiring web developer with a keen interest in creating user-friendly and visually appealing websites. My journey in web development is driven by a curiosity to learn and a passion for bringing ideas to life through code. I'm dedicated to continuous learning and growing my skills to build practical and beautiful web solutions.`;

export const ABOUT_TEXT = `I am a third-year B.Tech CSE student at Graphic Era Hill University, Dehradun,\n
currently delving into the world of full stack development.\n
My academic journey has been fueled by a deep curiosity and passion for learning new technologies, particularly in C++ and Python.\n
Proficient in data structures and algorithms, I enjoy solving complex problems and optimizing code for efficiency.\n
While I am still expanding my skills in full stack development, I am eager to apply my knowledge in building user-friendly and efficient web applications.\n
Beyond coding, I enjoy exploring new tech trends and staying active in various extracurricular activities.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description:
      "A fully functional weather application with features like real-time weather updates and location-based weather information",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Plant Disease Detection",
    image: project2,
    description:
      "A fully functional plant disease detection application with features like real-time disease identification",
    technologies: ["Python","TensorFlow", "Streamlit"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  Location: "Dehradun, Uttarakhand ",
  PhoneNo: "+91-XXXXXXXXXX",
  Email: "sharma.anshul0910@gmail.com",
};