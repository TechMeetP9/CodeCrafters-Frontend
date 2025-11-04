    import { useState } from "react";
    import "./eventForm.scss";


    const EventForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        event_date: "",
        event_time: "",
        duration: "",
        capacity: "",
        image_url: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event created:", formData);
    };

    const handleErase = () => {
        setFormData({
        title: "",
        description: "",
        event_date: "",
        event_time: "",
        duration: "",
        capacity: "",
        image_url: "",
        });
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
        <fieldset className="event-form__fieldset">
            <legend>Event Information</legend>

            <label htmlFor="title">Event Title*</label>
            <input
            type="text"
            id="title"
            name="title"
            placeholder="Event title"
            value={formData.title}
            onChange={handleChange}
            required
            />

            <label htmlFor="duration">Duration</label>
            <input
            type="text"
            id="duration"
            name="duration"
            placeholder="Duration (e.g. 3 days, 2 hours)"
            value={formData.duration}
            onChange={handleChange}
            />

            <label htmlFor="description">Event Description*</label>
            <textarea
            id="description"
            name="description"
            placeholder="Event description"
            value={formData.description}
            onChange={handleChange}
            required
            />

            <label htmlFor="event_date">Event Date*</label>
            <input
            type="date"
            id="event_date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            required
            />

            <label htmlFor="event_time">Event Time*</label>
            <input
            type="time"
            id="event_time"
            name="event_time"
            value={formData.event_time}
            onChange={handleChange}
            required
            />

            <label htmlFor="capacity">Max Attendees*</label>
            <input
            type="number"
            id="capacity"
            name="capacity"
            placeholder="Max attendees"
            value={formData.capacity}
            onChange={handleChange}
            required
            min="1"
            />

            <label htmlFor="image_url">Image URL</label>
            <input
            type="url"
            id="image_url"
            name="image_url"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={handleChange}
            />

            <figure aria-live="polite">
            {formData.image_url ? (
                <img src={formData.image_url} alt="Event preview" />
            ) : (
                <figcaption>Image Preview</figcaption>
            )}
            </figure>

            <button type="submit" className="save">Save</button>
            <button type="button" className="erase" onClick={handleErase}>Erase</button>
        </fieldset>
        </form>
    );
    };

    export default EventForm;
