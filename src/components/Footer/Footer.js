import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-content">
        <div className="footer-section">
          <h3>Eylül Özatman</h3>
          <p>Software Engineer passionate about creating innovative solutions</p>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="footer-links">
            <a href="mailto:eylulozatman@gmail.com" className="footer-link">
              <FaEnvelope className="footer-icon" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/eyl%C3%BCl-%C3%B6zatman-8a5a30204/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin className="footer-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/eylulozatman" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub className="footer-icon" />
              GitHub
            </a>
          </div>
        </div>
      </div> */}
      
      <div className="footer-bottom">
        <p>&copy; 2024 Eylül Özatman. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;