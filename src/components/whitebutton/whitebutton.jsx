import React from "react";
import "./whitebutton.scss";


const Whitebutton = ({ text = "Log in", onClick }) => {
    return (
      <button className="whitebutton" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Whitebutton;
  