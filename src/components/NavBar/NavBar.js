import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/my-to-do-list">My-To-Do-List</NavLink>
    </nav>
  )
}

export default NavBar;