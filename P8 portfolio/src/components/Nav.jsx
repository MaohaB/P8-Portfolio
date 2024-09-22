
import { NavLink } from 'react-router-dom'
import './Header.scss'
 
function Nav() {
    return (
        
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about" >A Propos</NavLink>
            <NavLink to="/error" >erreur</NavLink>
            <NavLink to="/portfolio" >Portfolio</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </nav>
    )
}

export default Nav

