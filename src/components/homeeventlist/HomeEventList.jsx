import React, { useState } from "react";
import EventCard from "../eventcard/eventcard";
import "./HomeEventList.scss";
import Event1 from "../../assets/pokemonart.jpg";
import Event2 from "../../assets/tech1.jpg";
import Event3 from "../../assets/barcelonacybersecuritycongress_logo_standard-removebg-preview.png";
import Event4 from "../../assets/medtech.png";
import Event5 from "../../assets/websummit.jpg";
import Event6 from "../../assets/tech2.jpg";
import { useNavigate } from "react-router-dom";

const HomeEventList = ({ searchQuery = '', currentPage = 1 }) => {
  const ITEMS_PER_PAGE = 15; // 5 filas x 3 columnas
  const navigate = useNavigate();

  const [allEvents] = useState([
    {
      id: 1,
      eventImage: Event1,
      eventName: "Hackemon - 36h Hackathon",
      eventDate: "2025-11-12",
      eventTime: "00:00 OCT",
      eventCreator: "She Codes",
      eventAttendees: 42,
    },
    {
      id: 2,
      eventImage: Event2,
      eventName: "AI for Designers Workshop",
      eventDate: "2025-11-15",
      eventTime: "17:00 CET",
      eventCreator: "Design Lab Barcelona",
      eventAttendees: 27,
    },
    {
      id: 3,
      eventImage: Event3,
      eventName: "Barcelona Cybersecurity Congress",
      eventDate: "2025-11-21",
      eventTime: "09:00 CET",
      eventCreator: "Security Experts",
      eventAttendees: 158,
    },
    {
      id: 4,
      eventImage: Event4,
      eventName: "MedTech Innovation Summit",
      eventDate: "2025-11-23",
      eventTime: "11:30 CET",
      eventCreator: "HealthTech Hub",
      eventAttendees: 85,
    },
    {
      id: 5,
      eventImage: Event5,
      eventName: "Web Summit Barcelona",
      eventDate: "2025-11-28",
      eventTime: "10:00 CET",
      eventCreator: "Web Summit",
      eventAttendees: 312,
    },
    {
      id: 6,
      eventImage: Event6,
      eventName: "Startup Pitch Night",
      eventDate: "2025-12-01",
      eventTime: "20:00 CET",
      eventCreator: "Startup Garage",
      eventAttendees: 61,
    },
    {
      id: 7,
      eventImage: Event1,
      eventName: "Frontend Friday Meetup",
      eventDate: "2025-12-05",
      eventTime: "18:30 CET",
      eventCreator: "JS Lovers BCN",
      eventAttendees: 45,
    },
    {
      id: 8,
      eventImage: Event2,
      eventName: "Women in Tech Brunch",
      eventDate: "2025-12-08",
      eventTime: "11:00 CET",
      eventCreator: "Tech Women Network",
      eventAttendees: 38,
    },
    {
      id: 9,
      eventImage: Event3,
      eventName: "Blockchain & Crypto Conference",
      eventDate: "2025-12-10",
      eventTime: "09:30 CET",
      eventCreator: "Crypto Spain",
      eventAttendees: 127,
    },
    {
      id: 10,
      eventImage: Event4,
      eventName: "Data Science Bootcamp",
      eventDate: "2025-12-12",
      eventTime: "10:00 CET",
      eventCreator: "Data Academy",
      eventAttendees: 52,
    },
    {
      id: 11,
      eventImage: Event5,
      eventName: "Mobile App Development Workshop",
      eventDate: "2025-12-15",
      eventTime: "16:00 CET",
      eventCreator: "Mobile Devs BCN",
      eventAttendees: 34,
    },
    {
      id: 12,
      eventImage: Event6,
      eventName: "UX/UI Design Sprint",
      eventDate: "2025-12-18",
      eventTime: "14:00 CET",
      eventCreator: "Design Thinking Lab",
      eventAttendees: 29,
    },
    {
      id: 13,
      eventImage: Event1,
      eventName: "Cloud Computing Summit",
      eventDate: "2025-12-20",
      eventTime: "09:00 CET",
      eventCreator: "Cloud Experts",
      eventAttendees: 94,
    },
    {
      id: 14,
      eventImage: Event2,
      eventName: "Product Management Circle",
      eventDate: "2025-12-22",
      eventTime: "19:00 CET",
      eventCreator: "Product BCN",
      eventAttendees: 41,
    },
    {
      id: 15,
      eventImage: Event3,
      eventName: "DevOps Barcelona Meetup",
      eventDate: "2025-12-27",
      eventTime: "18:00 CET",
      eventCreator: "DevOps Community",
      eventAttendees: 56,
    },
    {
      id: 16,
      eventImage: Event4,
      eventName: "Tech Talks: Future of AI",
      eventDate: "2026-01-05",
      eventTime: "17:30 CET",
      eventCreator: "AI Institute",
      eventAttendees: 103,
    },
    {
      id: 17,
      eventImage: Event5,
      eventName: "Agile Project Management Workshop",
      eventDate: "2026-01-08",
      eventTime: "10:00 CET",
      eventCreator: "Agile Barcelona",
      eventAttendees: 37,
    },
    {
      id: 18,
      eventImage: Event6,
      eventName: "IoT & Smart Cities Conference",
      eventDate: "2026-01-12",
      eventTime: "09:00 CET",
      eventCreator: "Smart City BCN",
      eventAttendees: 118,
    },
    {
      id: 19,
      eventImage: Event1,
      eventName: "Quantum Computing Introduction",
      eventDate: "2026-01-15",
      eventTime: "16:00 CET",
      eventCreator: "Quantum Lab",
      eventAttendees: 28,
    },
    {
      id: 20,
      eventImage: Event2,
      eventName: "Green Tech Innovation Forum",
      eventDate: "2026-01-18",
      eventTime: "11:00 CET",
      eventCreator: "Eco Tech",
      eventAttendees: 67,
    },
    {
      id: 21,
      eventImage: Event3,
      eventName: "E-commerce Growth Strategies",
      eventDate: "2026-01-22",
      eventTime: "15:00 CET",
      eventCreator: "Digital Commerce BCN",
      eventAttendees: 49,
    },
    {
      id: 22,
      eventImage: Event4,
      eventName: "Game Development Jam",
      eventDate: "2026-01-25",
      eventTime: "10:00 CET",
      eventCreator: "Game Devs BCN",
      eventAttendees: 73,
    },
    {
      id: 23,
      eventImage: Event5,
      eventName: "Fintech Revolution Summit",
      eventDate: "2026-01-28",
      eventTime: "09:30 CET",
      eventCreator: "Fintech Spain",
      eventAttendees: 142,
    },
    {
      id: 24,
      eventImage: Event6,
      eventName: "Remote Work Best Practices",
      eventDate: "2026-02-01",
      eventTime: "18:00 CET",
      eventCreator: "Remote First",
      eventAttendees: 55,
    },
    {
      id: 25,
      eventImage: Event1,
      eventName: "AR/VR Experience Day",
      eventDate: "2026-02-05",
      eventTime: "12:00 CET",
      eventCreator: "Virtual Reality Lab",
      eventAttendees: 81,
    },
  ]);


  const filteredEvents = allEvents.filter(event =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.eventCreator.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  if (filteredEvents.length === 0) {
    return (
      <div className="home-event-list-empty">
        <p>No events found matching "{searchQuery}"</p>
      </div>
    );
  }

  return (
    <section className="home-event-list">
      {currentEvents.map((event) => (
        <EventCard
          key={event.id}
          eventImage={event.eventImage}
          eventName={event.eventName}
          eventDate={event.eventDate}
          eventTime={event.eventTime}
          eventCreator={event.eventCreator}
          eventAttendees={event.eventAttendees}
          onClick={()=> navigate("/event-detail")}
        />
      ))}
    </section>
  );
};

export default HomeEventList;