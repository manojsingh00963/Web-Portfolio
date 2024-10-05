import React from 'react'
import { BIO } from '../constants'
import { motion } from 'framer-motion'

export default function Bio() {
  return (
    <section className=" flex max-w-4xl flex-col gap-12 pt-20 " id="bio">
      <motion.h1
        whileInView={{ opacity: 1, z: 1 }}
        initial={{ opacity: 0, z: -100 }}
        transition={{ duration: 10 }}
        className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
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
          className='mb-4 text-lg lg:text-xl' key={index}>{bio}</motion.p>)}
      </motion.div>
    </section>
  )
}
