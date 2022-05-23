const { Router } = require("express");
const express = require("express");
const bookController = require("../controllers/book");

const router = express.Router();

// GET
router.get("/", bookController.get_books);
router.get("/:bookId", bookController.get_books_id);
// POST
router.post("/", bookController.create_book);
// PATCH
router.patch("/:bookId", bookController.update_book);
// DELETE
router.delete("/:bookId", bookController.delete_book);

module.exports = router;
