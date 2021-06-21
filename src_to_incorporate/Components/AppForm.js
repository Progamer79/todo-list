import React, { useState, useEffect } from 'react'
import "./App.css"
import AppForm from "../AppForm/AppForm";



const BASE_URL = 'https://localhost:3000/Todo-list';

function ToDoList() {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(listData => setLists(listData))
  }, [])

      function cancelTask(updatedTask) {
        const config = {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        }
      }


  function deletetask(taskId) {
    const URL = `${BASE_URL}/${taskId}`; // BASE_URL + `/${taskId}`
    const config = { method: "DELETE" };
    fetch(URL, config)
      .then(r => r.json())
      .then(() => {
        const newTask = task.filter(task => task.id !== taskId);
        setTask(newTask);
      })
  }

  function addTask(task) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    }

    fetch(BASE_URL, config)
      .then(r => r.json())
      .then(newTask => {
        const newTasks = [...task, newTask];
        setTasks(newTasks);
      })
  }

  function updateTask(id, updatedTask) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        const updatedTask = tasks.map((task) => {
          if (task.id === updatedTask.id) return updatedTask;
          return task;
        });
        setTasks(updatedTasks);
      });
  }

  return (
    <div className="todo-list">
      <Todo-Form addTask={addTask} />
      <div className="todo-list">
        { task.length === 0
          ? <h1>Loading...</h1>
            :task.map(task => {
              return <Task 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                      /> })
        }
      </div>
    </div>
  )
}

export default AppForm;