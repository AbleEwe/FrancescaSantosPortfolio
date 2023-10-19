import React, { useState } from 'react'; //eslint-disable-line
import { NavLink } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
    const [dropDown, setDropdown] = useState(false);

  return (
    <div className="dropdown-menu">
      <ul className={dropDown ? "submenu-clicked" : "submenu"} onClick={() => setDropdown(!dropDown)}>
        <li><NavLink to="/sesiones/bodas" onClick={() => setDropdown(false)}>Bodas</NavLink></li>
        <li><NavLink to="/sesiones/cumpleanos" onClick={() => setDropdown(false)}>Cumpleaños</NavLink></li>
        <li><NavLink to="/sesiones/documental" onClick={() => setDropdown(false)}>Documental</NavLink></li>
        <li><NavLink to="/sesiones/familiar" onClick={() => setDropdown(false)}>Familiar</NavLink></li>
        <li><NavLink to="/sesiones/graduaciones" onClick={() => setDropdown(false)}>Graduaciones</NavLink></li>
        <li><NavLink to="/sesiones/infantil" onClick={() => setDropdown(false)}>Infantil</NavLink></li>
        <li><NavLink to="/sesiones/maternidad" onClick={() => setDropdown(false)}>Maternidad</NavLink></li>
        <li><NavLink to="/sesiones/montaje" onClick={() => setDropdown(false)}>Montajes</NavLink></li>
        <li><NavLink to="/sesiones/otono" onClick={() => setDropdown(false)}>Otoño</NavLink></li>
        <li><NavLink to="/sesiones/primera-comunion-bautizo" onClick={() => setDropdown(false)}>Primera comunion y bautizo</NavLink></li>
        <li><NavLink to="/sesiones/producto" onClick={() => setDropdown(false)}>Producto</NavLink></li>
        <li><NavLink to="/sesiones/retrato" onClick={() => setDropdown(false)}>Retrato</NavLink></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;