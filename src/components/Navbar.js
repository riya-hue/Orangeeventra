import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notifications from "./Notifications";
import ProfileMenu from "./ProfileMenu";

function Navbar() {
  const [showExplore, setShowExplore] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#FFF2E0",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo / Brand */}
      <Link
        to="/"
        style={{
          color: "#FF8800",
          fontWeight: 700,
          fontSize: "24px",
          textDecoration: "none",
        }}
      >
        OE
      </Link>

      {/* Right-side menu */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {/* Explore Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowExplore(!showExplore)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cc5500",
              backgroundColor: "#ff8800",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Explore ▼
          </button>

          {showExplore && (
            <div
              style={{
                position: "absolute",
                right: 0,
                marginTop: "8px",
                backgroundColor: "#fff2e0",
                border: "1px solid #cc5500",
                borderRadius: "8px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
                zIndex: 10,
              }}
            >
              <Link to="/events" style={dropdownItemStyle}>
                All Events
              </Link>
              <Link to="/booking" style={dropdownItemStyle}>
                My Bookings
              </Link>
              <Link to="/admin" style={dropdownItemStyle}>
                Admin Panel
              </Link>
            </div>
          )}
        </div>

        {/* Notifications */}
        <Notifications />

        {/* Quick Links */}
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/events" style={quickLinkStyle}>
            Browse Events
          </Link>
          <Link to="/booking" style={quickLinkStyle}>
            Book Tickets
          </Link>
          {/* Calendar link removed */}
        </div>

        {/* Profile / Auth Buttons */}
        {isLoggedIn ? (
          <ProfileMenu handleLogout={handleLogout} />
        ) : (
          <>
            <Link to="/login" style={authButtonStyle}>
              Sign In
            </Link>
            <Link to="/register" style={authButtonStyle}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const dropdownItemStyle = {
  display: "block",
  padding: "10px 15px",
  color: "#cc5500",
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
  borderBottom: "1px solid #ffd699",
};

const quickLinkStyle = {
  padding: "6px 10px",
  borderRadius: "6px",
  backgroundColor: "#ffcc80",
  color: "#cc5500",
  textDecoration: "none",
  fontWeight: 500,
};

const authButtonStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #cc5500",
  backgroundColor: "#fff2e0",
  color: "#ff8800",
  fontWeight: 600,
  cursor: "pointer",
};

export default Navbar;
