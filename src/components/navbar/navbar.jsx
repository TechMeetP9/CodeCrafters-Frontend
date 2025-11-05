import React, { useState } from "react";
import "./navbar.scss";
import Whitebutton from "../whitebutton/whitebutton";
import Signupbutton from "../signupbutton/signupbutton";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";



const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const nav_items =[
    { label: "About us", onClick: () => console.log("Go to About us") },
    { label: "Log in", onClick: () => setShowLogin(true) },
  ];


    return (
      <>
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
  
            <Signupbutton text="Sign up" onClick={() => setShowSignup(true)} />
          </div>
        </nav>

        <Login 
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(u) => {
            setUser(u);
            setShowLogin(false);
        }}/>

        <SignUp 
          isOpen={showSignup}
          onClose={() => setShowSignup(false)}
          onSignupSuccess={(u) => {
            setUser(u);
            setShowSignup(false);
        }}/>
      </>
      

      
    );
  };
  
  export default Navbar;

