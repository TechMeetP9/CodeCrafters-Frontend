import React from "react";
import "./gobutton.scss";

const Gobutton = ({ text = "Go", onClick }) => {
  return (
    <button className="gobutton" onClick={onClick}>
      <img
        src="/src/assets/magnifyglass.svg"
        alt="magnifying glass"
        className="gobutton__icon"
      />
      <span className="gobutton__text">{text}</span>
    </button>
  );
};

export default Gobutton;
