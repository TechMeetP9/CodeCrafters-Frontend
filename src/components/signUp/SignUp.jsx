import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { register } from "../../api/auth";
import { useUser } from "../../context/userContext";
import "./SignUp.scss";

function SignUp({ isOpen, onClose, onSignupSuccess }) {
  const navigate = useNavigate();
  const { loginUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("username", formData.username);
      payload.append("email", formData.email);
      payload.append("password", formData.password);
      if (formData.profileImage) payload.append("profile_image", formData.profileImage);

      const data = await register(payload); 

      localStorage.setItem("token", data.token);
      loginUser(data.user); 

      if (onSignupSuccess) onSignupSuccess(data.user);

      onClose();
      navigate("/home"); 
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign Up">
      <form className="signup-form" onSubmit={handleSignup}>
        {error && <p className="error-msg">{error}</p>}

        <label>
          Name*
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Username*
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>

        <label>
          Email*
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Password*
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Confirm Password*
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>

        <label>
          Profile Image
          <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />
        </label>

        {preview && (
          <figure className="preview-container">
            <img src={preview} alt="Profile Preview" />
            <figcaption>Preview</figcaption>
          </figure>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </Modal>
  );
}

export default SignUp;
