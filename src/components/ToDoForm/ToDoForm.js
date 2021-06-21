import React, { useState } from 'react'
import "./ToDoForm.css"

function ToDoForm({ addToDo }) {
  const [formState, setFormState] = useState({
    details: "",
    priority: null
  })

  function handleChange(event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput
    })
  }

  function handleSubmit(event) { 
    event.preventDefault();
    const todo = {
      details: formState.name,
      priority: formState.priority,
    };
    addToDo(todo);
  }

  return (
    <div className="teddy-form">
      <h2 className="teddy-form-heading">Make a New To-Do Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          To-Do Details:
          <input 
            type="text" 
            name="details" 
            value={formState.details}
            onChange={handleChange}
          />
        </label>
        <label>
          Priority:
          <input
            type="number"
            name="priority"
            value={formState.priority}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ToDoForm;