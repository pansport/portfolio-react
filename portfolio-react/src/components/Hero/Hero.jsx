import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="info">
        <p className="first-info-text">Hello, my name is</p>
        <p className="second-info-text">Kristijan Horvatić</p>
        <p className="third-info-text">
          I am a <span>Front End Web Developer</span>.
        </p>
        <a className="about-me-link" href="#">
          About me
        </a>
      </div>
    </div>
  );
}
