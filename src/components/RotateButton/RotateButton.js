import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './RotateButton.css';

const RotateButton = ({ onClick, children }) => {
  const [styles, api] = useSpring(() => ({
    x: 0,
    rotateZ: 0,
    config: { duration: 600 }, // Animasyon süresini uzat
  }));

  const handleClick = () => {
    api.start({
      to: [
        { x: 200, rotateZ: 360 }, // Dönüşü iki katına çıkar (360 -> 720)
        // { x: 0, rotateZ: 0 },     // Sonrasında orijinal pozisyona dön
      ],
      reset: true,
      onRest: onClick, // Animasyon tamamlandıktan sonra onClick işlevini çalıştır
    });
  };

  return (
    <animated.button
      style={{
        transform: styles.x.to(x => `translateX(${x}px)`),
        rotateZ: styles.rotateZ.to(r => `${r}deg`),
      }}
      className="rotate-button"
      onClick={handleClick}
    >
      {children}
    </animated.button>
  );
};

export default RotateButton;
