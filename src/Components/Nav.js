import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = props => {
  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to={"/world"} onClick={() => props.takePhotos("world")}>World</NavLink></li>
          <li><NavLink to={"/wide"} onClick={() => props.takePhotos("wide")}>Wide</NavLink></li>
          <li><NavLink to={"/window"} onClick={() => props.takePhotos("window")}>Window</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav;