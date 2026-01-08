import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiSap,
  SiOracle,
  SiFirebase,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: "Mark Andrei D. Atieh",
  firstName: "Mark Andrei",
  lastName: "Atieh",
  role: "IT Student | Aspiring Cloud & Software Developer",
  tagline: "Building innovative solutions for tomorrow's challenges",
  email: "markatieh21@gmail.com",
  phone: "+63 960 215 6487",
  location: "Cavite, Philippines",
  resumeUrl: "/resume.pdf",
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
    "I am a dedicated IT student currently pursuing a degree in Information Technology, with a basic foundation in web development and a strong willingness to learn and improve. While I am still developing my technical skills, I am highly motivated, hardworking, and eager to gain hands-on experience through real-world projects.",
    "I have experience working with web technologies and am continuously enhancing my knowledge through practice and self-study. I am also very interested in learning more about cloud computing and enterprise systems, as I aim to understand how modern applications and business processes are built and managed at scale.",
    "What I may lack in experience, I make up for with perseverance, adaptability, and a strong desire to learn. I am actively seeking an internship opportunity where I can grow my skills, contribute to a team, and gain valuable industry experience.",
  ],
  highlights: [
    { label: "Focus Areas", value: "Cloud, ERP, Software Dev" },
    { label: "Education", value: "BS Information Technology" },
    { label: "Status", value: "Seeking Internship" },
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
  {
    title: "Cloud & DevOps",
    description: "Cloud platforms and deployment technologies",
    skills: [
      { name: "Docker", icon: FaDocker, level: 30 },
      { name: "Kubernetes", icon: SiKubernetes, level: 40 },
      { name: "Linux", icon: FaLinux, level: 40 },
    ],
  },
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
  title: "Employee Attendance Tracking System",
  description: "A full-stack attendance management system built for small-to-medium organizations to automate timekeeping and simplify workforce scheduling. Features include secure JWT authentication, role-based access (admin & employee), real-time clock-in/out, shift scheduling, holiday management, employee profiles, password reset, admin dashboard for attendance review, and deployment-ready configuration for Vercel (frontend) and Render (backend). The app is responsive, built with modern tooling and follows good security practices for production-ready use.",
  image: "/images/projects/EmployeeAttendanceLogo.jpg",
  tags: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Axios",
    "Vercel",
    "Render"
  ],
  category: "Enterprise Web System",
  githubUrl: "https://github.com/Kramxie/EmployeeAttendanceTrackingSystem",
  liveUrl: "https://employeeattendancetrackingsystem-1.onrender.com/login",
  featured: true
},
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
];

// ============================================
// STATISTICS
// ============================================
export const stats = [
  { label: "Projects Completed", value: "3" },
  { label: "Technologies", value: "19" },
  { label: "Certifications", value: "3" },
  { label: "GitHub Repos", value: "7" },
];
