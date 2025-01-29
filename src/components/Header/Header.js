import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="nav-container">
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/projects')}>Projects</Button>
        <Button onClick={() => navigate('/contact')}>Contact</Button>
      </nav>
    </header>
  );
}

export default Header;
