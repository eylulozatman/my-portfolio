import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <section className="hero-section">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Eylül Özatman, a passionate software engineer with a focus on back-end development and web technologies.</p>
          <a href="/projects" className="btn-primary">See My Projects</a>
        </section>
        <section className="about-section">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </section>
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>If you want to get in touch, feel free to <a href="/contact">contact me</a>.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
