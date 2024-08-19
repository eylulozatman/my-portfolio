import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './ProjectDetailsPage.css';

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-details-page">
      <h1>{project.title}</h1>
      <div className="project-images">
        {project.detailedImages.map((img, index) => (
          <img key={index} src={img} alt={`Detail ${index}`} />
        ))}
      </div>
      <p>{project.description}</p>
      <a href="/">Back to Projects</a>
    </div>
  );
}

export default ProjectDetailsPage;
