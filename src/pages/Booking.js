import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

import CalendarView from "../components/CalendarView";
import SeatMap from "../components/SeatMap";
import CheckoutStepper from "../components/CheckoutStepper";
import BookingForm from "../components/BookingForm";

function Booking() {
  const location = useLocation();
  const preDate = location.state?.preSelectedDate;

  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    preDate ? new Date(preDate) : new Date()
  );
  const [selectedSeats, setSelectedSeats] = useState([]);

  const steps = [
    "Select Date",
    "Select Seats",
    "Your Details",
    "Confirmation",
  ];

  const qrValue = `OE-${selectedDate.toISOString()}-${selectedSeats.join(",")}`;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Booking</h1>

      {/* Stepper */}
      <CheckoutStepper steps={steps} activeStep={step} />

      {/* STEP 1 — DATE */}
      {step === 0 && (
        <div style={centerStyle}>
          <CalendarView
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <button style={btn} onClick={() => setStep(1)}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 — SEATS */}
      {step === 1 && (
        <div style={centerStyle}>
          <SeatMap
            rows={10}
            cols={12}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />

          <div style={{ marginTop: 20 }}>
            <button style={btn} onClick={() => setStep(0)}>
              Back
            </button>
            <button
              style={{ ...btn, marginLeft: 10 }}
              onClick={() => setStep(2)}
              disabled={selectedSeats.length === 0}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 — USER DETAILS */}
      {step === 2 && (
        <div>
          <BookingForm
            selectedDate={selectedDate}
            selectedSeats={selectedSeats}
          />

          <div style={centerStyle}>
            <button style={btn} onClick={() => setStep(1)}>
              Back
            </button>
            <button
              style={{ ...btn, marginLeft: 10 }}
              onClick={() => setStep(3)}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {/* STEP 4 — CONFIRMATION */}
      {step === 3 && (
        <div style={confirmBox}>
          <h2 style={{ color: "#cc5500" }}>🎉 Booking Confirmed!</h2>

          <p>
            ✅ OTP has been sent to your registered mobile number
          </p>
          <p>
            📧 Ticket confirmation sent to your email
          </p>

          <p>
            📅 <b>Date:</b> {selectedDate.toDateString()}
          </p>
          <p>
            💺 <b>Seats:</b> {selectedSeats.join(", ")}
          </p>

          <div style={{ margin: "25px 0" }}>
            <QRCodeCanvas
              value={qrValue}
              size={200}
              bgColor="#ffffff"
              fgColor="#ff8800"
            />
            <p style={{ marginTop: 10 }}>
              📲 Show this QR at venue entry
            </p>
          </div>

          <Link to="/">
            <button style={btn}>Back to Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const containerStyle = {
  maxWidth: "1000px",
  margin: "30px auto",
  padding: "20px",
};

const titleStyle = {
  textAlign: "center",
  color: "#cc5500",
  marginBottom: "30px",
};

const centerStyle = {
  textAlign: "center",
  marginTop: "40px",
};

const btn = {
  padding: "10px 20px",
  backgroundColor: "#ff8800",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
};

const confirmBox = {
  textAlign: "center",
  padding: "40px",
  background: "#fff2e0",
  borderRadius: "12px",
  marginTop: "40px",
};

export default Booking;
