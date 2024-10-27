// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// eslint-disable-next-line react/prop-types
export default function ProjectSection({ darkMode }) {
  return (
    <div
      className={`container mx-auto ${darkMode ? ' text-slate-200' : 'text-neutral-800'} py-20`}
      id='projects'
    >
      <h2 className={`mb-10 text-center text-4xl tracking-wide ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
        Projects
      </h2>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
        className={`mx-2 flex flex-col gap-5 rounded-2xl px-4 py-2 lg:px-20 border ${darkMode ? 'border-slate-500' : 'border-neutral-800'}`}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`py-6 flex gap-4 lg:gap-10 items-center justify-between border-b ${darkMode ? 'border-slate-400' : 'border-neutral-800'}`}
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className='w-20 h-20 object-cover rounded-lg' 
            />
            <div className={`text-xs text-justify lg:text-md w-60 lg:w-auto ${darkMode ? 'text-slate-200' : 'text-neutral-800'}`}>
              <h3 className={`pb-2 pt-4 text-lg lg:text-2xl ${darkMode ? 'text-slate-100' : 'text-neutral-700'}`}>{project.name}</h3>
              <div>{project.description}</div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center justify-center rounded-full px-2 py-1 text-black ${darkMode ? 'bg-slate-200 hover:bg-slate-300' : 'bg-slate-800 text-white hover:bg-gray-400'} transition-all duration-300 ease-in-out`}
              >
                <span className="mr-2">View on Github</span>
                <MdArrowOutward />
              </a>
              <a
                href={project.livePrivew}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 ml-4 inline-flex items-center justify-center rounded-full px-2 py-1 text-black ${darkMode ? 'bg-slate-200 hover:bg-slate-300' : 'bg-slate-800 text-white hover:bg-gray-400'} transition-all duration-300 ease-in-out`}
              >
              <span className="mr-2">Live Preview</span>
              <MdArrowOutward />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
