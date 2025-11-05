import React from "react";
import "./eventcard.scss";

const EventCard = ({ eventImage, eventName, eventDate, eventTime, eventCreator, eventAttendees }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img
          src={eventImage || "https://placehold.co/600x400"}
          alt={eventName}
        />
      </div>

      <div className="event-info">
        <p className="event-date"> month
          {eventDate},00h00CET {eventTime}
        </p>
        <h4 className="event-title"> Title of the Event{eventName}</h4>
        <p className="event-creator">by {eventCreator}</p>
        <p className="event-attendees">#{eventAttendees} attendees</p>
      </div>

      <div className="event-buttons">
        <button className="btn-edit">Edit</button>
        <button className="btn-erase">Erase</button>
      </div>
    </div>
  );
};

export default EventCard;
