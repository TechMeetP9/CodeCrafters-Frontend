import React from "react";
import "./signupbutton.scss";

const Signupbutton = ({ text = "Sign Up", onClick }) => {
  return (
    <button className="signupbutton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Signupbutton;

