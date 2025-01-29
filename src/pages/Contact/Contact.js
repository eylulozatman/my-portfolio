import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header'; // Assuming you have this component
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="main">
        <h1>Contact</h1>
        <div className="circle-container">
          {/* Mail Section */}
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:eylulozatman@gmail.com" target="_blank" rel="noopener noreferrer">
              eylulozatman@gmail.com
            </a>
          </div>
          {/* LinkedIn Section */}
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/eylulozatman/" target="_blank" rel="noopener noreferrer">
               LinkedIn Profile
            </a>
          </div>
          {/* GitHub Section */}
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/eylulozatman" target="_blank" rel="noopener noreferrer">
               GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
