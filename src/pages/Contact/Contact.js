import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="main">
        <h1>Contact</h1>
        <div className="contact-container">
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
            <a href="https://www.linkedin.com/in/eyl%C3%BCl-%C3%B6zatman-8a5a30204/" target="_blank" rel="noopener noreferrer">
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
          {/* <div className="contact-item">
            <FaDownload className="icon" />
            <a href="/public/cv/mycv.pdf" download="mycv.pdf">
              Download My CV
            </a>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
