import React from 'react';
import { NavLink } from 'react-router-dom';


// Linking the nav elements on clicking
const Nav = props => {

  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink 
                exact to="/world" 
                activeStyle={{ fontWeight: "bold",color: "red"}}
                onClick={() => props.onSearch("world")}>World
              </NavLink>
          </li>
          <li><NavLink
                exact to="/wide" 
                activeStyle={{ fontWeight: "bold",color: "red"}} 
                onClick={() => props.onSearch("wide")}>Wide
              </NavLink>
          </li>
          <li><NavLink 
                exact to="/window" 
                activeStyle={{ fontWeight: "bold",color: "red"}} 
                onClick={() => props.onSearch("window")}>Window
              </NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Nav;