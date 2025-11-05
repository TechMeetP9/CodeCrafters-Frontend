import React, { useState, useEffect } from 'react';
import {
  getEventById,
  getEventAttendees,
  getUserById,
  joinEvent,
  leaveEvent
} from "../../api";
import { 
  formatEventDate, 
  formatEventTime,
  isUserAttending,
  getInitials 
} from '../../utils/eventHelpers';
import './EventDetailPage.scss';

const EventDetailPage = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [organizer, setOrganizer] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [isAttending, setIsAttending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const currentUserId = localStorage.getItem('userId');

  useEffect(() => {
    if (eventId) {
      loadEventData();
    }
  }, [eventId]);

  const loadEventData = async () => {
    try {
      setLoading(true);
      
      const eventData = await getEventById(eventId);
      setEvent(eventData);

      if (eventData.userId) {
        try {
          const organizerData = await getUserById(eventData.userId);
          setOrganizer(organizerData);
        } catch (err) {
          console.error('Error loading organizer:', err);
        }
      }

      await loadAttendees();

    } catch (err) {
      setError(err.message || 'Error loading event');
      console.error('Error loading event:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadAttendees = async () => {
    try {
      const attendeesData = await getEventAttendees(eventId);
      setAttendees(attendeesData);
      setIsAttending(isUserAttending(attendeesData, currentUserId));
    } catch (err) {
      console.error('Error loading attendees:', err);
      setAttendees([]);
    }
  };

  const handleAttendToggle = async () => {
    if (!currentUserId) {
      alert('Please login to attend events');
      return;
    }

    try {
      setActionLoading(true);
      
      if (isAttending) {
        await leaveEvent({ 
          eventId: eventId, 
          userId: currentUserId 
        });
        setIsAttending(false);
      } else {
        await joinEvent({ 
          eventId: eventId, 
          userId: currentUserId 
        });
        setIsAttending(true);
      }
      
      await loadAttendees();
      
    } catch (err) {
      console.error('Error toggling attendance:', err);
      alert(err.message || 'Error updating attendance');
    } finally {
      setActionLoading(false);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: url
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="event-detail-page">
        <div className="event-detail-container loading">
          <div className="spinner"></div>
          <p>Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="event-detail-page">
        <div className="event-detail-container error">
          <p>{error || 'Event not found'}</p>
          <button onClick={() => window.history.back()} className="back-btn">
            ← Back to Events
          </button>
        </div>
      </div>
    );
  }

  const isFull = event.capacity && attendees.length >= event.capacity;

  return (
    <div className="event-detail-page">
      <div className="event-detail-container">
        <div className="event-header">
          <div className="event-info">
            <h1 className="event-title">{event.title}</h1>
            
            {organizer && (
              <p className="event-organizer">
                by: {organizer.name || organizer.username}
              </p>
            )}

            {event.categoryName && (
              <span className="event-category">{event.categoryName}</span>
            )}

            <div className="event-meta">
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{formatEventDate(event.dateTime)}</span>
              </div>
              <div className="meta-item">
                <span>{formatEventTime(event.dateTime)}</span>
              </div>
            </div>
          </div>

          <div className="event-image">
            <img 
              src={event.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'} 
              alt={event.title}
            />
            <div className="event-date-badge">
              <div className="date-month">{formatEventDate(event.dateTime).split(',')[0]}</div>
              <div className="date-day">{formatEventDate(event.dateTime).split(',')[1]?.trim()}</div>
            </div>
          </div>
        </div>

        <section className="event-section">
          <h2>Details</h2>
          <p>{event.description}</p>
        </section>

        <section className="event-section">
          <h2>Location</h2>
          <div className="location-info">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{event.location || 'Location TBD'}</span>
          </div>
        </section>

        <section className="event-section">
          <h2>Attendees</h2>
          <div className="attendees-section">
            <div className="attendees-list">
              {attendees.length > 0 ? (
                <>
                  {attendees.slice(0, 3).map((attendee, index) => (
                    <div key={attendee.id || index} className="attendee-avatar" title={attendee.userName || 'User'}>
                      <div className="avatar-placeholder">
                        {getInitials(attendee.userName)}
                      </div>
                    </div>
                  ))}
                  {attendees.length > 3 && (
                    <div className="attendees-more">
                      +{attendees.length - 3} attendees
                    </div>
                  )}
                </>
              ) : (
                <p className="no-attendees">No attendees yet. Be the first!</p>
              )}
            </div>

            <div className="action-buttons">
              <button 
                className={`btn-attend ${isAttending ? 'attending' : ''} ${isFull && !isAttending ? 'full' : ''}`}
                onClick={handleAttendToggle}
                disabled={actionLoading || (isFull && !isAttending)}
                title={isFull && !isAttending ? 'Event is full' : ''}
              >
                {actionLoading ? (
                  'Loading...'
                ) : isFull && !isAttending ? (
                  'Full'
                ) : isAttending ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Attending
                  </>
                ) : (
                  'Attend'
                )}
              </button>
              
              <button className="btn-share" onClick={handleShare} title="Share event">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {event.capacity && (
          <div className={`capacity-info ${isFull ? 'full' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>
              {attendees.length} / {event.capacity} attendees
              {isFull && <strong> • Event Full</strong>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailPage;