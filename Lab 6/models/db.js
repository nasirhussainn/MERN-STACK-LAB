const mongoose = require("mongoose");

const dbURL = "mongodb+srv://nasirhussain:jU8dZ0JDx5nwrWAx@cluster0.slydvpi.mongodb.net/StudentInfoSys"

mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("Connected to DB....");
  })
  .catch((err) => console.log(err));

require("./studentModel");
