import React, { useEffect } from 'react';
import mainImg from '../assets/main.jpg';
import { HERO } from '../constants/index';
import { motion } from 'framer-motion';

// Function to handle 3D image effect (ATVImage)
function atvImg() {
  const imgs = document.querySelectorAll('.atvImg');
  imgs.forEach((img) => {
    let layers = img.querySelectorAll('.atvImg-layer');
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const offsetX = 0.5 - x / rect.width;
      const offsetY = 0.5 - y / rect.height;
      const rotateX = offsetY * 20;
      const rotateY = offsetX * -20;
      
      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      layers.forEach((layer, i) => {
        const depth = i * 10;
        layer.style.transform = `translateZ(${depth}px) translate(${offsetX * depth}px, ${offsetY * depth}px)`;
      });
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = `rotateX(0deg) rotateY(0deg)`;
      layers.forEach((layer) => {
        layer.style.transform = `translateZ(0px) translate(0px, 0px)`;
      });
    });
  });
}

// Animation container for text
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, delay: delay }
  }
});

function Hero() {
  useEffect(() => {
    atvImg();
  }, []);

  return (
    <section className='flex min-h-screen flex-wrap items-center tracking-wide mt-10 '>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-full md:w-1/2 '>
        
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className='my-8 p-2 text-1xl font-bold md:text-1xl lg:text-[3rem]'>
          {HERO.name}
        </motion.h2>

        <motion.span
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-sky-300 to-purple-500
              bg-clip-text text-4xl tracking-tight text-transparent ml-40 ">
          Full Stack Developer
        </motion.span>

        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className='p-2 text-3xl tracking-tighter lg:text-4xl mt-2'>
          {HERO.greet}
        </motion.p>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className='mb-8 p-2 text-xl'>
          {HERO.description}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className='w-full md:w-1/2 lg:p-8'>

        <div className='flex justify-center atvImg'>
          {/* ATV Image layers for 3D effect */}
          <div className="atvImg-layer" data-img={mainImg}></div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className='rounded-3xl'
            src={mainImg} alt="Logo" width={550} height={550} />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
