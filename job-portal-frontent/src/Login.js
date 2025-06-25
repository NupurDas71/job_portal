// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Invalid credentials");
        return res.json();
      })
      .then((data) => {
        alert("✅ Login successful!");
        // You can store token or user info if your backend returns it
        // localStorage.setItem("token", data.token);
        navigate("/jobs");
      })
      .catch((err) => {
        console.error(err);
        setError("❌ Invalid email or password.");
      });
  };

  return (
    <div className="form-container">
      <h2>🔐 Login to Job Portal</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button add-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
