import React from "react";

import Logo from "./Logo";
import Input from "../Input";
import "./Header.sass";


const Header = () => {
  return (
    <header className="header shadow-box d-flex align-items-center justify-content-between">
      <Logo />
      <div className="header-search">
        <Input type="icon" placeholder="Поиск раздела" />
      </div>
    </header>
  );
};

export default Header;
