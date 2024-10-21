import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BouncingSection from '../../components/BouncingSection/BouncingSection';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Get current projects for the page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total pages
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="projects-page">
      <Header />
      <h1 id='title'>Projects</h1>
      <div className="projects-list">
        {currentProjects.map((project) => (
          <BouncingSection key={project.id}>
            <div className="project-item">
              <div className='project-info'>
                <h1 id='project-title'>{project.title}</h1>
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

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
