import React, { useEffect, useState } from "react";
import EventCard from "../eventcard/eventcard";
// import { getAllEvents } from "../../api/events"; 
import "./eventlist.scss";

const EventList = () => {
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

  if (loading) return <p className="eventlist__status">Loading events...</p>;
  if (error) return <p className="eventlist__status error">{error}</p>;
  if (events.length === 0)
    return <p className="eventlist__status">No events available yet.</p>;

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
