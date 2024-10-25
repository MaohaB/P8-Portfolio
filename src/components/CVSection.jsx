import React from 'react';
import './Sass/CVSection.scss';
import { IoMdDownload } from "react-icons/io";

const CVSection = () => {
  return (
    <div className="cv-section">
      <h2>Mon CV</h2>
      <div className="cv-container">
        <img src="images/cvtest.jpg" alt="Aperçu du CV" className="cv-image" />
        <a 
          href="cvtest.pdf" 
          download="BRUREAU_Maoha_CV_Dev.pdf" 
          className="cvdownload-button"
        >
          Consulter mon CV <IoMdDownload className="cvdownload-icon" />
        </a>
      </div>
    </div>
  );
};

export default CVSection;
