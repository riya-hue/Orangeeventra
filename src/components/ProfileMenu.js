import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div style={{ position: "relative" }}>
      {/* Profile Avatar / Icon */}
      <div
        onClick={toggleMenu}
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
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
          transition: "all 0.3s ease",
        }}
      >
        U
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "8px",
            backgroundColor: "#fff2e0",
            border: "1px solid #cc5500",
            borderRadius: "8px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            width: "180px",
            zIndex: 20,
          }}
        >
          <Link to="/profile" style={menuItemStyle}>
            My Profile
          </Link>
          <Link to="/booking" style={menuItemStyle}>
            My Bookings
          </Link>
          <Link to="/login" style={menuItemStyle}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

const menuItemStyle = {
  display: "block",
  padding: "10px 15px",
  color: "#cc5500",
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  borderBottom: "1px solid #ffd699",
};

export default ProfileMenu;
