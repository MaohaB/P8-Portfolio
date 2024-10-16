import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Sass/Header.scss';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <button className="menu-toggle" onClick={toggleMenu}>
                <div className={`icon-container ${isOpen ? 'open' : ''}`}>
                    <FaBars className="menu-icon" />
                    <FaTimes className="close-icon" />
                </div>
            </button>
            <nav className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/#top" smooth={true} duration={500}>Accueil</Link>
                <Link to="/#about-section" smooth={true} duration={500}>A Propos</Link>
                <NavLink to="/error">Erreur</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/mentionslegales">Mentions</NavLink>
                <Link to="/contact" smooth={true} duration={500}>Contact</Link>
            </nav>
        </div>
    );
}

export default Nav;
