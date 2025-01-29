import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

  
      <section className="hero-section"> 
      <Header />
        <div className="hero-text">
          <h1 className="myname">Eylül Özatman</h1>
          <p className="intro">
            <span className="software-engineer-text">Software Engineer</span>
          </p>
        </div>
      </section>

      <div className="content">
        {/* About Me Section */}
        <section className="about-me-section">
          <div className="about-me-container">
            <h2>About Me</h2>
            <div className="profile-img-container">
              <img src={process.env.PUBLIC_URL + '/photos/myicon.png'} alt="Eylül Özatman" className="profile-img" />
            </div>
            <p>Hi! I'm Eylül Özatman, a Software Engineer passionate about technology and problem-solving. I graduated from Yaşar University in 2024, and I'm always excited to work on new ideas and innovative projects. My curiosity drives me to explore the latest technologies, and I'm eager to turn creative concepts into reality.</p>
            <Button onClick={() => navigate('/projects')} className="about-me-btn">Check out my Projects</Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
