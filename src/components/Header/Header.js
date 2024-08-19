// src/components/Header/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Bir önceki sayfaya geri döner
  };

  return (
    <header className="header">
      <button className="back-button" onClick={handleBackClick}>
        Home
      </button>
      <h1 className="header-title">My Portfolio</h1>
    </header>
  );
}

export default Header;
