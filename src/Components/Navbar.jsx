import React from 'react' // eslint-disable-line
import  {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/"><img src="\Images\LogoFStranspBlanco.png" alt="Logo Francesca Santos"/></Link>
        <ul>
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
  )
}

export default Navbar
