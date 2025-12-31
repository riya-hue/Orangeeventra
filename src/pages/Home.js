import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

// Singer images
import arijitImg from "../assets/singers/arijit.jpg";
import shreyaImg from "../assets/singers/shreya.jpg";
import armaanImg from "../assets/singers/armaan.jpg";

// Event images
import movieImg from "../assets/events/movie.jpg";
import sportsImg from "../assets/events/sports.jpg";
import theatreImg from "../assets/events/theatre.jpg";
import comedyImg from "../assets/events/comedy.jpg";

// Upcoming
import apdhillonImg from "../assets/upcoming/apdhillon.jpg";
import concert2Img from "../assets/upcoming/concert2.jpg";
import movie2Img from "../assets/upcoming/movie2.jpg";

const topSingers = [
  { name: "Arijit Singh", img: arijitImg, date: "2026-01-15", time: "7:00 PM", location: "Mumbai" },
  { name: "Shreya Ghosal", img: shreyaImg, date: "2026-02-10", time: "6:30 PM", location: "Delhi" },
  { name: "Armaan Malik", img: armaanImg, date: "2026-03-05", time: "8:00 PM", location: "Bangalore" },
];

const events = [
  { name: "Movie Premiere", img: movieImg, date: "2026-04-12", time: "7:00 PM", location: "Pune" },
  { name: "Sports Championship", img: sportsImg, date: "2026-05-20", time: "5:00 PM", location: "Chennai" },
  { name: "Theatre Play", img: theatreImg, date: "2026-06-15", time: "6:00 PM", location: "Kolkata" },
  { name: "Comedy Show", img: comedyImg, date: "2026-07-10", time: "8:00 PM", location: "Hyderabad" },
];

const upcomingEvents = [
  { name: "AP Dhillon Live", img: apdhillonImg, date: "2026-08-05", time: "7:30 PM", location: "Delhi" },
  { name: "Concert 2", img: concert2Img, date: "2026-09-12", time: "8:00 PM", location: "Mumbai" },
  { name: "Movie 2 Premiere", img: movie2Img, date: "2026-10-20", time: "6:00 PM", location: "Bangalore" },
];

function Home() {
  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Welcome Section */}
      <div className="fade-in" style={welcomeSectionStyle}>
        <h1>Welcome to OrangeEventra 🍊</h1>
        <p style={{ fontWeight: 600 }}>
          Where experiences come alive — book, host, and enjoy unforgettable events.
        </p>
        <p>Discover concerts, movies, sports, theatre plays, and comedy shows.</p>
        <p>Hosting your own event? Manage seats, set pricing, and track bookings with ease.</p>
        <Link to="/admin">
          <button style={ctaButtonStyle}>Host Your Event</button>
        </Link>
      </div>

      {/* Top Singers */}
      <h2 style={{ color: "#cc5500", marginBottom: "20px" }}>Top Singers</h2>
      <div style={gridStyle()}>
        {topSingers.map((singer, idx) => (
          <div key={idx} style={cardHoverStyle}>
            <img src={singer.img} alt={singer.name} style={cardImageStyle} />
            <h3>{singer.name}</h3>
            <p>{singer.date} | {singer.time}</p>
            <p>{singer.location}</p>
            <Link to="/booking" state={{ preSelectedDate: new Date(singer.date) }}>
              <button style={ctaButtonStyle}>Book Now</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Events Section */}
      <h2 style={{ color: "#cc5500", marginBottom: "20px" }}>Events 2026</h2>
      <div style={gridStyle()}>
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>

      {/* Upcoming Events */}
      <h2 style={{ color: "#cc5500", marginBottom: "20px" }}>Upcoming Events</h2>
      <div style={gridStyle()}>
        {upcomingEvents.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </div>
  );
}

// Styles
const welcomeSectionStyle = {
  background: "#fff2e0",
  padding: "40px",
  borderRadius: "12px",
  marginBottom: "40px",
  textAlign: "center",
  color: "#cc5500",
};

const ctaButtonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#ff8800",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "all 0.3s ease",
};

const cardHoverStyle = {
  borderRadius: "12px",
  background: "#fff",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
};

const cardImageStyle = {
  width: "100%",
  borderRadius: "12px",
  height: "250px",
  objectFit: "cover",
};

const gridStyle = () => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginBottom: "40px",
});

export default Home;
