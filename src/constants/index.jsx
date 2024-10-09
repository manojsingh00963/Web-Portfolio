import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import Dict from "../assets/img/Dict.jpg"
import Todo from "../assets/img/Todo.jpg"
import Weather from "../assets/img/Weather.jpg"
import coder from "../assets/img/coder.jpg"
import Blog from "../assets/img/Blog.jpg"
import Chat from "../assets/img/Chat.jpg"
import Ecommerce from "../assets/img/Ecommers.jpg"
import Weather1 from "../assets/img/Final weather icon_.jpg"


// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { title } from "framer-motion/client";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Manoj singh",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: coder,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: Ecommerce,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: Todo,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: Weather1,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/My-Weather_App",
  },
  {
    id: 5,
    name: "Dictionary App",
    description:
      "A weather application that utilizes the Dictionary API to retrieve and present current weather data and forecasts for diverse locations, developed using React and styled-components.",
    image: Dict,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/Dictionary-App",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: Blog,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: Chat,
    githubLink: "https://github.com/user/chat-application",
  },
];

// export const BIO = [
//   "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
//   "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
//   "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
// ];

export const BIO = [
  "I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of experience, I have worked with a variety of technologies, including React, Next.js, Node.js, and MongoDB. My journey in web development started with a deep curiosity for how things work, and it has evolved into a career where I constantly strive to learn and adapt to new challenges. I thrive in collaborative environments, enjoy solving complex problems, and delivering high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects."
]

// export const SKILLS = [
//   {
//     icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
//     name: "React",
//     experience: "2+ years",
//   },
//   {
//     icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
//     name: "Next.js",
//     experience: "1+ year",
//   },
//   {
//     icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "MongoDB",
//     experience: "1.5+ years",
//   },
//   {
//     icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
//     name: "Redis",
//     experience: "1+ year",
//   },
//   {
//     icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "Node.js",
//     experience: "2+ years",
//   },
//   {
//     icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
//     name: "PostgreSQL",
//     experience: "1+ year",
//   },
// ];

export const EXPERIENCES = [
  {
    title: "Full-stack, Training-Internship",
    company: "GeeksForGeeks",
    duration: "13-Jul : 6-Oct (2024) ",
    description: `I recently completed a three-month MERN stack internship at GeeksforGeeks, where I significantly enhanced my development skills. Through hands-on experience and mentorship, I successfully built two substantial projects that deepened my understanding of MongoDB, Express.js, React.js, and Node.js. This internship provided a valuable opportunity to learn from industry experts and grow my abilities as a full-stack developer.`
  },
  {
    title: "Fresher",
    company: "No work experiance.",
    duration: "-",
    description: ` While I do not yet have formal industry experience, I have     completed several personal projects demonstrating my dedication and skills. I 
        am eager to contribute with the same level of commitment and drive in a professional environment.`
  }

  // {
  //   title: "Lead Frontend Developer",
  //   company: "Innovative Tech Solutions",
  //   duration: "July 2020 - Present",
  //   description:
  //     "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  // },
  //   {
  //     title: "Frontend Engineer",
  //     company: "Digital Creations",
  //     duration: "February 2016 - June 2020",
  //     description:
  //       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  //   },
  //   {
  //     title: "Junior Web Developer",
  //     company: "Bright Future Technologies",
  //     duration: "August 2014 - January 2016",
  //     description:
  //       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  //   },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Aplication ",
    institution: "Indira Gandhi National Open University",
    duration: "june 2022 - (pursuing)",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/manojmani.rawat",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/1291994352171876426/1291994352171876429",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/accounts/login/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/manojsingh10101",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/manojsingh00963",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/manoj-singh-4a4131280/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
