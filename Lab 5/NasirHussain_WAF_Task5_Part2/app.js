import mongoose from 'mongoose'
// import validator from 'validator';

mongoose
  .connect("mongodb://localhost:27017/guest_house_db")
  .then(() => {
    console.log("Connection Established.....");
  })
  .catch((err) => {
    console.log(err);
  });
  

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
  

  const roomData = [
    { roomNumber: 101, type: 'Single', pricePerNight: 50 },
    { roomNumber: 102, type: 'Double', pricePerNight: 80 },
    { roomNumber: 103, type: 'Suite', pricePerNight: 120 },
    { roomNumber: 104, type: 'Single', pricePerNight: 50 },
    { roomNumber: 105, type: 'Double', pricePerNight: 80 },
  ];
  
  const guestData = [
    { name: 'Nasir Hussain', age: 30, email: 'nasir@example.com' },
    { name: 'Uswah Batool', age: 25, email: 'uswah@example.com' },
    { name: 'Nahida Batool', age: 40, email: 'nahida@example.com' },
    { name: 'Awais Ali', age: 35, email: 'awais@example.com' },
    { name: 'Zia Muhiuddin', age: 28, email: 'zia@example.com' },
  ];
  
  const bookingData = [
    { roomNumber: 101, guestId: null, checkInDate: new Date('2023-11-05'), checkOutDate: new Date('2023-11-10') },
    { roomNumber: 102, guestId: null, checkInDate: new Date('2023-11-08'), checkOutDate: new Date('2023-11-15') },
    { roomNumber: 103, guestId: null, checkInDate: new Date('2023-11-10'), checkOutDate: new Date('2023-11-20') },
    { roomNumber: 101, guestId: null, checkInDate: new Date('2023-11-15'), checkOutDate: new Date('2023-11-20') },
    { roomNumber: 105, guestId: null, checkInDate: new Date('2023-11-12'), checkOutDate: new Date('2023-11-17') },
  ];
  

  Room.insertMany(roomData)
    .then(() => {
      console.log('Rooms data inserted.');
      return Guest.insertMany(guestData);
    })
    .then(() => {
      console.log('Guests data inserted.');
      return Booking.insertMany(bookingData);
    })
    .then(() => {
      console.log('Bookings data inserted.');
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
    });
  