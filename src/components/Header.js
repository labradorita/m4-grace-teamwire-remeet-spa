import React from "react";
import "../stylesheets/layouts/Header.scss";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Header = ({ clearState }) => {
  return (
    <header className="header">
      <div className="header__logo" /* onClick={clearState} */>
        <Link to="/">
          <img src={Logo} alt="logo-Remeet" className="header__img" />
        </Link>
      </div>
      <nav>
        <ul className="header__nav">
          <li className="header__element">About Remeet</li>
          <li className="header__element">Help</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
