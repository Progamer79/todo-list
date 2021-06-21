import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import MyToDoList from "./components/MyToDoList/MyToDoList";
import TeddyProfile from "./components/TeddyProfile/TeddyProfile";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/my-to-do-list">
          <MyToDoList />
        </Route>
        <Route exact path="/my-to-do-list/:id">
          <TeddyProfile />
        </Route>
        {/* keep the "*" path at the end */}
        <Route path="*">
          <h1>404 Not Found :c</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;