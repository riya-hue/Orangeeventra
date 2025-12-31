import React from "react";

function SkeletonCard() {
  return (
    <div
      style={{
        width: "220px",
        height: "300px",
        backgroundColor: "#ffd699",
        borderRadius: "10px",
        margin: "10px",
        animation: "pulse 1.5s infinite",
      }}
    ></div>
  );
}

export default SkeletonCard;
