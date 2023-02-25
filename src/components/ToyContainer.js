import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete}) {

const displayToys = toys.map((toy) => {
  return (
    <ToyCard toy={toy} key={toy.id} handleDelete={handleDelete} />
  )
})


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
