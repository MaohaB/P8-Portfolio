
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../../assets/projectsData';
import { FaArrowLeft } from 'react-icons/fa';
import SkillBar from '../../components/SkillBar'
import "./ProjectPage.scss";


const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];
      
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
          <div className="content">
            <h1 className='title'>{project.title}</h1>
            {paragraphs}
          </div>
          
          <div className="infos">
            <div className="info-container">
              <Link to="/portfolio" className="back-link"><FaArrowLeft className="goback-arrow" />Retour à la liste des projets</Link>
              <h2 className='lang'>Technologies utilisées :</h2> 
              <div className="github-bar">
  {project.githubBar.map((tech, index) => (
    <SkillBar 
      key={index}
      name={tech.name}
      percentage={tech.percentage}
      color={colors[index % colors.length]}
    />
  ))}
</div>

              <div className='links'>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProjectPage;
