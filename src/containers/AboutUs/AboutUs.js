import React from "react";
import "./AboutUs.scss";
import People from "../../assets/People.jpg";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
     
      <div className="aboutus-text">
        <h2>About Us</h2>
        <img
          src={Decoration}
          alt="decoration bar"
          className="aboutus-decoration"
        ></img>
        <p>asfjio aoshnf asofn asoifj asiofj asfjp </p>
        <div className="aboutus-signature-container">
          <img
            src={Signature}
            alt="signature"
            className="aboutus-signature"
          ></img>
        </div>
      </div>
      <img src={People} className="aboutus-image"></img>
    </div>
  );
};

export default AboutUs;
