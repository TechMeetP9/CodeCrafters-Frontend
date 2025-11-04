import "./styles/main.scss";
import Background from "./components/Background/background";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AppRouter from "./router/Router";


function App() {
  return (
    <>
      <Background />
      <Navbar />
      <AppRouter />
      {/* <Footer /> */}
    

    </>
  );
}

export default App;

