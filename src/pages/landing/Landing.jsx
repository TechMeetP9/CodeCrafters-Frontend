import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing.scss";
import Background from "../../components/Background/background";
import Navbar from "../../components/navbar/navbar";
import SearchBar from "../../components/searchbar/searchbar";
import SignupButton from "../../components/signupbutton/signupbutton";
import EventList from "../../components/eventlist/eventlist";
import Footer from "../../components/footer/footer";
import Whitebutton from "../../components/whitebutton/whitebutton";
import ColorCard from "../../components/colorcard/colorcard";
import SignUp from "../../components/signUp/SignUp";

import bgImage from "../../assets/Card1.png";
import iconSvg from "../../assets/fire.svg";
import bgImage3 from "../../assets/Cardgreen.png";
import iconSvg3 from "../../assets/create.svg";
import bgImage2 from "../../assets/card4.png";
import iconSvg2 from "../../assets/offline.svg";

const Landing = () => {
  const navigate = useNavigate();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSeeAllEvents = () => {
    navigate("/home");
  };

  const handleEventClick = () => {
    window.open("/event-detail", "_blank");
  };

  return (
    <div className="landing">
      <Background />
      <Navbar />

      <main className="landing__content">
        <section className="hero">
          <div className="hero__text">
            <h1 className="hero__title">Join Tech Events Today</h1>

            <div className="hero__search">
              <SearchBar />
            </div>
            <div className="hero__cta">
              <SignupButton
                variant="secondary"
                onClick={() => setIsSignUpOpen(true)}
              >
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
            <button
              className="events__see-all"
              onClick={handleSeeAllEvents}
            >
              See all events
            </button>
          </div>
          <div className="events__card">
            <div className="events__grid">
              <EventList onEventClick={handleEventClick} />
            </div>
          </div>
        </section>

        <section id="about-us" className="cards-section">
          <div className="cards-section__wrapper">
            <div className="cards-section__row">
              <ColorCard
                title="Find Tech Community"
                iconSrc={iconSvg2}
                backgroundImage={bgImage}
              />
              <ColorCard
                title="Join events online and offline"
                iconSrc={iconSvg}
                backgroundImage={bgImage3}
              />
              <ColorCard
                title="Create Tech Events and share them"
                iconSrc={iconSvg3}
                backgroundImage={bgImage2}
              />
            </div>

            <div className="cards-section__button">
              <SignupButton
                variant="secondary"
                onClick={() => setIsSignUpOpen(true)}
              >
                Join us
              </SignupButton>
            </div>
          </div>
        </section>
      </main>

      <SignUp isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />

      <Footer />
    </div>
  );
};

export default Landing;
