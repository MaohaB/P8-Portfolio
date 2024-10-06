import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../assets/projectsData';

const ProjectCard = ({ id }) => {
  const project = projectsData[id];

  if (!project) {
    console.log("Project not found, redirecting to error page");
        return <Navigate to="/error" replace />;
  }

  return (
    <Link to={`/project/${id}`}>
    <div className="project-card">
      
    <div className="cover-image-container">
          {project.coverImage && <img src={project.coverImage} alt={project.title} />}
          <div className="hover-description">
            <p>{project.smalldescription}</p>
          </div>
        </div>
        <div className="project-info">
        <h2 className="title">{project.title}</h2>
        <p className="description">{project.smalldescription}</p>
        <div className="footer-info">
      <div className="languages">
        {project.languages.map((lang, index) => (
          <span key={index} className="language">{lang}</span>
        ))}
      </div>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    </div>
    </div>
    </Link>
  );
};

export default ProjectCard;


