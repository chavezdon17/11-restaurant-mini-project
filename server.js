const express = require("express");
const path = require("path");
const fs = require("fs");

// // Sets up the Express app to handle data parsing

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const testArray = [
  {
    customerName: "Bob",
    phoneNumber: "925-736-6537",
    id: "1",
    email: "bob@gmail.com",
  },
];
//routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
  res.json(testArray);
});
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
