import React, { useEffect, useState } from "react";
import EventCard from "../eventcard/eventcard";
import { getAllEvents } from "../../api/events"; 
import "./eventgrid.scss";

const EventGrid = ({ searchQuery = "", currentPage = 1 }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const eventsPerPage = 15;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(Array.isArray(data) ? data : []); // <-- seguro contra errores
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Could not load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filtrar eventos por búsqueda
  const filteredEvents = events.filter(event => {
    if (!searchQuery.trim()) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      event.eventName?.toLowerCase().includes(searchLower) ||
      event.eventCreator?.toLowerCase().includes(searchLower) ||
      event.description?.toLowerCase().includes(searchLower)
    );
  });

  // Calcular eventos para la página actual (máximo 15)
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  if (loading) return <p className="eventgrid__status">Loading events...</p>;
  if (error) return <p className="eventgrid__status error">{error}</p>;
  if (filteredEvents.length === 0)
    return <p className="eventgrid__status">No events available yet.</p>;

  return (
    <section className="event-grid">
      {currentEvents.map((event) => (
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

export default EventGrid;
