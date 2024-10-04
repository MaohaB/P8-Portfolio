import React from "react";
import ProjectCard from "../components/ProjectCard"
import "../components/ProjectCard.scss";
import { projectsData } from '../assets/projectsData';

const Portfolio = () => {
  return (
      <div className="Portfolio">
          <div className="portfoliocards">
              {Object.keys(projectsData).map(projectId => (
                  <ProjectCard key={projectId} id={projectId} />
              ))}
          </div>
      </div>
  );
};

export default Portfolio;