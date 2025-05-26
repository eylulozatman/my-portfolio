// src/pages/AcProjects/AcProjects.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AcProjects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import projectsLinks from '../../data/AcLinks';

function AcProjects() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="ac-projects-container">
        <h1>Accessible Projects</h1>
        <div className="projects-list-ac">
          {projectsLinks.map(project => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.title}
            </a>
          ))}
        </div>
        <div className="back-home-btn">
          <Button onClick={() => navigate('/')}>Back</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AcProjects;
