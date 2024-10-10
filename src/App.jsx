import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import SkillSection from './components/SkillSection';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTopButton from './components/BackTotopButton';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true); // use boolean for simplicity
  const togglemode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative h-full overflow-y-auto antialiased ${darkMode ? ' text-neutral-200 ' : ' text-gray-700' } ${darkMode ? 'bg-gray-950' : 'bg-purple-200'}`}>
      {/* black bg */}
      <div className={`top-0 z-[-2] fixed h-screen w-screen ${darkMode ? 'bg-gray-800' : 'bg-purple-200'} bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}></div>
      {/* other bg */}
      {/* <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img "></div> */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar togglemode={togglemode} darkMode={darkMode} />
        <Hero />
        <Projects />
        <About />
        <SkillSection />
        <WorkExperience />
        <EducationSection />
        <ContactForm />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default App;
