import React from "react";

import Logo from "./Logo";
import "./Header.sass";

const Header = () => {
  return (
    <header className="header shadow-box">
      <Logo />
    </header>
  );
};

export default Header;
