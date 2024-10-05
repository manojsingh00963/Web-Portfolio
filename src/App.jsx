import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationSection from './components/EducationSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


import { useEffect,useRef } from 'react'
import Card from './components/card/Card'

function backToTopButton(){
  const backToTopButtonRef = useRef(null)

  useEffect(() =>{
    const handleScroll = ()=>{
      if(window.scrollY>200){
        backToTopButtonRef.current.style.display = 'block';
      }else{
        backToTopButtonRef.current.style.display = 'none';
      }
      };
      window.addEventListener('scroll',handleScroll);
      return()=>{
        window.removeEventListener('scroll',handleScroll);
      } 
      },[])
      const handleClick = ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
      };
      return(
        <button ref={backToTopButtonRef}
        onClick={handleClick}>Backtotop</button>
      );
    }



function App() {
  return (
       <div className=" relative h-full overflow-y-auto antialiased text-neutral-300  ">
    {/* <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img "></div> */}
    <div className="top-0 z-[-2] fixed h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className="realtive z-10 flex flex-col items-center p-4 space-y-8 container mx-auto ">
    <Hero/>
    <Navbar/>
    <Projects/>
    <Bio/>
    <Skills/>
    <WorkExperience/>
    <EducationSection/>
    <ContactForm/>
    <Footer/>
    {/* <Card/> */}
    <button id="backToTopButton" onClick={backToTopButton}>Back to top</button>
    </div>
    </div>
  )
}

export default App
