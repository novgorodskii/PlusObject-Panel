import React from "react";

import logoImg from "./logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" />
    </div>
  );
};
export default Logo;
