    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { createEvent } from "../../api/events";
    import "./eventForm.scss";

    const EventForm = () => {
    const navigate = useNavigate();
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
    const [error, setError] = useState(""); 
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
        setError(""); 
        setMessage("");
    };

    const validateForm = () => {
        if (!formData.title.trim()) return "Title is required";
        if (formData.title.length > 150) return "Title cannot exceed 150 characters";

        if (!formData.description.trim()) return "Description is required";
        if (formData.description.length > 300) return "Description cannot exceed 300 characters";

        if (!formData.event_date) return "Date is required";
        if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.event_date)) return "Incorrect date format";

        if (!formData.event_time) return "Start time is required";
        if (!/^([0-1]\d|2[0-3]):([0-5]\d)$/.test(formData.event_time)) return "Incorrect time format";

        if (!formData.duration.trim()) return "Duration is required";
        if (formData.duration.length > 50) return "Duration cannot exceed 50 characters";

        if (!formData.capacity) return "Capacity is required";

        if (!formData.image) return "Image is required";

        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
        setError(validationError);
        return;
        }

        try {
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        await createEvent(formDataToSend);
        handleErase();
        navigate("/home");
        } catch (err) {
        console.error("Error creating event:", err);
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
        setError("");
        setMessage("");
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
            value={formData.title}
            onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}

            <label htmlFor="duration">Duration</label>
            <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            />

            <label htmlFor="description">Event Description*</label>
            <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            ></textarea>

            <label htmlFor="event_date">Event Date*</label>
            <input
            type="date"
            id="event_date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            />

            <label htmlFor="event_time">Event Time*</label>
            <input
            type="time"
            id="event_time"
            name="event_time"
            value={formData.event_time}
            onChange={handleChange}
            />

            <label htmlFor="capacity">Max Attendees*</label>
            <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            min="1"
            />

            <label htmlFor="image">Event Image*</label>
            <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            />

            <figure>
            {preview ? (
                <img src={preview} alt="Event preview" />
            ) : (
                <figcaption>Image Preview</figcaption>
            )}
            </figure>

            {message && <p className="message">{message}</p>}
        </fieldset>

        <div className="buttons">
            <button type="submit" className="save">Save</button>
            <button type="button" className="erase" onClick={handleErase}>Erase</button>
        </div>
        </form>
    );
    };

    export default EventForm;
