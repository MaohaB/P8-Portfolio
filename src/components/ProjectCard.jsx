import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../assets/projectsData';
//import { languageIcons } from '../assets/languageIcons.js';
import { SiGithub } from 'react-icons/si';

import { FaJsSquare, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiSass, SiReact, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';

export const languageIcons = {
  'JS': <FaJsSquare />,
  'CSS': <FaCss3 />,
  'HTML': <FaHtml5 />,
  'SCSS': <SiSass />,
  'REACT': <SiReact />,
  'NODEJS': <SiNodedotjs />,
  'EXPRESS': <SiExpress />,
  'MONGODB': <SiMongodb />,
};



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
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.smalldescription}</p>
        <div className="footer-info">
        <div className="languages">
            {project.languages.map((lang, index) => (
              languageIcons[lang] ? (
                <span key={index} className="language-icon" title={lang}>
                  {languageIcons[lang]}
                </span>
              ) : (
                <span key={index} className="language">{lang}</span>
              )
            ))}
          </div>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="Versioné sur GitHub">
            <SiGithub className="github-icon" />
          </a>
    </div>
    </div>
    </div>
    </Link>
  );
};

export default ProjectCard;


