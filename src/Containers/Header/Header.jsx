import React from "react";
import "./Header.scss";
import logo from "../../styles/images/logo.png";
import menu from "../../styles/images/menu.png";
import user from "../../styles/images/user.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__login">
        <img className="login" src={user} alt="user icon" />
      </div>
      <div className="header__display">
        <div className="header__logo">
          <img className="logo" src={logo} alt="Horse trotting on globe" />
        </div>
        <div classname="header__title">
          <h1>Globetrotter</h1>
        </div>
      </div>
      <div className="header__menu">
        <img className="menu" src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
