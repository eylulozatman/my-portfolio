// src/components/Header/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';



function Header() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Bir önceki sayfaya geri döner
  };

  const contactPage = () => { window.location.href = '#/contact'}

  return (
    <header className="header">

      <div className='btn-container'>
        <button  id="back-button" onClick={handleBackClick}>
          Home
        </button>
        <button  id="contact-button" onClick={contactPage}>
          Contact
        </button>
      </div>
 
      <h1 className="header-title">My Portfolio</h1>
    </header>
  );
}

export default Header;
