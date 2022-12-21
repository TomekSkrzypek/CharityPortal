import React from "react";
import "./PageHeader.scss";
import { Menu } from "../../components/Menu/Menu";
import {CallToAction } from "../../components/CallToAction/CallToAction";
// import "../../App.scss"

const  PageHeader = () => {
  return (
    <div className="PageHeader">
      <div className="PageHeader__background"></div>
      <div className="PageHeader__header">
        <Menu />
        <CallToAction/>
      </div>
    </div>
  );
};

export default PageHeader;
