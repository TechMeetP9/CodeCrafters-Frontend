import React from "react";
import { useNavigate } from "react-router-dom";
import "./startnowcard.scss";

const ColorCard2 = ({
  title,
  text,
  buttonLabel = "Start now",
  imageSrc,
  backgroundImage,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/event-create");
  };

  return (
    <div
      className="color-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="color-card__overlay" />

      <div className="color-card__content">
        {imageSrc && (
          <div className="color-card__image-wrapper">
            <img src={imageSrc} alt={title} className="color-card__image" />
          </div>
        )}

        <div className="color-card__text-wrapper">
          {title && <h2 className="color-card__title">{title}</h2>}
          {text && <p className="color-card__text">{text}</p>}
        </div>

        <div className="color-card__button-wrapper">
          <button
            className="color-card__button"
            onClick={handleButtonClick}
            type="button"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorCard2;
