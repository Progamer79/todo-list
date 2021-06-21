import React, { useState, useEffect } from 'react'
import "./MyToDoList.css"
import Teddy from '../Teddy/Teddy'
import TeddyForm from "../ToDoForm/ToDoForm";

const BASE_URL = 'https://teddiesdb.herokuapp.com/teddies';

function MyToDoList() {
  const [teddies, setTeddies] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(teddyData => setTeddies(teddyData))
  }, [])

  function deleteTeddy(teddyId) {
    const URL = `${BASE_URL}/${teddyId}`; // BASE_URL + `/${teddyId}`
    const config = { method: "DELETE" };
    fetch(URL, config)
      .then(r => r.json())
      .then(() => {
        const newTeddies = teddies.filter(teddy => teddy.id !== teddyId);
        setTeddies(newTeddies);
      })
  }

  function addTeddy(teddy) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teddy)
    }

    fetch(BASE_URL, config)
      .then(r => r.json())
      .then(newTeddy => {
        const newTeddies = [...teddies, newTeddy];
        setTeddies(newTeddies);
      })
  }

  function updateTeddy(id, updatedTeddy) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTeddy),
    })
      .then((r) => r.json())
      .then((updatedTeddy) => {
        const updatedTeddies = teddies.map((teddy) => {
          if (teddy.id === updatedTeddy.id) return updatedTeddy;
          return teddy;
        });
        setTeddies(updatedTeddies);
      });
  }

  return (
    <div className="teddy-container">
      <TeddyForm addTeddy={addTeddy} />
      <div className="teddy-container-list">
        { teddies.length === 0
          ? <h1>Loading...</h1>
            :teddies.map(teddy => {
              return <Teddy 
                        key={teddy.id} 
                        teddy={teddy} 
                        deleteTeddy={deleteTeddy}
                        updateTeddy={updateTeddy}
                      /> })
        }
      </div>
    </div>
  )
}

export default MyToDoList;