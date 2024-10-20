
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../../assets/projectsData';
import { FaArrowLeft } from 'react-icons/fa';
import SkillBar from '../../components/SkillBar'
import { SiGithub } from 'react-icons/si';
import "./ProjectPage.scss";


const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];
    const [hoveredSkill, setHoveredSkill] = useState(null);
      
    if (!project) {
      console.log("Project not found, redirecting to error page");
      return <Navigate to="/error" replace />;
    }

    const paragraphs = project.longdescription.split('\n').map((para, index) => (
      <p key={index} className='longdescription'>{para}</p>
    ));

    const colors = ['#D50032', '#2E7D32', '#003366', '#FFB300', '#B0BEC5'];
  
    return (
        <div className="project-page">
          <Link to="/portfolio" className="back-link"><FaArrowLeft className="goback-arrow" />Retour à la liste des projets</Link>
      <div className="content">
  <div className="text-content">
    <h1 className='title'>{project.title}</h1>
    {paragraphs}
  </div>
  <div className="image-content">
    <img 
      src={project.coverImage} 
      alt={project.title ? `Image de ${project.title}` : "Image du projet"}  
      className="project-image" 
    />
  </div>
</div>

<div className="info-container">
  <div className="info-left">
    <h2 className='lang'>Technologies utilisées :</h2> 
    <div className="github-bar-container">
      <div className="github-bar">
        {project.githubBar.map((tech, index) => (
          <SkillBar 
            key={index}
            name={tech.name}
            percentage={tech.percentage}
            color={colors[index % colors.length]}
            onHover={(name) => setHoveredSkill(name)}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </div>
      <div className="skill-labels-desktop skill-label">
        {hoveredSkill}
      </div>
      <div className="skill-labels-mobile">
        {project.githubBar.map((tech, index) => (
          <div key={index} className="skill-label">{tech.name} {tech.percentage}% </div>
        ))}
      </div>
    </div>
  </div>
  <div className="info-right">
    <div className='links'>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub <SiGithub className="github-icon" /> </a>
    </div>
  </div>
</div>

        </div>
    );
};


export default ProjectPage;