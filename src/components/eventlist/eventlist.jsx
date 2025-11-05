import React, { useEffect, useState } from "react";
import EventCard from "../eventcard/eventcard"; 
import "./eventlist.scss";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // 🔹 Datos de ejemplo temporales aqui se conecta con el API BACKEND
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
      {
        id: 3,
        eventImage: "https://picsum.photos/300/150?random=3",
        eventName: "Workshop UX/UI Avanzado",
        eventDate: "Enero 14-15",
        eventTime: "10h00 CET",
        eventCreator: "UX Studio BCN",
        eventAttendees: 45,
      },
      {
        id: 4,
        eventImage: "https://picsum.photos/300/150?random=4",
        eventName: "Festival de Diseño Sostenible",
        eventDate: "Febrero 22-24",
        eventTime: "09h30 CET",
        eventCreator: "Green Design Europe",
        eventAttendees: 200,
      },
      {
        id: 5,
        eventImage: "https://picsum.photos/300/150?random=5",
        eventName: "Expo Arte Digital",
        eventDate: "Marzo 10-12",
        eventTime: "17h00 CET",
        eventCreator: "Digital Art Berlin",
        eventAttendees: 95,
      },
      {
        id: 6,
        eventImage: "https://picsum.photos/300/150?random=6",
        eventName: "Charla: Creatividad e Innovación",
        eventDate: "Abril 2",
        eventTime: "19h30 CET",
        eventCreator: "Gabi Design Talks",
        eventAttendees: 60,
      },
    ];

    setEvents(mockEvents);
  }, []);

  return (
    <div className="event-list">
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
    </div>
  );
};

export default EventList;
