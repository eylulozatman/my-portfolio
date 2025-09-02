import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetailsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Slider from '../../components/Slider/Slider';
import projectsLinks from '../../data/AcLinks';
import projectsData from '../../data/projectsData';
import Navbar from '../../components/Navbar/Navbar'; 


function ProjectDetailsPage() {
  const { source, id } = useParams(); // Artık source ve id parametreleri var
  const navigate = useNavigate();
  
  // Source parametresine göre doğru veri kaynağını seç
  let project;
  if (source === 'ac') {
    project = projectsLinks.find(proj => proj.id === parseInt(id));
  } else if (source === 'normal') {
    project = projectsData.find(proj => proj.id === parseInt(id));
  }

  if (!project) {
    return (
      
      <div className="project-details-page">
            <Navbar /> 
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-details-page">
          <Navbar /> 
      <div className="project-details-container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
        </div>

        <div className="project-content">
          <div className="project-info">
            <div className="project-description">
              <h3>About This Project</h3>
              <p>{project.description}</p>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="project-links-section">
                <h3>Project Links</h3>
                <div className="links-grid">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-button"
                    >
                      {link.includes('github.com') ? 'GitHub Repository' : 
                       link.includes('youtu.be') || link.includes('youtube.com') ? 'Watch Demo' : 
                       link.includes('iklmezun.org') ? 'Visit Website' : 'View Project'}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.detailedImages && project.detailedImages.length > 0 && (
            <div className="project-gallery">
              <h3>Project Gallery</h3>
              <Slider images={project.detailedImages} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetailsPage;