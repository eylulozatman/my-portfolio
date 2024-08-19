import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projectsData.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.thumbnail} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description.substring(0, 100)}...</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
