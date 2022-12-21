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
        <li><a href="#start">Start</a></li>
        <li><a href="#oCoChodzi">O co chodzi?</a></li>
        <li><a href="#oNas">O nas</a></li>
        <li><a href="#fundacjaIOrganizacja">Fundacja i organizacje</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
    </div>
  );
}
