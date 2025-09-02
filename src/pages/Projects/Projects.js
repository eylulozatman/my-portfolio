import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import projectsData from '../../data/projectsData';
import Navbar from '../../components/Navbar/Navbar';

const ProjectItem = ({ project, navigate }) => (
  <div className="project-item">
    <div className="project-content">
      <div className="project-image">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-overlay">
          <button 
            className="view-details-btn"
            onClick={() => navigate(`/projects/normal/${project.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
      
      <div className="project-details">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description.substring(0, 200)}...</p>
        
  
        <div className="project-actions">
      
          
          {project.links && project.links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {link.includes('github.com') ? 'GitHub' : 
               link.includes('youtu.be') ? 'Live Demo' : 'View Project'}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    <button
      className="pagination-btn"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      &lt; Previous
    </button>
    
    <div className="page-numbers">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
    
    <button
      className="pagination-btn"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next &gt;
    </button>
  </div>
);

function Projects() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4; // Daha az proje göster, daha geniş olsun

  // Projeleri ters sırala (en yeniler üstte)
  const reversedProjects = [...projectsData].reverse();

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = reversedProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(reversedProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-container">
        <div className="projects-header">
          <h1>All Projects</h1>
          <p className="projects-subtitle">
            A comprehensive collection of my work. Each project represents a unique challenge and learning experience.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="back-home-btn"
          >
            ← Back to Home
          </Button>
        </div>

        <div className="projects-list">
          {currentProjects.map((project) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              navigate={navigate} 
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Projects;