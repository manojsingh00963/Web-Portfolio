import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section className="pt-20 border-t  border-b border-neutral-800 pb-20 " id="projects">
      <motion.h2 
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      className="mb-20 text-center text-neutral-400 text-3xl lg:text-4xl">Projects</motion.h2>
      <div className=" mx-6 text-xs grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {PROJECTS.map((project) => (
          <motion.div
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.5}}
          whileHover={{scale:1.05}}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <motion.img
            whileHover={{scale:1.1}}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Fixed typo: 'gorup-hover' -> 'group-hover' */}
            <motion.div 
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            transition={{duration:0.5}}
            className="absolute inset-0 flex flex-col items-center justify-center text-neutral-800 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-1 text-sm">{project.name}</h3>
              <p className="mb-2 p-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
