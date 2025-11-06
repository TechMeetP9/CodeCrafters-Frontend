import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/background";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { getEventById } from "../../api/events";
import {
  joinEvent,
  leaveEvent,
  getEventAttendees,
} from "../../api/attendances";
import "./event.scss";

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [isAttending, setIsAttending] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);

        // fetch attendees
        const attendeeList = await getEventAttendees(id);
        setAttendees(attendeeList);

        // check if current user is attending (assuming backend returns `user_id`)
        const userId = localStorage.getItem("userId");
        if (attendeeList.some((a) => a.user_id === userId)) {
          setIsAttending(true);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Could not load event details");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleAttend = async () => {
    try {
      setMessage("");
      const userId = localStorage.getItem("userId");

      if (!isAttending) {
        await joinEvent({ event_id: id, user_id: userId });
        setIsAttending(true);
        setMessage("You are now attending this event!");
        setAttendees((prev) => [...prev, { user_id: userId }]);
      } else {
        await leaveEvent({ event_id: id, user_id: userId });
        setIsAttending(false);
        setMessage(" You left this event.");
        setAttendees((prev) => prev.filter((a) => a.user_id !== userId));
      }
    } catch (err) {
      console.error("Error updating attendance:", err);
      setMessage("Could not update attendance");
    }
  };

  if (loading) return <p className="event__loading">Loading event details...</p>;
  if (error) return <p className="event__error">{error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <section className="event">
      <Background />
      <Navbar />

      <main className="event__main">
        <div className="event__header">
          <h1 className="event__title">{event.title}</h1>
          <p className="event__datetime">
            {new Date(event.event_date).toLocaleDateString()} • {event.event_time}
          </p>
        </div>

        <div className="event__body">
          {event.image && (
            <img
              src={event.image.startsWith("http") ? event.image : `/uploads/${event.image}`}
              alt={event.title}
              className="event__image"
            />
          )}

          <div className="event__info">
            <p className="event__description">{event.description}</p>
            <p><strong>Duration:</strong> {event.duration}</p>
            <p><strong>Max Capacity:</strong> {event.capacity}</p>
            <p><strong>Attendees:</strong> {attendees.length} / {event.capacity}</p>
          </div>

          <div className="event__actions">
            <button
              className={`event__attend-btn ${isAttending ? "attending" : ""}`}
              onClick={handleAttend}
            >
              {isAttending ? "✅ Leave Event" : "Attend Event"}
            </button>
            {message && <p className="event__message">{message}</p>}
          </div>
        </div>
      </main>

      <Footer />
    </section>
  );
}

export default Event;
