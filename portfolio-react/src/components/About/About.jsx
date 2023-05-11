import React from "react";
import "./About.css";
import meImage from "../../assets/me.jpg";

export default function About() {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            Hello! My name is <span>Kristijan Horvatić</span>. I am highly
            motivated and self taught Front End Web Developer living in Novi
            Sad, Serbia.
            <br />
            I have fierce passion about user experience and integrating software
            per the requirement.
            <br />
            My goal is to achieve excellence in all areas of Web Development,
            especially in the Front End. Learning and solving problems is
            something that motivates me a lot.
            <br />
            With a focus on Web Development, I strive to create usable and
            polished products through passionate and deliberate design.
          </p>
          <a className="download-cv" download href="#">
            Download CV
          </a>
        </div>
        <div className="about-image">
          <img src={meImage} alt="A picture of myself" />
        </div>
      </div>
    </div>
  );
}
