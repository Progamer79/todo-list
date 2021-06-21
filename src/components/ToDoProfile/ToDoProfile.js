import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ToDoProfile.css";

const BASE_URL = 'http://localhost:3000/todoList'

function ToDoProfile() {
  const [todo, settodo] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const URL = `http://localhost:3000/todoList${id}`;
    fetch(URL)
      .then(r => r.json())
      .then(todoData => {
        settodo(todoData);
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    console.log(todo);
  }, [todo])

  return (
    <div className="todo-profile-container">
      <h2 className="todo-profile-heading">{todo.details}</h2>
      <p className="todo-profile-detail">Priority: {todo.priority}</p>
    </div>
  )
}

export default ToDoProfile;