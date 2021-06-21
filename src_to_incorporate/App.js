import React from "react";
import "./App.css";



fetch('http://localhost:3000')
.then(response => response.json())
.then(data => console.log(data));

function App() {
  return (
    <div>Todo List</div>
  )
}





export default App;