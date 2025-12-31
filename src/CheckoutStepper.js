import React from "react";

function CheckoutStepper({ steps = ["Select Date", "Select Seats", "Your Details", "Confirmation"], activeStep = 0 }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
      {steps.map((step, idx) => (
        <div key={idx} style={{ textAlign: "center", flex: 1 }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: idx <= activeStep ? "#ff8800" : "#ffd699",
              margin: "0 auto",
              lineHeight: "30px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {idx + 1}
          </div>
          <p style={{ marginTop: "5px", fontSize: "14px", color: "#cc5500" }}>{step}</p>
          {idx < steps.length - 1 && (
            <div
              style={{
                height: "4px",
                backgroundColor: idx < activeStep ? "#ff8800" : "#ffd699",
                marginTop: "-15px",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CheckoutStepper;
