import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff2e0",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
        boxShadow: "0 -4px 10px rgba(0,0,0,0.05)",
        borderTop: "1px solid #ffcc99",
      }}
    >
      <p style={{ color: "#cc5500", margin: "0" }}>
        &copy; {new Date().getFullYear()} OrangeEventra. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
