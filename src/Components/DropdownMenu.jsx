import React, { useState } from 'react'; //eslint-disable-line
import { NavLink } from 'react-router-dom';
import dropDownItems from '../Const/DropdownConst'
import './Styles/DropdownMenu.css'

const DropdownMenu = () => {
    const [dropDown, setDropdown] = useState(false);

  return (
    <div className="dropdown-menu">
      <ul className={dropDown ? "submenuClicked" : "submenu"} onClick={() => setDropdown(!dropDown)}>
        {dropDownItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.path} onClick={() => setDropdown(false)}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;