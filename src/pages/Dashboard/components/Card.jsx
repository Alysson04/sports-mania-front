import React from "react";
import "./Card.css";

function Card({ color, title, value, icon }) {
  return (
    <div className={`card ${color}`}>
      <p>{title}</p>
      <h2>{value}</h2>
      <i className="icon">{icon}</i>
    </div>
  );
}

export default Card;
