import React from "react";

function EventCard({ event }) {
  if (!event) return null; // safeguard to prevent runtime error

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "#fff",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <img
        src={event.img}
        alt={event.name}
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px" }}
      />
      <h3 style={{ marginTop: "10px", color: "#cc5500" }}>{event.name}</h3>
      <p>{event.date} | {event.time}</p>
      <p>{event.location}</p>
      <button
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#ff8800",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default EventCard;
