import React, { useState } from "react";
import { Form } from "react-router-dom";
import "./ContactUs.scss";
import Decoration from "../../assets/Decoration.svg";
import BackgroundContactForm from "../../assets/Background-Contact-Form.jpg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [res, setRes] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then(res => res.json())
      .then(res => setRes(res))
      .catch(err => console.log(err))
    };

  return (
    <div>
      <div className="contactus">
        <div className="contactus-background"></div>
        <form className="contactus-contactForm" onSubmit={submitHandler}>
          <h2>Contact Us</h2>
          <img
            src={Decoration}
            alt="decoration bar"
            className="contactus-decoration"
          ></img>
          {res && <p>Wysłano poprawnie</p>}
          <div className="contactus-contactForm-form">
            <div className="contactus-contactForm-form-name">
              <label>Write your name:</label>
              <input
                placeholder="Tomek"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contactus-contactForm-form-email">
              <label>Write your email:</label>
              <input
                placeholder="tomek@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contactus-contactForm-form-text">
            <label>Write your message:</label>
            <textarea
              className="contactus-contactForm-form-text-area"
              placeholder="ajksnfk nlkasn anskdn naskld nklansf  alklknsf klasnfdk asjkfn jasnfo asojfn akjsn fkja snfkj naskjf nkajs nfkjaskjfn kjna jlsnf gaasf"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* <button>Send</button> */}
          <input
            type="submit"
            value="SenD"
            className="contactus-contactForm-button"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
