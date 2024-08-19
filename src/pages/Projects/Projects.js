import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import BouncingSection from '../../components/BouncingSection/BouncingSection ';

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <h1 id='title'>Projects</h1>
      <div className="projects-list">
        {projectsData.map(project => (
          <BouncingSection> 
            <div key={project.id} className="project-item">
            <img src={project.thumbnail} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description.substring(0, 100)}...</p>
            <Link to={`/projects/${project.id}`}><i class="bi bi-arrow-bar-right"></i> View Details</Link>
          </div>
          </BouncingSection>
          
        ))}
      </div>
    </div>
  );
}

export default Projects;
