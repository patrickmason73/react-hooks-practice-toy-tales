import React from "react";

function ToyCard({toy, handleDelete}) {

const {id, name, image, likes} = toy

function onDelete() {
  fetch(`http://localhost:3001/toys/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => {
      handleDelete(toy);
    });
}

function onLike() {

const newlikes = likes + 1

  fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "likes": newlikes
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
}


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={null ? "loading..." : image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={onLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={onDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
