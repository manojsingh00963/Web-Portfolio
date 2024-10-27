import { BIO } from '../constants';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function About({darkMode}) {
  return (
    <section className=" flex max-w-4xl flex-col  p-10 " id="About">
      <motion.h1
        whileInView={{ opacity: 1, z: 1 }}
        initial={{ opacity: 0, z: -100 }}
        transition={{ duration: 10 }}
        className="my-10 text-center text-4xl">
        About<span className={` ${darkMode ? "text-neutral-500" : "text-neutral-700"}  `}> Me</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {BIO.map((bio, index) => <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.5 }}
          className='mb-4 text-lg lg:text-sm text-justify mx-auto ' key={index}>{bio}</motion.p>)}
      </motion.div>
    </section>
  )
}
