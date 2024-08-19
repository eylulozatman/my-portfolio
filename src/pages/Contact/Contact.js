import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>İletişim</h1>
      <div className="contact-info">
        <p><strong>Telefon:</strong> +90 123 456 7890</p>
        <p><strong>Email:</strong> example@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      </div>
    </div>
  );
}

export default Contact;
