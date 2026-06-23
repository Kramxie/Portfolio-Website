import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Mark Andrei D. Atieh",
  firstName: "Mark Andrei",
  lastName: "Atieh",
  role: "Web & Software Developer",
  tagline: "Building innovative solutions for tomorrow's challenges",
  email: "markatieh21@gmail.com",
  phone: "+63 960 215 6487",
  location: "Cavite, Philippines",
  resumeUrl: "/Atieh_RESUME(2).pdf",
  avatar: "/images/avatar.png",
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Kramxie",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/mark-andrei-atieh-16b086394",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:markatieh21@gmail.com",
    icon: FaEnvelope,
  },
];

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// ABOUT ME
// ============================================
export const aboutMe = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: [
    "I am a dedicated Web and Software Developer with a solid foundation in building responsive, user-centric applications and modern enterprise systems. Highly motivated and hardworking, I thrive on turning complex problems into elegant software solutions.",
    "Driven by continuous learning, I have practical experience working with full-stack web technologies and maintaining system reliability. I am deeply passionate about robust back-end integrations, structured databases, and modern front-end practices.",
    "With a strong blend of adaptability, perseverance, and problem-solving skills, I am actively seeking full-time professional opportunities where I can deliver impactful results, contribute to an innovative team, and further develop my career in the tech industry.",
  ],
  highlights: [
    { label: "Focus Areas", value: "Web & Software Dev" },
    { label: "Education", value: "BS Information Technology" },
    { label: "Status", value: "Open to Job Opportunities" },
    { label: "Location", value: "Cavite, Philippines" },
  ],
};

// ============================================
// SKILLS & TECH STACK
// ============================================
export const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", icon: FaReact, level: 30 },
      { name: "Next.js", icon: SiNextdotjs, level: 30 },
      { name: "TypeScript", icon: SiTypescript, level: 30 },
      { name: "JavaScript", icon: SiJavascript, level: 55 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 60 },
      { name: "HTML5", icon: FaHtml5, level: 70 },
      { name: "CSS3", icon: FaCss3Alt, level: 65 },
    ],
  },
  {
    title: "Backend",
    description: "Server-side development and database management",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 50 },
      { name: "Python", icon: FaPython, level: 40 },
      { name: "Java", icon: FaJava, level: 40 },
      { name: "MongoDB", icon: SiMongodb, level: 50 },
      { name: "MySQL", icon: SiMysql, level: 50 },
    ],
  },
// removed Cloud & DevOps from skills
  {
    title: "Tools & ERP",
    description: "Development tools and enterprise systems",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 60 },
      { name: "VS Code", icon: VscVscode, level: 80 },
      { name: "Figma", icon: SiFigma, level: 75 },
      { name: "Vercel", icon: SiVercel, level: 50 },
    ],
  },
];

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    id: 1,
    title: "Fundamental Apparel - E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for a custom sportswear and apparel business. Features include product catalog, shopping cart, user authentication with JWT, real-time messaging via Socket.io, custom jersey ordering with 3D preview using Three.js, PayMongo payment integration (GCash & Card), order management, loyalty rewards system, and admin dashboard. Deployed on Render with MongoDB Atlas.",
    image: "/images/projects/fundamental.png",
    tags: ["Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Socket.io", "Three.js", "JWT", "PayMongo"],
    category: "E-Commerce",
    githubUrl: "https://github.com/Kramxie/FundamentalApparel",
    liveUrl: "https://fundamentalapparel.onrender.com/client/index.html",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A beautiful, responsive weather dashboard that displays real-time weather conditions and 5-day forecast for any city worldwide. Features include geolocation support, unit toggle (°C/°F), dark mode, search history, favorite cities, hourly forecast, dynamic weather backgrounds with animations, and professional code organization with modular architecture.",
    image: "/images/projects/weatherdashboard.png",
    tags: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API", "LocalStorage", "Geolocation API", "Responsive Design"],
    category: "Web App",
    githubUrl: "https://github.com/Kramxie/WeatherDashboard",
    liveUrl: "https://weather-dashboard-sooty-gamma.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Nexxus Lab Revamp Website",
    description: "Spearheaded the redesign and development of the Nexxus Lab website, improving user experience, interface design, and overall accessibility. Improved website structure, performance, and maintainability through modern web development practices and reusable components. Collaborated with team members to analyze requirements, implement improvements, and deliver a production-ready website.",
    image: "/images/projects/nexxuslab.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack"],
    category: "Corporate Website",
    githubUrl: "",
    liveUrl: "https://team1-nexus-lab.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "MyPropertyBuddy",
    description: "Served as a Back-End Developer focusing on QA and backend functionality. Enhanced system reliability by identifying and documenting over 50 functional bugs through comprehensive manual and regression testing activities. Implemented white-label features and customization updates based on client requirements and branding needs.",
    image: "/images/projects/mypropertybuddy.png",
    tags: ["QA", "Manual Testing", "Regression Testing", "Backend", "White-Labeling"],
    category: "Real Estate System",
    githubUrl: "",
    liveUrl: "https://my-property-buddy.vercel.app/guest-LandingPage.html",
    featured: true
  },
  {
    id: 5,
    title: "Neo-routine",
    description: "A comprehensive productivity and routine-tracking workspace application aimed at streamlining daily planning, task execution, and habit building.",
    image: "/images/projects/neoroutine.png",
    tags: ["Node.js", "React", "Full Stack", "Productivity"],
    category: "Web App",
    githubUrl: "",
    liveUrl: "https://neo-routine.vercel.app/",
    featured: true
  }
];

