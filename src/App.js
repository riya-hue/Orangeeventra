import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import AdminScan from "./pages/AdminScan";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/scan" element={<AdminScan />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
