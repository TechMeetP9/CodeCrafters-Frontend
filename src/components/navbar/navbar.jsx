import React from "react";
import "./navbar.scss";
import Whitebutton from "../whitebutton/whitebutton";
import Signupbutton from "../signupbutton/signupbutton";

const nav_items =[
    { label: "About us", onClick: () => console.log("Go to About us") },
  { label: "Log in", onClick: () => console.log("Go to Log in") },
];

const Navbar = () => {
    return (
      <nav className="navbar">
        
        <div className="navbar__brand">
          <img
            src="/src/assets/logo.png"
            alt="Code Happen logo"
            className="navbar__logo"
          />
        </div>
  
        
        <div className="navbar__menu">
          {nav_items.map((item) => (
            <Whitebutton
              key={item.label}
              text={item.label}
              onClick={item.onClick}
            />
          ))}
  
          <Signupbutton text="Sign up" onClick={() => console.log("Sign up")} />
        </div>
      </nav>
    );
  };
  
  export default Navbar;

