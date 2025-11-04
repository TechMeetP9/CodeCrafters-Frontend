                import { useState } from "react";
                import { createEvent } from "../../api/events";
                import "./eventForm.scss";

                const EventForm = () => {
                const [formData, setFormData] = useState({
                    title: "",
                    description: "",
                    event_date: "",
                    event_time: "",
                    duration: "",
                    capacity: "",
                    image: null,
                });

                const [preview, setPreview] = useState(null);
                const [message, setMessage] = useState("");

                const handleChange = (e) => {
                    const { name, value, files } = e.target;
                    if (name === "image") {
                    const file = files[0];
                    setFormData({ ...formData, image: file });
                    setPreview(file ? URL.createObjectURL(file) : null);
                    } else {
                    setFormData({ ...formData, [name]: value });
                    }
                };

                const handleSubmit = async (e) => {
                    e.preventDefault();
                    try {
                    const formDataToSend = new FormData();
                    for (const key in formData) {
                        formDataToSend.append(key, formData[key]);
                    }

                    const response = await createEvent(formDataToSend);
                    setMessage("Event created successfully!");
                    console.log("Event saved:", response);
                    handleErase();
                    } catch (error) {
                    console.error("Error creating event:", error);
                    setMessage("Error creating event");
                    }
                };

                const handleErase = () => {
                    setFormData({
                    title: "",
                    description: "",
                    event_date: "",
                    event_time: "",
                    duration: "",
                    capacity: "",
                    image: null,
                    });
                    setPreview(null);
                };

                return (
    <form className="event-form" onSubmit={handleSubmit}>
    <fieldset className="event-form__fieldset">
        <legend>Event Information</legend>

        <label id="title-label" htmlFor="title">Event Title*</label>
        <input
        type="text"
        id="title"
        name="title"
        placeholder="Event title"
        value={formData.title}
        onChange={handleChange}
        required
        aria-describedby="title-label"
        />

        <label id="duration-label" htmlFor="duration">Duration</label>
        <input
        type="text"
        id="duration"
        name="duration"
        placeholder="Duration (e.g. 3 days, 2 hours)"
        value={formData.duration}
        onChange={handleChange}
        aria-describedby="duration-label"
        />

        <label id="description-label" htmlFor="description">Event Description*</label>
        <textarea
        id="description"
        name="description"
        placeholder="Event description"
        value={formData.description}
        onChange={handleChange}
        required
        aria-describedby="description-label"
        ></textarea>

        <label id="event_date-label" htmlFor="event_date">Event Date*</label>
        <input
        type="date"
        id="event_date"
        name="event_date"
        value={formData.event_date}
        onChange={handleChange}
        required
        aria-describedby="event_date-label"
        />

        <label id="event_time-label" htmlFor="event_time">Event Time*</label>
        <input
        type="time"
        id="event_time"
        name="event_time"
        value={formData.event_time}
        onChange={handleChange}
        required
        aria-describedby="event_time-label"
        />

        <label id="capacity-label" htmlFor="capacity">Max Attendees*</label>
        <input
        type="number"
        id="capacity"
        name="capacity"
        placeholder="Max attendees"
        value={formData.capacity}
        onChange={handleChange}
        required
        min="1"
        aria-describedby="capacity-label"
        />

        <label id="image-label" htmlFor="image">Event Image*</label>
        <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleChange}
        required
        aria-describedby="image-label"
        />

        <figure aria-live="polite">
        {preview ? (
            <img src={preview} alt="Event preview" />
        ) : (
            <figcaption>Image Preview</figcaption>
        )}
        </figure>

        {message && <p role="status" className="message">{message}</p>}
    </fieldset>

    <div className="buttons">
        <button type="submit" className="save">Save</button>
        <button type="button" className="erase" onClick={handleErase}>Erase</button>
    </div>
    </form>


                );
                };

                export default EventForm;
