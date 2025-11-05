import React, { useEffect, useState } from "react";
import EventCard from "../eventcard/eventcard"; 
import "./eventlist.scss";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // 🔹 Aquí más adelante pondrás el fetch al backend. 
    // Por ahora usamos datos de ejemplo:
    const mockEvents = [
      {
        id: 1,
        eventImage: "https://picsum.photos/300/150?random=1",
        eventName: "Diseño y Creatividad 2025",
        eventDate: "Noviembre 12-13",
        eventTime: "18h00 CET",
        eventCreator: "Gabi",
        eventAttendees: 120,
      },
      {
        id: 2,
        eventImage: "https://picsum.photos/300/150?random=2",
        eventName: "Networking para Diseñadores",
        eventDate: "Diciembre 5",
        eventTime: "19h00 CET",
        eventCreator: "Berlin Design Hub",
        eventAttendees: 80,
      },
    ];

    setEvents(mockEvents);
  }, []);

  return (
    <section className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventImage={event.eventImage}
          eventName={event.eventName}
          eventDate={event.eventDate}
          eventTime={event.eventTime}
          eventCreator={event.eventCreator}
          eventAttendees={event.eventAttendees}
        />
      ))}
    </section>
  );
};

export default EventList;
