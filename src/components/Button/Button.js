import React from 'react';
import './Button.css';

function Button({ onClick, children, type = 'button' }) {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
