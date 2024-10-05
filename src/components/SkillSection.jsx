import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from 'framer-motion';
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",

    }
  }

})

function SkillSection() {
  return (
    <div className="mx-2 w-full flex flex-col  px-4 py-2 lg:px-20 border-t-2 border-b-2 border-stone-50/30 " id='skills'>

    <div className=" py-10 pd-24 mb-8  " >
      <motion.h1
      whileInView={{opacity:1,y:0}} 
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className=" my-20 text-center text-4xl ">Skill&apos;s</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className=" flex flex-wrap items-center justify-center gap-4 " >
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaHtml5 className=" text-xl text-orange-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaCss3 className=" text-xl text-blue-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaJsSquare className=" text-xl text-yellow-500 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaPython className=" text-xl fill-blue-600  " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaNodeJs className=" text-xl text-green-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-3 ">
          <RiReactjsLine className=" text-xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <TbBrandNextjs className=" text-xl text-white-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-3 ">
          <SiExpress className=" text-xl text-white-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className=" rounded-full bg-green-950 border-4 border-neutral-800 p-3 ">
          <SiMongodb className=" text-xl text-green-400  " />
        </motion.div>
      </motion.div>
    </div>
    </div>
  )
}

export default SkillSection