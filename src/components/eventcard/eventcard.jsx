import React from "react";
import "./eventcard.scss";

const EventCard = ({ eventImage, eventName, eventDate, eventTime, eventCreator, eventAttendees }) => {
  return (
<article className="event-card">
  <figure className="event-image">
    <img
      src={eventImage || "https://placehold.co/600x400"}
      alt={eventName || "Event image"}
    />
    <figcaption className="sr-only">{eventName}</figcaption>
  </figure>

  <div className="event-info">
    <time className="event-date" dateTime={eventDate}>
      {new Date(eventDate).toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric"
      })} • {eventTime} CET
    </time>
    <h3 className="event-title">{eventName || "Title of the Event"}</h3>
    <p className="event-creator">by {eventCreator}</p>
    <p className="event-attendees">
      {eventAttendees} attendee{eventAttendees > 1 ? "s" : ""}
    </p>
  </div>

  <div className="event-actions">
    <button className="btn btn-edit" type="button">Edit</button>
    <button className="btn btn-erase" type="button">Erase</button>
  </div>
</article>

  );
};

export default EventCard;
