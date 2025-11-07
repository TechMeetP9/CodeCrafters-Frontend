import React from 'react';
import './EventDetail.scss';

const EventDetail = () => {
  // Datos de ejemplo - puedes moverlos a props o a un estado global
  const event = {
    title: "Hackemon -",
    subtitle: "36 hours hackathon",
    organizer: "by: She Codes",
    description: "Join us for an electrifying 36-hour coding adventure! Build innovative Pokémon-inspired apps, catch new skills, and compete for amazing prizes. Whether you're a coding Squirtle or a programming Charizard, all trainers are welcome!",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop", // Imagen de código/tech
    date: "Month, 11-13",
    time: "00h00 OCT",
    location: "Av del Paral·lel 148, Barcelona, Spain",
    attendees: [
      { id: 1, avatar: "https://i.pravatar.cc/150?img=1" },
      { id: 2, avatar: "https://i.pravatar.cc/150?img=2" },
      { id: 3, avatar: "https://i.pravatar.cc/150?img=3" },
    ],
    totalAttendees: "# attendees"
  };

  return (
    <div className="event-detail-container">
      <div className="event-detail-card">
        {/* Header Section */}
        <div className="event-header">
          <div className="event-header-content">
            <h1 className="event-title">{event.title}</h1>
            <h2 className="event-subtitle">{event.subtitle}</h2>
            <p className="event-organizer">{event.organizer}</p>
            <p className="event-description">{event.description}</p>
          </div>
          
          <div className="event-image-section">
            <img 
              src={event.image} 
              alt="Event" 
              className="event-image"
            />
            <div className="event-datetime">
              <span className="event-date">{event.date}</span>
              <span className="event-time">{event.time}</span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="event-details-section">
          <h3 className="section-title">Details</h3>
          <p className="section-text">
            Get ready to level up your coding skills in this epic Pokémon-themed hackathon! Over 36 hours, you'll team up with fellow trainers to create innovative applications inspired by the world of Pokémon.
            Challenge yourself with exciting tracks including AI/ML creature recognition, AR battle systems, community trading platforms, and Pokédex data visualization. Work solo or form your dream team of up to 4 members.
            We'll provide everything you need: free meals, snacks, energy drinks, WiFi, and mentorship from industry professionals. Plus, compete for incredible prizes including gaming gear, courses, and exclusive Pokémon merchandise!
            No experience required - just bring your laptop, creativity, and passion for coding. Workshops and tutorials will be available throughout the event for beginners. Let's catch 'em all... bugs included!
          </p>
        </div>

        {/* Location Section */}
        <div className="event-location-section">
          <h3 className="section-title">Location</h3>
          <p className="section-text">{event.location}</p>
        </div>

        {/* Attendees Section */}
        <div className="event-attendees-section">
          <h3 className="section-title">Attendees</h3>
          <div className="attendees-content">
            <div className="attendees-avatars">
              {event.attendees.map((attendee) => (
                <div key={attendee.id} className="avatar-wrapper">
                  <img 
                    src={attendee.avatar} 
                    alt={`Attendee ${attendee.id}`}
                    className="attendee-avatar"
                  />
                </div>
              ))}
              <div className="more-attendees">
                <span>...</span>
              </div>
              <span className="attendees-count">{event.totalAttendees}</span>
            </div>
            
            <div className="action-buttons">
              <button className="btn-attend">Attend</button>
              <button className="btn-share">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;