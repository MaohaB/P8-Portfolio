<ProjectCard
  coverImage="/path/to/cover-image.jpg"
  title="Mon Projet Web"
  description="Ce projet"
  languages={['JavaScript', 'React', 'NodeJS', 'Express', 'MongoDB', 'HTML', 'CSS', 'SCSS']}
  githubLink="https://github.com/votre-username/votre-projet"
/>


import React from 'react';
// import jsIcon from '../images/icons/jsicon.svg';
// import cssIcon from '../images/icons/cssicon.svg';
// import htmlIcon from '../images/icons/htmlicon.svg';
// import scssIcon from '../images/icons/scssicon.svg';
// import reactIcon from '../images/icons/reacticon.svg';
// import nodeIcon from '../images/icons/nodejsicon.svg';
// import mongodbIcon from '../images/icons/mongoicon.svg';
// import githubIcon from '../images/icons/githubicon.svg';
import {
    jsIcon,
    cssIcon,
    htmlIcon,
    scssIcon,
    reactIcon,
    nodejsIcon,
    mongodbIcon,
    githubIcon
  } from '../assets/iconIndex';

const ProjectCard = ({ coverImage, title, description, languages, githubLink }) => {
  const getLanguageIcon = (language) => {
    const iconMap = {
      javascript: jsIcon,
      css: cssIcon,
      html: htmlIcon,
      scss: scssIcon,
      react: reactIcon,
      nodejs: nodejsIcon,
      mongodb: mongodbIcon
    };

    return iconMap[language.toLowerCase()] || '';
  };

  return (
    <div className="project-card">
      <img src={coverImage} alt={title} className="cover-image" />
      <div className="project-info">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="languages">
          {languages.map((language, index) => (
            <img
              key={index}
              src={getLanguageIcon(language)}
              alt={language}
              title={language}
              className="language-icon"
            />
          ))}
        </div>
        <a href={githubLink} target="_blank" className="github-link">
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
