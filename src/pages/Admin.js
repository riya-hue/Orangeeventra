import React from "react";

function Admin() {
  const adminCards = [
    { title: "Manage Events", description: "Add, update, or remove events" },
    { title: "View Bookings", description: "Track seat bookings and revenue" },
    { title: "Analytics", description: "View reports and trends" },
    { title: "Notifications", description: "Send reminders to users" },
  ];

  return (
    <div style={{ background: "#f0f0f0", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#cc5500", marginBottom: "25px" }}>
        Admin Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          margin: "0 20px",
        }}
      >
        {adminCards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#fff2e0",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ color: "#cc5500", marginBottom: "10px" }}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
