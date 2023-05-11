import React from "react";
import "./Contact.css";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="socials-container">
          <div className="facebook">
            <BsFacebook />
            <p>Кристијан Х.</p>
          </div>
          <div className="instagram">
            <BsInstagram />
            <p>kristijaaaan</p>
          </div>
          <div className="linkedin">
            <BsLinkedin />
            <p>Kristijan Horvatić</p>
          </div>
        </div>
        <div className="info-container">
          <div className="city">
            <TfiLocationPin />
            <p>Novi Sad, Serbia</p>
          </div>
          <div className="email">
            <FiMail />
            <p>kikihorvatic@gmail.com</p>
          </div>
          <div className="phone">
            <BsTelephone />
            <p>060/6433-274</p>
          </div>
        </div>
      </div>
    </div>
  );
}
