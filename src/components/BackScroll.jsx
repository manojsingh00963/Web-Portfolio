import { useEffect, useRef } from 'react';
import { GiReturnArrow } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
function BackScroll({darkMode}) {
  const BackScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        BackScrollRef.current.style.display = 'block';
      } else {
        BackScrollRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={BackScrollRef}
      onClick={handleClick}
      className={`fixed bottom-14 right-1 lg:right-10 p-2 lg:p-3 bg-transparent border ${darkMode ? "text-gray-100" : "text-gray-800" }  ${darkMode ? "border-zinc-100" : "border-zinc-900"} ${darkMode ? "hover:bg-gray-100" : "hover:bg-gray-700"} ${darkMode ? "hover:text-gray-800" : "hover:text-pink-200" } rounded-full hidden`}
    >
    <GiReturnArrow/>
    </button>
  );
}

export default BackScroll;
