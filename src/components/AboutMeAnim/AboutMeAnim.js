import React, { useEffect, useState } from 'react';
import './AboutMeAnim.css';

function AboutMeAnim() {
  const [visible, setVisible] = useState(false);
  const [showCap, setShowCap] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 500);
    const timer2 = setTimeout(() => setShowCap(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div id="about-me-section" className={`about-me-container ${visible ? 'fade-in' : ''}`}>
      {/* Profil Foto */}
      <div className="profile-img-container">
        <img 
          src={process.env.PUBLIC_URL + '/photos/mypp.jpg'} 
          alt="Eylül Özatman" 
          className="profile-img"
        />
      </div>

      {/* Hakkımda Metin */}
      <div className="about-me-text">
        <p>
          Hi, I'm Eylül , a Software Engineer with a passion for learning and building meaningful solutions.
          I enjoy turning ideas into practical projects and continuously improving my skills.
          I strive to create efficient and innovative software through curiosity and dedication.
        </p>
      </div>

      {/* Mavi Ayırıcı Çizgi */}
      <div className="divider"></div>

      {/* Education Bölümü */}
      <div className="education-section">
        <h3>🎓 Education</h3>
        <div className="edu-card">
          <p><strong>Yaşar University</strong> – Software Engineering (BSc)</p>
          <p>2019 - 2024 {showCap && <span className="grad-cap">🎓</span>}</p>
      
        </div>
      </div>
    </div>
  );
}

export default AboutMeAnim;
