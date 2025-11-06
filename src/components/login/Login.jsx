import React, { useState, useContext } from "react";
import Modal from "../modal/Modal";
import { login } from "../../api/auth";
import { UserContext } from "../../context/userContext";
import "./Login.scss";

function Login({ isOpen, onClose }) {
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { token, user } = await login({ email, password });
      localStorage.setItem("token", token);
      setCurrentUser(user);
      onClose();
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <form className="login-form" onSubmit={handleLogin}>
        {error && <p className="error-msg">{error}</p>}

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </Modal>
  );
}

export default Login;
