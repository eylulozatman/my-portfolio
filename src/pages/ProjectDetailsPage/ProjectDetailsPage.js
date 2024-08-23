import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './ProjectDetailsPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider'; 


function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }
 
  return (
    <div className="project-details-page">
     <Header/>
     <div className='container'>
      <div className='project-info-detail'>
        <h1 id='project-title'>{project.title}</h1>
          <div id='descript'>{project.description}</div>
              <div className='project-links'>
              {project.links.map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              ))} 
            </div>
      </div>
     
        <div className="project-images">
          <Slider images={project.detailedImages} />
        </div>
     </div>
      <Footer/>
    </div>
  );

  
 
}

export default ProjectDetailsPage;
