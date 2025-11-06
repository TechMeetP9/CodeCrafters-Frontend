import React, { useState /*, useEffect */ } from "react";
import EventCard from "../eventcard/eventcard";
// import { getAllEvents } from "../../api/events"; // 🔒 backend comentado
import "./eventlist.scss";

// 🖼️ Importa tus imágenes locales (evita espacios en los nombres de archivo)
import Event1 from "../../assets/pokemonart.jpg";
import Event2 from "../../assets/tech1.jpg";
import Event3 from "../../assets/barcelonacybersecuritycongress_logo_standard-removebg-preview.png";
import Event4 from "../../assets/medtech.png";
import Event5 from "../../assets/websummit.jpg";
import Event6 from "../../assets/tech2.jpg";

const EventList = () => {
  // 🔒 Estados y useEffect del backend comentados
  /*
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Could not load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  */

  // 🎨 Mock de 6 eventos de prueba (para maquetar sin backend)
  const [mockEvents] = useState([
    {
      id: 1,
      eventImage: Event1,
      eventName: "Barcelona Tech Meetup",
      eventDate: "2025-11-12",
      eventTime: "18:30",
      eventCreator: "Tech BCN",
      eventAttendees: 42,
    },
    {
      id: 2,
      eventImage: Event2,
      eventName: "AI for Designers",
      eventDate: "2025-11-15",
      eventTime: "17:00",
      eventCreator: "Design Lab",
      eventAttendees: 27,
    },
    {
      id: 3,
      eventImage: Event3,
      eventName: "Frontend Friday",
      eventDate: "2025-11-21",
      eventTime: "16:00",
      eventCreator: "JS Lovers",
      eventAttendees: 58,
    },
    {
      id: 4,
      eventImage: Event4,
      eventName: "Women in Tech Brunch",
      eventDate: "2025-11-23",
      eventTime: "11:30",
      eventCreator: "Community Hub",
      eventAttendees: 35,
    },
    {
      id: 5,
      eventImage: Event5,
      eventName: "Product Managers Circle",
      eventDate: "2025-11-28",
      eventTime: "19:00",
      eventCreator: "Product BCN",
      eventAttendees: 19,
    },
    {
      id: 6,
      eventImage: Event6,
      eventName: "Startup Pitch Night",
      eventDate: "2025-12-01",
      eventTime: "20:00",
      eventCreator: "Startup Garage",
      eventAttendees: 61,
    },
  ]);

  // 🔒 Antiguos returns del backend
  // if (loading) return <p className="eventlist__status">Loading events...</p>;
  // if (error) return <p className="eventlist__status error">{error}</p>;
  // if (events.length === 0)
  //   return <p className="eventlist__status">No events available yet.</p>;

  // 👉 Return de maqueta (mock)
  return (
    <section className="event-list">
      {mockEvents.map((event) => (
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
