import { useEffect, useRef } from 'react';
import { GiReturnArrow } from "react-icons/gi";

function BackToTopButton() {
  const backToTopButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopButtonRef.current.style.display = 'block';
      } else {
        backToTopButtonRef.current.style.display = 'none';
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
      ref={backToTopButtonRef}
      onClick={handleClick}
      className="fixed bottom-14 right-10 p-3 bg-transparent border text-white rounded-full hidden"
    >
    <GiReturnArrow/>
    </button>
  );
}

export default BackToTopButton;
