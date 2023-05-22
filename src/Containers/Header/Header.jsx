import React from "react";
import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import logo from "../../styles/images/logo.png";
import menu from "../../styles/images/menu.png";
import user from "../../styles/images/user.png";



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu && <Menu toggleMenu={toggleMenu} />}
      <div className="header">
        <div className="header__login">
          <img className="login" src={user} alt="user icon" />
        </div>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className="header__display">
            <div className="header__logo">
              <img className="logo" src={logo} alt="Horse trotting on globe" />
            </div>
            <div classname="header__title">
              <h1>Globetrotter</h1>
            </div>
          </div>
        </Link>
        <div className="header__menu">
          <img className="menu" src={menu} alt="menu" onClick={toggleMenu} />
        </div>
      </div>
    </>
  );
};

export default Header;
