import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
// import { login } from "../../api/auth"; // Commented: backend connection
// import { useUser } from "../../context/userContext";
import "./Login.scss";

function Login({ isOpen, onClose }) {
  const navigate = useNavigate();
  // const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // --- Commented backend section for demo ---
      /*
      const { token, user } = await login({ email, password });
      localStorage.setItem("token", token);
      loginUser(user);
      onClose();
      navigate("/home");
      */

      // --- Frontend-only demo (no backend) ---
      console.log("User logged in (demo):", { email, password });
      // loginUser({ email }); // would set user globally if context was active
      onClose();
      navigate("/home");
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Login">
      <form className="login-form" onSubmit={handleLogin}>
        {error && <p className="error-msg">{error}</p>}

        <label>
          Email*
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password*
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
