import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">My To Do App:  Get Stuff Done!</h1>
      <Link className="home-link" to="/my-to-do-list">Show Me My List!</Link>
    </div>
  )
}

export default Home;