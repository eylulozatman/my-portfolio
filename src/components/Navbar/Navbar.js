import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.includes(path);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand" onClick={() => navigateTo('/')}>
          <span className="navbar-logo">EÖ</span>
          <span className="navbar-name">Eylül Özatman</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <button 
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
            onClick={() => navigateTo('/')}
          >
            Home
          </button>
          <button 
            className={`nav-item ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => navigateTo('/projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-item ${isActive('/#contact-section') ? 'active' : ''}`}
            onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('contact-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              } else {
                navigateTo('/');
                setTimeout(() => {
                  document.getElementById('contact-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }, 100);
              }
            }}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
            onClick={() => navigateTo('/')}
          >
            Home
          </button>
          <button 
            className={`nav-item ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => navigateTo('/projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-item ${isActive('/#contact-section') ? 'active' : ''}`}
            onClick={() => {
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('contact-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              } else {
                navigateTo('/');
                setTimeout(() => {
                  document.getElementById('contact-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }, 100);
              }
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;