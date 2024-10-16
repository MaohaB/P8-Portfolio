
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../../assets/projectsData';
import { FaArrowLeft } from 'react-icons/fa';
import "./ProjectPage.scss";

const SkillBar = ({ name, percentage, color }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(100), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="skill-segment"
      style={{ width: `${percentage}%` }}
    >
      <div 
        className="skill-level" 
        style={{ width: `${width}%`, backgroundColor: color }}
      >
        <div className="skill-info">
          <span className="skill-name">{name}</span>
          <span className="skill-percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};


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

    const colors = ['#61DAFB', '#F7DF1E', '#264de4', '#339933', '#663399'];
  
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
