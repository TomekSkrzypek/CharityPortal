import React from "react";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="Menu">
      <ul className="Menu__client">
        <li>Zaloguj</li>
        <li>Załóż konto</li>
      </ul>
      
      <ul className="Menu__navigation">
        <li>Start</li>
        <li>O co chodzi?</li>
        <li>O nas</li>
        <li> Fundacja i organizacje</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
}
