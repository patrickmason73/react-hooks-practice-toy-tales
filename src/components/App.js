import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/toys")
  .then(res => res.json())
  .then(data => setToys(data))
})


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(toyToDelete) {
    const newToys = toys.filter((toy) => {
     return toy.id !== toyToDelete.id
    })
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
