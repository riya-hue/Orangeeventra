const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json({ message: "Booking successful", booking });
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("event user");
  res.json(bookings);
};
