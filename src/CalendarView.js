import React from "react";

function CalendarView({ selectedDate, setSelectedDate }) {
  return (
    <div>
      <input
        type="date"
        value={selectedDate.toISOString().split("T")[0]}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
        style={{ padding: "10px", fontSize: "16px", borderRadius: "6px" }}
      />
    </div>
  );
}

export default CalendarView;
