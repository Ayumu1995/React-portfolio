import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT =
   "I’m a frontend web and mobile application developer with an Information Science background, specializing in building intuitive, responsive web and mobile applications. Working on academic projects and at hackathons, I have had practical exposure to React, Vue, Flutter, and Next.js. Apart from that, I’m interested in implementing machine learning to create intelligent user experiences. Now a Web Development student based out of Vancouver, I ensure that clean, readable code is delivered and continuously look for new technologies to discover.";

export const ABOUT_TEXT =
   "I am a frontend developer with a solid academic background in Information Science and practical experience building web and mobile applications. My exposure to React, Vue.js, Flutter, and Next.js has come from hackathons, research at university, and side projects. I love crafting intuitive user interfaces and investigating machine learning applications for improving the user experience. Studying Web Development at present in Vancouver, I am devoted to creating clean, readable code and constantly building on my technical capabilities.";

export const EXPERIENCES = [
   {
      year: "2024 - Present",
      role: "Web Development Student",
      company: "Tamwood College, Vancouver",
      description: `Currently enrolled in a diploma program focusing on frontend and backend development, responsive design, and modern web technologies. Gaining practical experience through coursework and collaborative projects.`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
   },
   {
      year: "2023",
      role: "Frontend Developer (Hackathon Project)",
      company: "Hackathon Team Project",
      description: `Developed a secure text encryption/decryption web app using React and Firebase. Implemented multiple cipher algorithms and authentication flow.`,
      technologies: ["React", "JavaScript", "Firebase", "Git"],
   },
   {
      year: "2022 - 2023",
      role: "Flutter App Developer (Academic Project)",
      company: "Doshisha University",
      description: `Worked in a team to develop a Flutter-based mobile app that controls a prosthetic hand using biometric data. Focused on UI/UX design and Bluetooth sensor integration.`,
      technologies: ["Flutter", "Dart", "Bluetooth API", "Biometric Sensors"],
   },
   {
      year: "2022",
      role: "ML/NLP Research Assistant (Student Project)",
      company: "Doshisha University",
      description: `Built CNN-based image classification models and applied Japanese NLP techniques using MeCab for academic research. Achieved over 90% accuracy on evaluation datasets.`,
      technologies: ["Python", "PyTorch", "NumPy", "OpenCV", "MeCab"],
   },
];

export const EDUCATIONS = [
   {
      institution: "Tamwood College, Vancouver",
      degree: "Diploma in Web Development",
      period: "2024 – Present",
      description:
         "Comprehensive program focused on frontend and backend technologies, responsive design, and modern development practices. Covers full stack development using JavaScript, React, Node.js, and databases.",
   },
   {
      institution: "Doshisha University, Japan",
      degree: "Bachelor of Science in Information Science (On Leave)",
      period: "2020 – Present",
      description:
         "Studied data structures, algorithms, machine learning, natural language processing, and database systems. Gained experience through research projects and academic competitions.",
   },
];

export const PROJECTS = [
   {
      title: "NLP & Image Classification Research",
      image: project1,
      description:
         "Developed machine learning models for image classification using CNNs and implemented Japanese language processing using MeCab. Achieved 92% accuracy on test datasets.",
      technologies: ["Python", "PyTorch", "NumPy", "OpenCV", "MeCab"],
   },
   {
      title: "Text Encryption/Decryption Web App",
      image: project2,
      description:
         "Built a web application that allows users to encrypt and decrypt text using algorithms like AES and RSA. Integrated Firebase for authentication and data handling.",
      technologies: ["React", "JavaScript", "Firebase", "Git"],
   },
   {
      title: "Biometric-Controlled Hearable App",
      image: project3,
      description:
         "Created a Flutter mobile app that connects to biometric earphones and controls a prosthetic hand based on real-time sensor data. Designed a user-friendly interface for live monitoring.",
      technologies: ["Flutter", "Dart", "Bluetooth API", "Sensors"],
   },
   {
      title: "Personal Portfolio Website",
      image: project4,
      description:
         "A responsive portfolio website to showcase personal projects, skills, and contact information. Built using modern frontend tools and deployed as a static site.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Git", "Vercel", "Threejs"],
   },
];

export const CONTACT = {
   address: "939 Home Street, Vancouver, BC, Canada",
   phoneNo: "+1 (236)997-8351 ",
   email: "ayumu.miyamoto9501@gmail.com ",
};
