import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from '../assets/Devmanoj.png';
import { NAVIGATION_LINKS } from '../constants';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

// eslint-disable-next-line react/prop-types
function Navbar({togglemode, darkMode}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      const offset = -85; // Adjust this value based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={100} />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index} className="relative group">
                    <a
                      className={` text-sm ${darkMode ? " font-normal " : " font-medium " } ${darkMode ? "hover:text-violet-400" : "hover:text-purple-100" } transition-colors duration-200 `}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                      <span className={`absolute left-0 right-0 h-0.5 ${darkMode ? "bg-violet-300" : "bg-slate-800" } bottom-0 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}/>
                  </li>
                ))}
              {/* Mode toggle */}
        <li className=' list-none '>
          {darkMode ? (
            <IoSunny onClick={togglemode} className="text-2xl text-neutral-200 cursor-pointer" />
          ) : (
            <BsFillMoonStarsFill onClick={togglemode} className="text-2xl text-neutral-900 cursor-pointer" />
          )}
        </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img className="m-2" src={logo} alt="logo" width={90} />
              </a>
            </div>
            
            <div className="flex items-center">
            {/* Mode toggle */}
            <li className='list-none mr-4 '>
                  {darkMode ? (
                    <IoSunny onClick={togglemode} className="text-2xl text-neutral-200 cursor-pointer" />
                  ) : (
                    <BsFillMoonStarsFill onClick={togglemode} className="text-2xl text-neutral-900 cursor-pointer" />
                  )}
                </li>
              <button className="focus:outline-none" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div className="m-8 flex flex-col items-center justify-center gap-4 text-2xl mt-20 lg:top-5 right-[-20px] lg:right-8 fixed cursor-pointer">
        <motion.a
        className=' hover:text-gray-600 '
          variants={iconVariants(2.2)}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          href="https://www.linkedin.com/in/manoj-singh-4a4131280/"
          target="_blank"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
        className=' hover:text-gray-600 '
          variants={iconVariants(2.2)}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1.5 }}
          href="https://github.com/manojsingh00963"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
        <motion.a
        className=' hover:text-gray-600 '
          variants={iconVariants(2.2)}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 2.5 }}
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
        >
          <FaInstagramSquare />
        </motion.a>
        <motion.a
        className=' hover:text-gray-600 '
          variants={iconVariants(2.2)}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 3.5 }}
          href="https://x.com/manojsingh10101"
          target="_blank"
        >
          <FaXTwitter />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Navbar;