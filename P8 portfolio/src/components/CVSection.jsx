import React from 'react';
import './Sass/CVSection.scss';
import { IoMdDownload } from "react-icons/io";

const CVSection = () => {
  return (
    <div className="cv-section">
      <h2>Mon CV</h2>
      <div className="cv-container">
        <img src="/chemin/vers/votre/cv-image.jpg" alt="Aperçu du CV" className="cv-image" />
        <a 
          href="/chemin/vers/votre/cv.pdf" 
          download="BRUREAU_Maoha_CV_Dev.pdf" 
          className="cvdownload-button"
        >
          Télécharger mon CV <IoMdDownload className="cvdownload-icon" />
        </a>
      </div>
    </div>
  );
};

export default CVSection;
