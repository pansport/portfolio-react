import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.logo} alt={props.alt} />
      <h3 className={props.alt}>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
