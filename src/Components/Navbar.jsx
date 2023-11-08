import React, { useState, useEffect } from 'react'; //eslint-disable-line
import { Link, NavLink } from 'react-router-dom';
import "./Styles/Navbar.css";
import DropdownMenu from './DropdownMenu';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropDown, setDropdown] = useState(false);
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const handleMenuItemClick = () => {
        closeMenu();
    };

    return (
        <div>
            <nav className={navBar ? "navbar-active" : "navbar"} onClick={closeMenu}>
                <div className='logo-container'><Link to="/"><img src="\Images\Logos\LogoFStranspBlanco.png" alt="Logo Francesca Santos" /></Link></div>
                <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen && !navBar ? "open transparent-bg" : menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/" onClick={handleMenuItemClick}>Home</NavLink>
                    </li>
                    <li>
                        <ScrollLink to='francesca-santos' smooth={true} offset={-150} onClick={handleMenuItemClick}>Francesca Santos</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='contact' smooth={true} offset={-250} onClick={handleMenuItemClick}>Contacto</ScrollLink>
                    </li>
                    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        <NavLink to="/sesiones" onClick={handleMenuItemClick}>Sesiones</NavLink>
                        {dropDown && <DropdownMenu />}
                    </li>
                    <li>
                        <NavLink to="/ediciones" onClick={handleMenuItemClick}>Ediciones</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
