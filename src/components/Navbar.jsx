import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Devmanoj.png";
import { NAVIGATION_LINKS } from "../constants";
//
import { FaLinkedin, FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

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

function Navbar() {
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
        behavior: "smooth",
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
             <img src={logo} alt="logo" width={150} />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-blue-200"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* MOBILE Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img className="m-2" src={logo} alt="logo" width={90} />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
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

      {/* //side */}

        <motion.div className="m-8 flex flex-col item-center justify-center gap-4 text-2xl mt-20 lg:top-5 right-0 lg:right-8 fixed cursor-pointer ">
            <motion.a 
            variants={iconVariants(2.2)}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 3 }}
             href="https://www.linkedin.com/in/manoj-singh-4a4131280/"
             target="_blank">
                <FaLinkedin/>

            </motion.a>
            <motion.a variants={iconVariants(2.2)}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 3 }}
                href="https://github.com/manojsingh00963"
             target="_blank">
            <FaGithub />

            </motion.a>
            <motion.a variants={iconVariants(2.2)}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 3 }}
                href="https://www.instagram.com/accounts/login/"
             target="_blank">
            <FaInstagramSquare />
            </motion.a>

            <motion.a variants={iconVariants(2.2)}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 3 }}
                href="https://x.com/manojsingh10101"
             target="_blank">
            <FaXTwitter />
            </motion.a>
        </motion.div>
    </div>
  );
}

export default Navbar;
