import React, { useState } from 'react' // eslint-disable-line
import  {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"
import DropdownMenu from './DropdownMenu' // eslint-disable-line

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropDown, setDropdown] = useState(false);  // eslint-disable-line
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }   else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
    <div>
        <nav className={navBar ? "navbar-active" : "navbar"}>
            <div className='logo-container'><Link to="/"><img src="\Images\LogoFStranspBlanco.png" alt="Logo Francesca Santos"/></Link></div>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/sesiones">Sesiones</NavLink>
                    
                </li>
                <li>
                    <NavLink to="/francesca-santos">Francesca Santos</NavLink>
                </li>
                <li>
                    <NavLink to="/ediciones">Ediciones</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>          
        </nav>
    </div>
  )
}

export default Navbar