// ============================================
// EXPERIENCE & EDUCATION
// ============================================
export const experiences = [
  {
    id: 4,
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "De La Salle University - Dasmariñas",
    location: "Dasmariñas, Philippines",
    startDate: "2022",
    endDate: "Present",
    description:
      "Currently in my final year, specializing in Software Development and Enterprise Systems. Relevant coursework includes Cloud Computing, Database Management, Software Engineering, and ERP Systems.",
    highlights: [
      "Dean's List for 7 consecutive semesters",
      "Capstone Project: Development of A Web-Based E-Commerce for Fundamental Apparel",
    ],
  },
  {
    id: 99,
    type: "job",
    title: "Full-Stack and Back-end Developer Intern",
    organization: "Nexxus Lab",
    location: "Remote / Hybrid",
    startDate: "January 2026",
    endDate: "April 2026",
    description:
      "Spearheaded the redesign and development of the Nexxus Lab website, improving user experience, interface design, and overall accessibility. Designed MongoDB database structures, optimized queries, and improved data handling performance.",
    highlights: [
      "Developed backend services and REST APIs using Node.js and Express.js",
      "Implemented JWT authentication, role-based authorization, validation, and API security practices",
      "Collaborated with frontend developers to deliver production-ready features"
    ],
  },
  {
    id: 5,
    type: "certification",
    title: "Partner: PCAP - Programming Essentials in Python",
    organization: "Cisco Networking Academy",
    location: "De La Salle University - Dasmariñas",
    startDate: "13 December 2023",
    endDate: "",
    description:
      "Foundational certification validating programming proficiency in Python. Covers core programming concepts, problem-solving, data types, control structures, functions, and basic software development principles, as taught through the Cisco Networking Academy.",
  },
  {
    id: 6,
    type: "certification",
    title: "IT Essentials: PC Hardware and Software",
    organization: "Cisco Networking Academy",
    location: "De La Salle University - Dasmariñas",
    startDate: "14 Feb 2023",
    endDate: "",
    description:
      "Entry-level certification validating foundational knowledge of computer hardware, software, and troubleshooting. Covers PC components, operating systems, installation, maintenance, and basic networking concepts, as taught through the Cisco Networking Academy.",
  },
  {
    id: 7,
    type: "certification",
    title: "Maintaining Computer Systems and Networks (MCSN)",
    organization: "TESDA",
    location: "TESDA Online Program - Taguig City",
    startDate: "15 March 2022",
    endDate: "",
    description:
      "National certification covering the competencies required to maintain computer systems and networks. Includes preventive maintenance, troubleshooting hardware and software issues, configuring network devices, ensuring system security, and performing routine backups and system updates to ensure optimal performance and reliability.",
  },
  {
    id: 8,
    type: "certification",
    title: "Google Cloud Fundamentals: Core Infrastructure",
    organization: "Coursera",
    location: "Online",
    startDate: "January 2026",
    endDate: "",
    description: "Certification covering the fundamental concepts of Google Cloud Platform architecture and services.",
  },
  {
    id: 9,
    type: "certification",
    title: "HubSpot Academy: SEO Certified",
    organization: "HubSpot Academy",
    location: "Online",
    startDate: "10 March 2026",
    endDate: "09 April 2027",
    description: "SEO certification validating skills in website optimization, keyword research, and search engine ranking strategies.",
  },
  {
    id: 10,
    type: "certification",
    title: "Setting Up Computer Servers",
    organization: "TESDA",
    location: "Online / Onsite",
    startDate: "11 March 2022",
    endDate: "",
    description: "Certification in configuring and maintaining computer servers, covering network and directory services.",
  },
  {
    id: 11,
    type: "certification",
    title: "Proserve Academy Graphic Design Workshop",
    organization: "Proserve Academy",
    location: "Online / Onsite",
    startDate: "7 February 2026",
    endDate: "",
    description: "Workshop focused on essential graphic design skills and principles.",
  }
];

// ============================================
// STATISTICS
// ============================================
export const stats = [
  { label: "Projects Completed", value: "5" },
  { label: "Technologies", value: "19" },
  { label: "Certifications", value: "7" },
  { label: "GitHub Repos", value: "7" },
];
