const mongoose = require("mongoose");

const dbURL =
  "mongodb://localhost:27017/guest_house_db";

mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("Connected to DB....");
  })
  .catch((err) => console.log(err));

require("./guestHouseModel");
