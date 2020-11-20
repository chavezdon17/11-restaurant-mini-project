const express = require("express");
const path = require("path");
const fs = require("fs");

// // Sets up the Express app to handle data parsing

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "resrvation.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
