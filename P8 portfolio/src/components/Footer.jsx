import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sass/Footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className='footertext' ><p>© 2024 </p><p> Créé par Maoha B</p> <p><NavLink to="/mentionslegales"> Mentions légales</NavLink> </p>  </div>  
            
            </div>
    );
} ;

export default Footer; 