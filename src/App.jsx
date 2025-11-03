
import "./styles/main.scss";
import Background from "./components/Background/background";
import Signupbutton from "./components/signupbutton/signupbutton";
import Whitebutton from "./components/whitebutton/whitebutton";

function App() {
  const handleSignup = () => {
    console.log("Signup button clicked!");
  };
  const handleLogin = () => {
    console.log("Log in clicked!");
  }
  const handleAboutus = () => {
    console.log("aboutus");
  }

  return (
    <>
      <Background />
  
    </>
  );
}

export default App;
