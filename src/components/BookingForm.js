import React, { useState } from "react";

function BookingForm({ selectedDate, selectedSeats }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} on ${selectedDate.toDateString()} with ${selectedSeats.length} seats.`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff2e0", padding: "30px", borderRadius: "12px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ color: "#cc5500", marginBottom: "20px" }}>Your Details</h2>

      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />

      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />

      <label>Phone</label>
      <input type="text" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle} />

      <button type="submit" style={submitButtonStyle}>Confirm Booking</button>
    </form>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0 20px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#ff8800",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "all 0.3s ease",
};

export default BookingForm;
