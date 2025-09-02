import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import AboutMeAnim from '../../components/AboutMeAnim/AboutMeAnim';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import Contact from '../../components/Contact/Contact';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview'; 
import Navbar from '../../components/Navbar/Navbar'; 


function HomePage() {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      setVisibleSections({
        about: scrollPosition > (document.getElementById('about-me-section')?.offsetTop || 0) + 100,
        skills: scrollPosition > (document.getElementById('skills-section')?.offsetTop || 0) + 100,
        projects: scrollPosition > (document.getElementById('projects-section')?.offsetTop || 0) + 100,
        contact: scrollPosition > (document.getElementById('contact-section')?.offsetTop || 0) + 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
       <Navbar />
      {/* Header ve Skills Yan Yana */}
      <div className="header-skills-container">
        <div>
          <Header />
          <p className="header-description">
            Creating innovative solutions through code and creativity
          </p>
        </div>
        <div className="skills-container">
          <SkillsSection />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about-me-section" className={`about-me-section ${visibleSections.about ? 'visible' : ''}`}>
        <AboutMeAnim />
     
      </section>

      {/* Projects Section - Yeni ProjectPreview componenti */}
      <section id="projects-section" className={`projects-section ${visibleSections.projects ? 'visible' : ''}`}>
        <h2>Featured Projects</h2>      
        <ProjectPreview />
        
        <div className="projects-actions">
          <Button onClick={() => navigate('/projects')} className="view-all-btn">
            View All Projects
          </Button>
          
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
}

export default HomePage;