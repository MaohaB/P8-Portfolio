import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './Sass/Footer.scss'

const Footer = () => {
    return (
        <div className="footer" id='contact'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <p>© 2024 </p>
                    <p>Maoha Brureau</p>
                </div>
                <div className='footer-right'>
                    <NavLink to="/mentionslegales">Mentions légales</NavLink>
                </div>
            </div>
            <div className='footer-links'>
                <a href="mailto:maohab.webdev@gmail.com" aria-label="Email"><FaEnvelope /></a>
                <a href="https://github.com/MaohaB" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
        </div>
    );
};

export default Footer;
