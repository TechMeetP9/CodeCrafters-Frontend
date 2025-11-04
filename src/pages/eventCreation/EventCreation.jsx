import React from "react";
import Background from "../../components/Background/background";
import Navbar from "../../components/navbar/navbar";
import EventForm from "../../components/eventForm/eventForm";
import Footer from "../../components/footer/footer";
import "./eventCreation.scss";

function EventCreation() {
  return (
    <div className="event-creation">
      <Background />
      <Navbar />

      <main className="event-creation__main">
        <h1 className="event-creation__title">Create a New Event</h1>
        <EventForm />
      </main>

      <Footer />
    </div>
  );
}

export default EventCreation;
