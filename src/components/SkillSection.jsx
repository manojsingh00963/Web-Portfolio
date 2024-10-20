import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaPython } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// eslint-disable-next-line react/prop-types
function SkillSection({ darkMode }) {
  return (
    <div className={`mx-2 w-full flex flex-col py-4 lg:pb-20 px-4 lg:px-20 border-t border-b ${darkMode ? "border-slate-500" : "border-neutral-800"}`} id='skills'>
      <div className="py-10 pd-24 mb-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Skills
        </motion.h1>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6 px-4 "
        >
          {[
            { icon: <FaHtml5 className=" text-xl lg:text-2xl text-orange-600" />, label: 'HTML5' },
            { icon: <FaCss3 className=" text-xl lg:text-2xl text-blue-600" />, label: 'CSS3' },
            { icon: <FaJsSquare className=" text-xl lg:text-2xl text-yellow-500" />, label: 'JavaScript' },
            { icon: <FaPython className=" text-xl lg:text-2xl text-blue-600" />, label: 'Python' },
            { icon: <FaNodeJs className=" text-xl lg:text-2xl text-green-600" />, label: 'Node.js' },
            { icon: <RiReactjsLine className=" text-xl lg:text-2xl text-cyan-400" />, label: 'React' },
            { icon: <TbBrandNextjs className={` text-xl lg:text-2xl ${darkMode ? "text-slate-200" : "text-neutral-800"}`} />, label: 'Next.js' },
            { icon: <SiExpress className={` text-xl lg:text-2xl ${darkMode ? "text-slate-200" : "text-neutral-800"}`} />, label: 'Express' },
            { icon: <SiMongodb className=" text-xl lg:text-2xl text-green-400" />, label: 'MongoDB' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={iconVariants(2 + index * 0.3)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center "
            >
              <div
                className={`flex items-center justify-center rounded-full border-4 p-2 mb-2
                  ${darkMode ? "border-slate-400 bg-slate-800" : "border-neutral-800 bg-transparent "}
                `}
              >
                {skill.icon}
              </div>
              <motion.p className={`text-center font-light ${darkMode ? "text-slate-200" : "text-neutral-800"} 
                text-sm lg:text-md`}
              >
                {skill.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillSection;
