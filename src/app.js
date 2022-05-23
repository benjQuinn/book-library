const express = require("express");
const readerRoutes = require("../routes/reader");
const bookRoutes = require("../routes/book");

const app = express();

app.use(express.json());

// Artist Routes
app.use("/readers", readerRoutes);

// Book Routes
app.use("/books", bookRoutes);

module.exports = app;
