import React from 'react';
import { NavLink } from 'react-router-dom';


// Linking the nav elements on clicking
const Nav = props => {
  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/world" onClick={() => props.onSearch("world")}>World</NavLink></li>
          <li><NavLink to="/wide" onClick={() => props.onSearch("wide")}>Wide</NavLink></li>
          <li><NavLink to="/window" onClick={() => props.onSearch("window")}>Window</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav;