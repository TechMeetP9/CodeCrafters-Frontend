    import { useState } from "react";
    import "./userEditForm.scss";

    const UserEditForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        profileImage: null,
    });

    const [preview, setPreview] = useState(user.profile_image_url || user.profileImage || null);
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
        if (!value.trim()) setErrors((p) => ({ ...p, name: "Enter name" }));
        else if (value.length > 50) setErrors((p) => ({ ...p, name: "Cannot exceed 50 characters" }));
        else setErrors((p) => ({ ...p, name: "" }));
    };

    const validateUsername = (value) => {
        if (!value.trim()) setErrors((p) => ({ ...p, username: "Enter username" }));
        else if (value.length > 30) setErrors((p) => ({ ...p, username: "Cannot exceed 30 characters" }));
        else setErrors((p) => ({ ...p, username: "" }));
    };

    const validateEmail = (value) => {
        if (!value.trim()) setErrors((p) => ({ ...p, email: "Enter email" }));
        else if (value.length > 100) setErrors((p) => ({ ...p, email: "Cannot exceed 100 characters" }));
        else setErrors((p) => ({ ...p, email: "" }));
    };

    const validatePassword = (value) => {
        if (value && value.length > 10)
        setErrors((p) => ({ ...p, password: "Cannot exceed 10 characters" }));
        else setErrors((p) => ({ ...p, password: "" }));
    };

    const handleSave = () => {
        if (Object.values(errors).some((err) => err)) {
        setMessages({ form: "Fix errors before saving!" });
        return;
        }

        const formToSend = new FormData();
        formToSend.append("name", formData.name);
        formToSend.append("username", formData.username);
        formToSend.append("email", formData.email);
        if (formData.password) formToSend.append("password", formData.password);
        if (formData.profileImage) formToSend.append("profile_image", formData.profileImage);

        onSave(formToSend);

        if (formData.profileImage) {
        setPreview(URL.createObjectURL(formData.profileImage));
        }
    };

    const handleCancel = () => {
        setFormData({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        profileImage: null,
        });
        setPreview(user.profile_image_url || null);
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

        <label htmlFor="username">Username*</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p className="error">{errors.username}</p>}

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password (optional)</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

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
