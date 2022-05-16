const express = require("express");
const readerRoutes = require("../routes/reader");

const app = express();

app.use(express.json());

// Artist Routes
app.use("/readers", readerRoutes);

module.exports = app;
