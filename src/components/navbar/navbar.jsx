import React from "react";
import "./navbar.scss";
import Whitebutton from "../whitebutton/whitebutton";
import Signupbutton from "../signupbutton/signupbutton";

const nav_items = [
  { label: "About us", onClick: () => console.log("Go to About us") },
  { label: "Log in", onClick: () => console.log("Go to Log in") },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <figure className="navbar__brand">
        <img
          src="/src/assets/logo.png"
          alt="Code Happen logo"
          className="navbar__logo"
        />
      </figure>

      <nav className="navbar__menu" aria-label="Main navigation">
        <ul className="navbar__list">
          {nav_items.map((item) => (
            <li key={item.label} className="navbar__item">
              <Whitebutton text={item.label} onClick={item.onClick} />
            </li>
          ))}
          <li className="navbar__item">
            <Signupbutton text="Sign up" onClick={() => console.log("Sign up")} />
          </li>
        </ul>
      </nav>
    </header>

  );
};

export default Navbar;

