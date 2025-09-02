import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Random yüz seçmek için X ve Y açılarını 90 veya 180 katlarıyla değiştir
      const faceIndex = Math.floor(Math.random() * 6);
      const angles = [
        { x: 0, y: 0 },       // front
        { x: 0, y: 180 },     // back
        { x: 90, y: 0 },      // top
        { x: -90, y: 0 },     // bottom
        { x: 0, y: -90 },     // left
        { x: 0, y: 90 }       // right
      ];
      setRotation(angles[faceIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skills-section-container">
      <div className="dice-container">
        <div 
          className="cube auto-rotate" 
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          {skills.map((skill, index) => (
            <div key={index} className={`cube-face ${['front','back','top','bottom','left','right'][index]}`}>
              <div className="skill-content">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
