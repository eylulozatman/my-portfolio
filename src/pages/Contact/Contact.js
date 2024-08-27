import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Contact() {
  return (
    <div className="contact-page">

      <Header></Header>
      <div className='main'>
      <h1>Contact</h1>
        <div className="contact-info">
          <p ><strong>Email:</strong>  <a href="eylulozatman@gmail.com" target="_blank" rel="noopener noreferrer"></a>eylulozatman@gmail.com </p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/eyl%C3%BCl-%C3%B6zatman-8a5a30204/" target="_blank" rel="noopener noreferrer">linkedin.com/in/myprofile</a></p>
        </div>
      </div>
      <Footer></Footer>
    </div>
   
  );
}

export default Contact;
