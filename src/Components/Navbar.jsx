import React, { useState } from 'react' // eslint-disable-line
import  {Link, NavLink} from 'react-router-dom'
import  "./Styles/Navbar.css"
import DropdownMenu from './DropdownMenu' // eslint-disable-line
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropDown, setDropdown] = useState(false);  // eslint-disable-line
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
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
                    <ScrollLink to='francesca-santos' smooth={true} offset={-250}>Francesca Santos</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='contact' smooth={true} offset={-250}>Contacto</ScrollLink>
                </li>
                <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <NavLink to="/sesiones">Sesiones</NavLink>
                    {dropDown && <DropdownMenu/>}
                </li>
                <li>
                    <NavLink to="/ediciones">Ediciones</NavLink>
                </li>
            </ul>          
        </nav>
    </div>
  )
}

export default Navbar
