const express = require("express");
require("./models/db");
const studentController = require("./controllers/studentController");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/student", studentController);

app.listen(9099, () => {
  console.log("Server started at port 9099");
});
