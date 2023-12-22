const express = require('express');
const router = express.Router();
const { Room, Guest, Booking } = require('../models/guestHouseModel');

const getDataFromDB = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    const guests = await Guest.find();
    const bookings = await Booking.find();

    res.json({ rooms, guests, bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get('/data', getDataFromDB);

module.exports = router;
