    import { useState } from "react";

    const UserEditForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        profileImage: null,
    });

    const [preview, setPreview] = useState(user.profileImage || null);
    const [errors, setErrors] = useState({});
    const [messages, setMessages] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "profileImage") {
        const file = files[0];
        setFormData({ ...formData, profileImage: file });

        if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
        setPreview(file ? URL.createObjectURL(file) : null);
        } else {
        setFormData({ ...formData, [name]: value });

        if (name === "name") validateName(value);
        if (name === "username") validateUsername(value);
        if (name === "email") validateEmail(value);
        if (name === "password") validatePassword(value);
        }
    };

    const validateName = (value) => {
        if (!value.trim()) {
        setErrors((prev) => ({ ...prev, name: "Enter name" }));
        setMessages((prev) => ({ ...prev, name: "" }));
        } else if (value.length > 50) {
        setErrors((prev) => ({ ...prev, name: "Cannot exceed 50 characters" }));
        setMessages((prev) => ({ ...prev, name: "" }));
        } else {
        setErrors((prev) => ({ ...prev, name: "" }));
        setMessages((prev) => ({ ...prev, name: "Name looks good" }));
        }
    };

    const validateUsername = (value) => {
        if (!value.trim()) {
        setErrors((prev) => ({ ...prev, username: "Enter username" }));
        setMessages((prev) => ({ ...prev, username: "" }));
        } else if (value.length > 30) {
        setErrors((prev) => ({ ...prev, username: "Cannot exceed 30 characters" }));
        setMessages((prev) => ({ ...prev, username: "" }));
        } else {
        setErrors((prev) => ({ ...prev, username: "" }));
        setMessages((prev) => ({ ...prev, username: "Username looks good" }));
        }
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: "Enter Email" }));
        setMessages((prev) => ({ ...prev, email: "" }));
        } else if (value.length > 100) {
        setErrors((prev) => ({ ...prev, email: "Cannot exceed 100 characters" }));
        setMessages((prev) => ({ ...prev, email: "" }));
        } else {
        setErrors((prev) => ({ ...prev, email: "" }));
        setMessages((prev) => ({ ...prev, email: "Email looks good" }));
        }
    };

    const validatePassword = (value) => {
        if (!value.trim()) {
        setErrors((prev) => ({ ...prev, password: "Enter password" }));
        setMessages((prev) => ({ ...prev, password: "" }));
        } else if (value.length > 10) {
        setErrors((prev) => ({ ...prev, password: "Cannot exceed 10 characters" }));
        setMessages((prev) => ({ ...prev, password: "" }));
        } else {
        setErrors((prev) => ({ ...prev, password: "" }));
        setMessages((prev) => ({ ...prev, password: "Password looks good" }));
        }
    };

    const handleSave = () => {
        if (Object.values(errors).some((err) => err)) {
        setMessages({ ...messages, form: "Fix errors before saving!" });
        return;
        }

        const dataToSave = { ...formData };
        if (!dataToSave.password) delete dataToSave.password;

        onSave(dataToSave);
        setPreview(formData.profileImage ? URL.createObjectURL(formData.profileImage) : user.profileImage);
    };

    const handleCancel = () => {
        setFormData({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        profileImage: null,
        });
        setPreview(user.profileImage || null);
        setErrors({});
        setMessages({});
        onCancel && onCancel();
    };

    return (
        <form className="user-edit-form" onSubmit={(e) => e.preventDefault()}>
        {messages.form && <p className="error">{messages.form}</p>}

        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
        {!errors.name && messages.name && <p className="success">{messages.name}</p>}

        <label htmlFor="username">Username*</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p className="error">{errors.username}</p>}
        {!errors.username && messages.username && <p className="success">{messages.username}</p>}

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
        {!errors.email && messages.email && <p className="success">{messages.email}</p>}

        <label htmlFor="password">Password*</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}
        {!errors.password && messages.password && <p className="success">{messages.password}</p>}

        <label htmlFor="profileImage">Profile Image</label>
        <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleChange} />
        {preview && (
            <figure>
            <img src={preview} alt="Profile Preview" />
            <figcaption>Preview</figcaption>
            </figure>
        )}

        <section className="form-buttons">
            <button type="button" className="save" onClick={handleSave}>Save</button>
            <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
        </section>
        </form>
    );
    };

    export default UserEditForm;
