import React, { useState } from 'react';
import './FlipCard.css';
import Button from '../Button/Button'; // Projeye gitmek için buton

function FlipCard({ frontImg, frontTitle, frontSubtitle, backContent }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        {/* Ön Yüz */}
        <div className="flip-card-front">
          <img src={frontImg} alt="profile" className="flip-card-img" />
          <h3>{frontTitle}</h3>
          <p>{frontSubtitle}</p>
        </div>

        {/* Arka Yüz */}
        <div className="flip-card-back">
          <div className="back-content">
            <Button onClick={() => window.location.href = '#/projects'}>View Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
