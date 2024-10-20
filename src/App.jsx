import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection'
import About from './components/About';
import SkillSection from './components/SkillSection';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackScroll from './components/BackScroll';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  
  const togglemode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`relative h-full overflow-y-auto antialiased transition-colors duration-500 ease-in-out ${
        darkMode ? 'bg-gray-800 text-neutral-200' : 'bg-indigo-100 text-neutral-900'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar togglemode={togglemode} darkMode={darkMode} />
        <Hero darkMode={darkMode}  />
        <ProjectSection darkMode={darkMode} />
        <About darkMode={darkMode}  />
        <SkillSection darkMode={darkMode}  />
        <WorkExperience darkMode={darkMode}  />
        <EducationSection darkMode={darkMode}  />
        <ContactForm darkMode={darkMode}  />
        <Footer darkMode={darkMode}  />
        <BackScroll darkMode={darkMode}  />
      </div>
    </div>
  );
}

export default App;
