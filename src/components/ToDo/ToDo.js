import React from 'react';
import "./ToDo.css";
import { Link } from 'react-router-dom';

function ToDo({ teddy, deleteToDo, updateToDo }) {
  const { id, name, image, age, gender, story } = teddy

  function handleDeleteToDo() {
    deleteToDo(id);
  }

  function handleIncreasePriorityClick() {
    const updatedToDo = {
      age: age + 1
    }
    updateToDo(id, updatedToDo);
  }

  function handleDecreasePriorityClick() {
    const updatedToDo = {
      age: age - 1
    }
    updateToDo(id, updatedToDo);
  }

  return (
    <div className="teddy">
      <h2>
        <Link to={`https://teddy-bear-db-api.herokuapp.com/Teddies${id}`}>{details}</Link>
      </h2>
      <div className="ToDo-desc">
        <p>Priority: {priority}</p>
      </div>
      <button className="to-do-btn" onClick={handleIncreasePriorityClick}>Increase This To-Do's Priority</button>
      <button className="to-do-btn" onClick={handleDecreasePriorityClick}>Decrease This To-Do's Priority</button>
      <button className="to-do-btn" onClick={handleDeleteToDo}>Delete This To-Do Item</button>
    </div>
  )
}

export default ToDo;