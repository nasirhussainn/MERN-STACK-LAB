const express = require("express");
require("./models/db");
const cors = require('cors');


const guestHouseController = require("./controllers/guestHouseController");

const app = express();

app.use(cors());
app.use("/api/guesthouse", guestHouseController); 

const port = 8080;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
