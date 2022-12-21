import React from "react";
import BigButton from "../../components/BigButton/BigButton";
import Decoration from "../../assets/Decoration.svg";
import Shirt from "../../assets/Icon-1.svg"
import Bag from "../../assets/Icon-2.svg"
import Glass from "../../assets/Icon-3.svg"
import Circle from "../../assets/Icon-4.svg"
import "./Steps.scss";

const Steps = () => {
  return (
    <>
      <div className="steps-container">
        <h2>Only 4 steps needed</h2>
        <img
          src={Decoration}
          alt="decoration bar"
          className="CallToAction-decoration"
        ></img>
        <div className="steps-coloured">
          <div className="steps-coloured-column">
            <img src={Shirt} className="steps-coloured-icon"></img>
            <h2>---------</h2>
            <h3 className="steps-coloured-title">Choose items</h3>
            <p className="steps-coloured-text">clothes, toys, gear and other</p>
          </div>
          <div className="steps-coloured-column">
            <img src={Bag} className="steps-coloured-icon"></img>
            <h2>---------</h2>
            <h3 className="steps-coloured-title">Choose items</h3>
            <p className="steps-coloured-text">clothes, toys, gear and other</p>
          </div>
          <div className="steps-coloured-column">
            <img src={Glass} className="steps-coloured-icon"></img>
            <h2>---------</h2>
            <h3 className="steps-coloured-title">Choose items</h3>
            <p className="steps-coloured-text">clothes, toys, gear and other</p>
          </div>
          <div className="steps-coloured-column">
            <img src={Circle} className="steps-coloured-icon"></img>
            <h2>---------</h2>
            <h3 className="steps-coloured-title">Choose items</h3>
            <p className="steps-coloured-text">clothes, toys, gear and other</p>
          </div>
        </div>
        <div className="buttons_container">
        <BigButton link={`/give-back`} text={`GIVE BACK`}/>
        </div>
      </div>
    </>
  );
};

export default Steps;
