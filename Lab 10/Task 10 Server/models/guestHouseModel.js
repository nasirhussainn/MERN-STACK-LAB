const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: Number,
    type: String,
    pricePerNight: Number,
  });
  
  const guestSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
  });
  
  const bookingSchema = new mongoose.Schema({
    roomNumber: Number,
    checkInDate: Date,
    checkOutDate: Date,
  });
  

  const Room = mongoose.model('Room', roomSchema);
  const Guest = mongoose.model('Guest', guestSchema);
  const Booking = mongoose.model('Booking', bookingSchema);

  module.exports = {
    Room,
    Guest,
    Booking
  };