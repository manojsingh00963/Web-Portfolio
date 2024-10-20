import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function EducationSection({darkMode}) {
  return (
      <section className={` lg:pb-32 border-b ${darkMode ? "border-slate-500" : "border-neutral-800" } pb-4 `} id="education">
    <motion.h1
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-50}}
    transition={{duration:1}}
     className="mb-4 my-20 text-center text-3xl font-bold" >Education</motion.h1>
      {/* <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-4 text-center text-3xl font-bold'>Education</motion.h2> */}
      {EDUCATION.map((edu, index) => (
        <motion.div
        initial={{opacity:0,x:-20}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1,delay:index * 0.5}}
         key={index} className="mb-6 p-10">
          <h3 className=' text-xl font-semibold '>{edu.degree}</h3>
          <p className='text-lg'>{edu.institution}</p>
          {/* TODO SOTNE COLOR  */}
          <p className={`text-sm ${darkMode ? " text-stone-400" : "text-stone-900" } `}>{edu.duration}</p>
          <p className='mt-2'>{edu.description}</p>
        </motion.div>
      ))}

    </section>
  )
}
