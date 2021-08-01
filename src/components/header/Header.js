import React from "react";
import "./Header.css";
import LogoImg from "../../assests/images/logo.png"

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img alt="Logo" src={LogoImg}></img>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#contact">Me contacter</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
