
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../assets/projectsData';
import "./ProjectPage.scss";

const ProjectPage = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];
        console.log("projectId:", projectId); // Log l'ID du projet
        console.log("projectsData:", projectsData); // Log toutes les données des projets
        console.log("project:", project); // Log le projet trouvé (ou undefined)
      
        if (!project) {
          console.log("Project not found, redirecting to error page");
          return <Navigate to="/error" replace />;
        }
  
  
        return (
            <div className="project-page">
              <div className="content">
                <h1 className='title'>{project.title}</h1>
                <p className='description'>{project.longdescription}</p>
                
              </div>
              
              <div className="infos">
                <div className="info-container">
                <Link to="/portfolio">Retour à la liste des projets</Link>
                  <h2 className='lang'>Langages utilisés :</h2>
                  <ul>
                    {project.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                  <div className='links'>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                    
                  </div>
                </div>
              </div>
            </div>
          );
          
  };
  
  export default ProjectPage;