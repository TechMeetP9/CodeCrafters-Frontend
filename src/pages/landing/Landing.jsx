import React from "react"; 
import "./landing.scss"; 
import Background from "../../components/Background/background"; 
import Navbar from "../../components/navbar/navbar"; 
import SearchBar from "../../components/searchbar/searchbar"; 
import SignupButton from "../../components/signupbutton/signupbutton"; 
import EventList from "../../components/eventlist/eventlist"; 
import Footer from "../../components/footer/footer"; 
import Whitebutton from "../../components/whitebutton/whitebutton";

const Landing = () => { 
  return ( 
    <div className="landing"> 
      <Background /> 
      <Navbar /> 

      <main className="landing__content"> 
        <section className="hero"> 
          <div className="hero__text"> 
            <h1 className="hero__title"> 
              Join Tech Events Today 
            </h1>
            <div className="hero__search"> 
              <SearchBar /> 
            </div>
            <div className="hero__cta"> 
              <SignupButton variant="secondary"> 
                Join us 
              </SignupButton>
            </div>
          </div>

          <div className="hero__image"> 
            <img
              src="/src/assets/heroimage.png" 
              alt="Community of people attending tech events" 
              className="hero__image-el" 
            />
          </div>
        </section>
        <section className="events"> 
        <div className="events__header"> 
          <button className="events__see-all"> 
            See all events 
          </button>
        </div>

        <div className="events__grid"> 
          <EventList /> 
        </div>
        </section>
        {/* // aquí abajo me dijiste "van otros componentes que aún no diseño (no pongas nada aún)" */}
        {/* // así que no pongo nada más en el main */}

      </main>

      <Footer /> 
    </div>
  );
};

export default Landing; // // exportamos el componente para poder usarlo en las rutas o en App
