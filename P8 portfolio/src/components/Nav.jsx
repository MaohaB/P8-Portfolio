
import { NavLink } from 'react-router-dom'
import { Link, Element  } from 'react-scroll';
import './Header.scss'
 
function Nav() {
    return (
        
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <Link to="about" smooth={true} duration={500}>A Propos</Link>
            <NavLink to="/error" >erreur</NavLink>
            <NavLink to="/portfolio" >Portfolio</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </nav>
    )
}

export default Nav

