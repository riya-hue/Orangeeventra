import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert(`Registered as ${name}`);
      navigate("/login"); // Redirect to login
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#cc5500", marginBottom: "20px" }}>Register</h2>

      <form onSubmit={handleRegister} style={formStyle}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={btnStyle}>
          Register
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </p>
    </div>
  );
}

// Reuse same styles
const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "30px",
  background: "#fff2e0",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cc5500",
  outline: "none",
};

const btnStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#ff8800",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const linkStyle = {
  color: "#ff8800",
  fontWeight: 600,
  textDecoration: "none",
};

export default Register;
