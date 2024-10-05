import logo from '../assets/Devmanoj.png';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from 'framer-motion';


export default function Footer() {
  return (
    <div className='mb-8 mt-20'>
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          src={logo} width={200} alt="logo" className='my-20' />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (<motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5,delay:0.5 * index }}
          key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
          {link.icon}
        </motion.a>))}
      </div>
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>&copy;Copyright-2024. All rights reserved.</p>
    </div>
  )
}
