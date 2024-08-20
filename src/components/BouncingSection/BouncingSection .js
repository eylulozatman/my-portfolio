import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './BouncingSection.css'; 

const BouncingSection = ({ children }) => {
  const [styles, api] = useSpring(() => ({
    y: 0,  
    config: { tension: 300, friction: 10 },
  }));

  const handleClick = () => {
    api.start({
      to: [
        { y: -5 }, // Zıplama hareketi için yukarıya doğru hareket
        { y: 0 },   // Eski pozisyona geri dönme
      ],
      reset: true, 
    });
  };

  return (
    <animated.section
      style={{ transform: styles.y.to(y => `translateY(${y}px)`) }}
      className="bouncing-section"
      onClick={handleClick}
    >
      <animated.div style={{ transform: styles.y.to(y => `translateY(${y}px)`) }}>
        {children}
      </animated.div>
    </animated.section>
  );
};

export default BouncingSection;
