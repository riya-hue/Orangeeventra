import React from "react";
import EventCard from "../components/EventCard";
import movieImg from "../assets/events/movie.jpg";
import sportsImg from "../assets/events/sports.jpg";
import theatreImg from "../assets/events/theatre.jpg";
import comedyImg from "../assets/events/comedy.jpg";

const events = [
  { name: "Movie Premiere", img: movieImg, date: "2026-04-12", time: "7:00 PM", location: "Pune" },
  { name: "Sports Championship", img: sportsImg, date: "2026-05-20", time: "5:00 PM", location: "Chennai" },
  { name: "Theatre Play", img: theatreImg, date: "2026-06-15", time: "6:00 PM", location: "Kolkata" },
  { name: "Comedy Show", img: comedyImg, date: "2026-07-10", time: "8:00 PM", location: "Hyderabad" },
];

function Events() {
  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ color: "#cc5500", marginBottom: "20px" }}>All Events</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
