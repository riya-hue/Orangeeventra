import React, { useState, useEffect } from "react";

// Dummy notifications list (constant, no need in useEffect deps)
const dummyNotifications = [
  "Event 'Arijit Live' starts in 2 hours!",
  "New Comedy Show added in Pune.",
  "Your booking for Movie Premiere confirmed.",
  "AP Dhillon Concert tickets now available!",
];

function Notifications() {
  const [showList, setShowList] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Simulate live notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotification =
        dummyNotifications[Math.floor(Math.random() * dummyNotifications.length)];
      setNotifications((prev) => [randomNotification, ...prev].slice(0, 5));
    }, 7000); // every 7 seconds
    return () => clearInterval(interval);
  }, []); // ✅ empty dependency array to avoid warnings

  return (
    <div style={{ position: "relative" }}>
      {/* Bell Icon */}
      <div
        onClick={() => setShowList(!showList)}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#ff8800",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(255,136,0,0.6)",
          animation: "pulse 2s infinite",
        }}
      >
        <span style={{ color: "#fff", fontSize: "20px" }}>🔔</span>
      </div>

      {/* Notification List */}
      {showList && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "10px",
            width: "260px",
            backgroundColor: "#fff2e0",
            border: "1px solid #cc5500",
            borderRadius: "8px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          <h4
            style={{
              padding: "10px",
              borderBottom: "1px solid #cc5500",
              margin: 0,
              color: "#cc5500",
            }}
          >
            Notifications
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {notifications.length === 0 && (
              <li style={{ padding: "10px", color: "#cc5500" }}>
                No new notifications
              </li>
            )}
            {notifications.map((note, idx) => (
              <li
                key={idx}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ffd699",
                  color: "#333",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#ffd699")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bell pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 rgba(255,136,0,0.7); }
            50% { box-shadow: 0 0 15px rgba(255,136,0,0.7); }
            100% { box-shadow: 0 0 0 rgba(255,136,0,0.7); }
          }
        `}
      </style>
    </div>
  );
}

export default Notifications;
