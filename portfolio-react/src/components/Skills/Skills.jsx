import React from "react";
import "./Skills.css";
import Card from "./Card";

import ReactIMG from "../../assets/react.png";
import JavascriptIMG from "../../assets/javascript.png";
import BootstrapIMG from "../../assets/bootstrap.png";
import HtmlIMG from "../../assets/html.png";
import CssIMG from "../../assets/css.png";

const SKILLS = [
  {
    logo: ReactIMG,
    alt: "react",
    title: "React.js",
    text: "enables interactive web pages and is an essential part of web applications.",
    color: "blue",
  },
  {
    logo: JavascriptIMG,
    alt: "javascript",
    title: "JavaScript",
    text: "enables interactive web pages and is an essential part of web applications.",
  },
  {
    logo: CssIMG,
    alt: "css",
    title: "CSS",
    text: "style sheet language used for describing the presentation of a document.",
  },
  {
    logo: HtmlIMG,
    alt: "html",
    title: "HTML",
    text: "standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    logo: BootstrapIMG,
    alt: "bootstrap",
    title: "Bootstrap",
    text: "free and open-source CSS framework.",
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <h2>My skills</h2>
      <div className="cards-container">
        {SKILLS.map((item, index) => (
          <Card
            key={index}
            logo={item.logo}
            alt={item.alt}
            title={item.title}
            text={item.text}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
