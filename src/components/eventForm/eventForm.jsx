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
        setError(""); // limpiar error al modificar un campo
        setMessage("");
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Title is required";
        else if (formData.title.length > 150) newErrors.title = "Title cannot exceed 150 characters";

        if (!formData.description.trim()) newErrors.description = "Description is required";
        else if (formData.description.length > 300) newErrors.description = "Description cannot exceed 300 characters";

        if (!formData.event_date) newErrors.event_date = "Date is required";
        else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.event_date)) newErrors.event_date = "Incorrect date format";

        if (!formData.event_time) newErrors.event_time = "Start time is required";
        else if (!/^([0-1]\d|2[0-3]):([0-5]\d)$/.test(formData.event_time)) newErrors.event_time = "Incorrect time format";

        if (!formData.duration.trim()) newErrors.duration = "Duration is required";
        else if (formData.duration.length > 50) newErrors.duration = "Duration cannot exceed 50 characters";

        if (!formData.capacity) newErrors.capacity = "Capacity is required";

        if (!formData.image) newErrors.image = "Image is required";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
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
        setErrors({});
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
            {errors.title && <p className="error">{errors.title}</p>}

            <label htmlFor="duration">Duration</label>
            <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            />
            {errors.duration && <p className="error">{errors.duration}</p>}

            <label htmlFor="description">Event Description*</label>
            <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            ></textarea>
            {errors.description && <p className="error">{errors.description}</p>}

            <label htmlFor="event_date">Event Date*</label>
            <input
            type="date"
            id="event_date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            />
            {errors.event_date && <p className="error">{errors.event_date}</p>}

            <label htmlFor="event_time">Event Time*</label>
            <input
            type="time"
            id="event_time"
            name="event_time"
            value={formData.event_time}
            onChange={handleChange}
            />
            {errors.event_time && <p className="error">{errors.event_time}</p>}

            <label htmlFor="capacity">Max Attendees*</label>
            <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            min="1"
            />
            {errors.capacity && <p className="error">{errors.capacity}</p>}

            <label htmlFor="image">Event Image*</label>
            <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            />
            {errors.image && <p className="error">{errors.image}</p>}

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
