import React, { useState } from "react";
import "./styles/main.scss";
import Background from "./components/Background/background";
import Signupbutton from "./components/signupbutton/signupbutton";

function App() {
  const handleSignup = () => {
    console.log("Signup button clicked!");
  };

  return (
    <>
      <Background />
    </>
  );
}

export default App;
