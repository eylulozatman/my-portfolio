import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BouncingSection from '../../components/BouncingSection/BouncingSection ';

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <h1 id='title'>Projects</h1>
      <div className="projects-list">
        {projectsData.map(project => (
         
         <BouncingSection> 
          
          <div className="project-item">
              <div className='project-info'>
                <h1>{project.title}</h1>
                <p>{project.description.substring(0, 100)}...</p>
                <div className='link'>
                  <Link to={`/projects/${project.id}`}><i className="bi bi-arrow-bar-right"></i> View Details</Link>
                </div>
              </div>
              <div className='project-photo'>
                <img src={project.thumbnail} alt={project.title} />
              </div>
            </div>
          </BouncingSection>
           
         
        ))}
      </div>
    </div>
  );
}

export default Projects;
