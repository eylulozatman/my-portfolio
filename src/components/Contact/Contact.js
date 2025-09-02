import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact-section" className="contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:eylulozatman@gmail.com">
            eylulozatman@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/eyl%C3%BCl-%C3%B6zatman-8a5a30204/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/eylulozatman" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;