
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Header.scss'
 
function Nav() {
    return (
        
        <nav>
            <Link to="/#top" smooth={true} duration={500}>Accueil</Link>
            <Link to="/#about-section" smooth={true} duration={500}>A Propos</Link>
            <NavLink to="/error" >erreur</NavLink>
            <NavLink to="/portfolio" >Portfolio</NavLink>
            <NavLink to="/mentionslegales" >Mentions</NavLink>
            <Link to="/contact" smooth={true} duration={500}>Contact</Link>
        </nav>
    )
}

export default Nav

