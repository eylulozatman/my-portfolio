import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

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

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-controls">
          <button className="theme-toggle mobile" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="navbar-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

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
