import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function AdminScan() {
  const [scanResult, setScanResult] = useState("");

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ color: "#cc5500", marginBottom: "20px" }}>Admin QR Scan</h1>

      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (result) setScanResult(result?.text);
            if (error) console.error(error);
          }}
          containerStyle={{ width: "100%" }}
        />
      </div>

      {scanResult && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#fff2e0",
            borderRadius: "8px",
          }}
        >
          <h3>Scanned QR Code:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
}

export default AdminScan;
