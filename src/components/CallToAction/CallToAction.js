import React from "react";
import BigButton from "../BigButton/BigButton";
import "./CallToAction.scss";
import Decoration from '../../assets/Decoration.svg'


export function CallToAction() {
  return (
    <div>
      <div className="CallToAction-container">
      <h1>Start helping!</h1>
      <h1>Give back your things to someone else</h1>
      <img src={Decoration} alt="decoration bar" className="CallToAction-decoration"></img>
      
      <div className="buttons_container">
        {/* <button className="button">GIVE BACK</button> */}
        {/* <button className="button">ORGANIZE A COLLECTION</button> */}
      <BigButton link={`/give-back`} text={`GIVE BACK`}/>
      <BigButton link={`/organize-a-collection`} text={`ORGANIZE A COLLECTION`}/>
      </div>
      </div>
    </div>
  );
}
