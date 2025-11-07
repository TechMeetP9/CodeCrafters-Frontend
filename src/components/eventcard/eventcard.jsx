// src/components/eventcard/EventCard.jsx
import React from "react";
import "./eventcard.scss";

const EventCard = ({
  eventImage,
  eventName,
  eventDate,
  eventTime,
  eventCreator,
  eventAttendees,
}) => {
  return (
    <article className="event-card">
      {/* 👇 ESTA clase tiene que llamarse igual que en tu SCSS */}
      <div className="event-image">
        <img src={eventImage} alt={eventName} />
      </div>

      <div className="event-info">
        <p className="event-date">
          {eventDate} · {eventTime}
        </p>
        <h3 className="event-title">{eventName}</h3>
        <p className="event-creator">{eventCreator}</p>
        <p className="event-attendees">
          {eventAttendees} attendees
        </p>
      </div>
    </article>
  );
};

export default EventCard;
