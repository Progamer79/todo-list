import React from 'react';
import "./Teddy.css";
import { Link } from 'react-router-dom';

function Teddy({ teddy, deleteTeddy, updateTeddy }) {
  const { id, name, image, age, gender, story } = teddy

  function handleAdoptClick() {
    deleteTeddy(id);
  }

  function handleChangeTeddyClick() {
    const updatedTeddy = {
      age: age + 1
    }
    updateTeddy(id, updatedTeddy);
  }

  return (
    <div className="teddy"> 
      <h2> 
        <Link to={`https://teddy-bear-db-api.herokuapp.com/Teddies${id}`}>{name}</Link>
      </h2>
      <img src={image} alt={`${image}`} width="90%"/>
      <div className="Teddy-desc">
        <p>Age: {age}</p>
        <p>Gender: {gender}</p> 
        <p>Story: {story}</p>
      </div>
      <button className="teddy-btn" onClick={handleAdoptClick}>Adopt A Teddy</button>
      <button className="teddy-btn" onClick={handleChangeTeddyClick}>Increase Teddy's Age</button>
    </div>
  )
}

export default Teddy;