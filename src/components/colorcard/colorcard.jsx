import React from "react";
import "./colorcard.scss";

const ColorCard = ({ title, iconSrc, backgroundImage }) => {
    return (
      <div
        className="color-card"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="color-card__overlay" />
  
        <div className="color-card__content">
          {iconSrc && (
            <div className="color-card__icon">
              <img src={iconSrc} alt="icon" />
            </div>
          )}
          <div className="color-card__box">
            <h2 className="color-card__title">{title}</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default ColorCard;