import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPreview.css';
import projectsLinks from '../../data/AcLinks';

const ProjectPreview = () => {
  const navigate = useNavigate();
  
  // İlk 5 projeyi göster
  const featuredProjects = projectsLinks.slice(0, 5);

return (
  <div className="project-preview">
    <div className="projects-grid">
      {featuredProjects.map(project => (
        <div key={project.id} className="project-card">
          {/* Project Image */}
          <div className="project-image">
            <img src={project.thumbnail} alt={project.title} />
            <div className="project-overlay">
              <button 
                className="view-details-btn"
                onClick={() => navigate(`/projects/ac/${project.id}`)}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Project Content */}
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 120)}...</p>
          </div>

          {/* Hover ile alttan çıkan link section */}
          <div className="project-extra">
            {project.links && project.links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.includes('github.com') ? 'GitHub' : 
                 link.includes('youtu.be') ? 'Demo Video' : 'View Project'}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default ProjectPreview;