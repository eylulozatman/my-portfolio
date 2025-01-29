import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';
import Header from '../../components/Header/Header';
import BouncingSection from '../../components/BouncingSection/BouncingSection ';

const ProjectItem = ({ project }) => (
  <BouncingSection key={project.id}>
    <div className="project-item">
      <div className="project-photo">
        <img src={project.thumbnail} alt={project.title} />
      </div>
      <div className="project-info">
        <h1 className="project-title">{project.title}</h1>
        <p>{project.description.substring(0, 100)}...</p>
        <div className="link">
          <Link to={`/projects/${project.id}`}>
            <i className="bi bi-arrow-bar-right"></i> View Details
          </Link>
        </div>
      </div>
    </div>
  </BouncingSection>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    <button
      className="page-arrow"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      &lt;
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
    <button
      className="page-arrow"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      &gt;
    </button>
  </div>
);

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="projects-page">
      <Header />
      <div className="projects-list">
        {currentProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Projects;
