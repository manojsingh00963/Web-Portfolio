import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Bio from './components/Bio';
import SkillSection from './components/SkillSection';
import WorkExperience from './components/WorkExperience';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton'; // Importing the new component

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased text-neutral-300">
      <div className="top-0 z-[-2] fixed h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img "></div> */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <SkillSection/>
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
