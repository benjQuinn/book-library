const express = require("express");
const readerController = require("../controllers/reader");

const router = express.Router();

// GET
router.get("/", readerController.get_readers);
router.get("/:readerId", readerController.get_reader_id);

// POST
router.post("/", readerController.create_reader);

module.exports = router;
