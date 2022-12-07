import React from "react";
import "./PageHeader.scss";
import { Menu } from "../Menu/Menu";
// import "../../App.scss"

const PageHeader = () => {
  return (
    <div className="PageHeader">
      <div className="PageHeader__background"></div>
      <div className="PageHeader__header">
        <Menu />
        <h2>Info and buttons</h2>
      </div>
    </div>
  );
};

export default PageHeader;
