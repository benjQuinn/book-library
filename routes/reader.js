const express = require("express");
const readerController = require("../controllers/reader");

const router = express.Router();

router.post("/", readerController.reader_create);

module.exports = router;
