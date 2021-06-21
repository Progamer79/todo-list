import React from 'react';
import "./ToDo.css";
import { Link } from 'react-router-dom';

function ToDo({ todo, deleteToDo, updateToDo }) {
  const { id, details, priority } = todo

  console.log(todo);

  function handleDeleteToDo() {
    deleteToDo(id);
  }

  function handleIncreasePriorityClick() {
    const updatedToDo = {
      priority: +priority + 1
    }
    updateToDo(id, updatedToDo);
  }

  function handleDecreasePriorityClick() {
    const updatedToDo = {
      priority: +priority - 1
    }
    updateToDo(id, updatedToDo);
  }

  return (
    <div className="todo">
      <h3>
        {details}
      </h3>
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