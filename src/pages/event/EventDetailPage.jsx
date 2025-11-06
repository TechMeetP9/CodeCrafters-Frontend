import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../../components/Background/background';
import { 
  getEventById, 
  getEventAttendees, 
  joinEvent, 
  leaveEvent 
} from '../../api';
import './EventDetailPage.scss';

function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAttending, setIsAttending] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const currentUserId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent(eventData);

        const attendeesData = await getEventAttendees(id);
        setAttendees(attendeesData);

        if (attendeesData.some(a => a.userId === currentUserId)) {
          setIsAttending(true);
        }

      } catch (err) {
        console.error(err);
        setError('Error loading event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id, currentUserId]);

  const handleAttendToggle = async () => {
    if (!currentUserId) {
      alert('Please log in to attend events');
      return;
    }

    try {
      setActionLoading(true);

      if (isAttending) {
        await leaveEvent({ eventId: id, userId: currentUserId });
        setIsAttending(false);
      } else {
        await joinEvent({ eventId: id, userId: currentUserId });
        setIsAttending(true);
      }

      const updatedAttendees = await getEventAttendees(id);
      setAttendees(updatedAttendees);

    } catch (err) {
      console.error(err);
      alert('Error updating attendance');
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="event-detail-page">
        <Background />
        <main className="event-detail-content">
          <p className="loading">Loading event details...</p>
        </main>
      </section>
    );
  }

  if (error || !event) {
    return (
      <section className="event-detail-page">
        <Background />
        <main className="event-detail-content">
          <p className="error">{error || 'Event not found'}</p>
        </main>
      </section>
    );
  }

  return (
    <section className="event-detail-page">
      <Background />

      <main className="event-detail-content">
        <div className="event-header">
          <div className="event-info">
            <h1 className="event-title">{event.title}</h1>
            <p className="event-organizer">by: {event.organizer || 'Unknown'}</p>
            <p className="event-description">{event.description}</p>
            <div className="event-meta">
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>
          </div>

          <div className="event-image">
            <img
              src={event.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'}
              alt={event.title}
            />
          </div>
        </div>

        {/* Eliminamos sección de Details */}

        <section className="event-section">
          <h2>Location</h2>
          <p>{event.location || 'Location TBD'}</p>
        </section>

        <section className="event-section attendees-section">
          <h2>Attendees</h2>
          <div className="attendees-list">
            {attendees.length > 0 ? (
              attendees.slice(0, 4).map((att, i) => (
                <div key={i} className="attendee-avatar">
                  <img src={att.avatarUrl || 'https://via.placeholder.com/40'} alt={att.name} />
                </div>
              ))
            ) : (
              <p className="no-attendees">No attendees yet. Be the first!</p>
            )}
          </div>

          <div className="btn-container">
              <button
                className={`btn-attend ${isAttending ? 'attending' : ''}`}
                onClick={handleAttendToggle}
                disabled={actionLoading}
              >
                {actionLoading ? 'Loading...' : isAttending ? 'Attending' : 'Attend'}
              </button>
            </div>
        </section>
      </main>
    </section>
  );
}

export default EventDetailPage;
