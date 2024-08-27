import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BouncingSection  from '../../components/BouncingSection/BouncingSection ';
import Button from '../../components/Button/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';



function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main >
        <section className="hero-section">
      
        <BouncingSection>  
          <section className='name-sec'> 
            <h1>Eylül Özatman</h1>
            <h2>Software Engineer</h2>   
          </section>
        </BouncingSection>
          
         
        <section className='projects-btn'>
            <i className="bi bi-arrow-bar-down"></i>
            <BouncingSection>
            <Button 
                className="custom-button" 
                id="pbtn" 
                onClick={() => window.location.href = '#/projects'}
              >
               My Projects
            </Button>                
            
            </BouncingSection>
          </section>
        
        </section>
        <section className="about-section">
        <h2>About Me</h2>
          <p>Hi! I’m a Software Engineer from Yaşar University, graduated in 2024.<i class="bi bi-mortarboard-fill"></i> I love working on new ideas and exciting projects.
          Always ready for a challenge, I’m eager to turn creative concepts into reality and make an impact with my work. I’m driven by curiosity and passionate about exploring the latest technologies. 
          </p>
          <p> Let’s build something great together!</p>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
        </svg>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;
