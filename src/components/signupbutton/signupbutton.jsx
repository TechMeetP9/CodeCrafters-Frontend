import React from "react";
import "./signupbutton.scss";

const SignupButton = ({
  children = "Sign up",
  variant = "primary",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`signupbutton signupbutton--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SignupButton;
