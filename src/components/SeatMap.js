import React from "react";
import availableSeat from "../assets/booking/available.png";
import bookedSeat from "../assets/booking/booked.png";

function SeatMap({ rows, cols, selectedSeats, setSelectedSeats }) {
  const handleSeatClick = (row, col) => {
    const seatId = `${row}-${col}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 40px)`, gap: "5px", justifyContent: "center" }}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const seatId = `${r}-${c}`;
          const isSelected = selectedSeats.includes(seatId);
          const isBooked = false; // Hardcoded for demo, could be dynamic
          return (
            <img
              key={seatId}
              src={isBooked ? bookedSeat : availableSeat}
              alt="seat"
              onClick={() => !isBooked && handleSeatClick(r, c)}
              style={{
                width: "40px",
                height: "40px",
                cursor: isBooked ? "not-allowed" : "pointer",
                border: isSelected ? "3px solid #ff8800" : "2px solid #ccc",
                borderRadius: "4px",
                transition: "all 0.2s",
              }}
            />
          );
        })
      )}
    </div>
  );
}

export default SeatMap;
