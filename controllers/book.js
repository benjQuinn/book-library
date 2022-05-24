const { Book } = require("../src/models");
const helperFunc = require("./helpers");

exports.create_book = (req, res) => {
  helperFunc.createItem(res, "book", req.body);
};

exports.get_books = (req, res) => {
  helperFunc.getItems(res, "book");
};

exports.get_books_id = (req, res) => {
  helperFunc.getItemById(res, "book", req.params.bookId);
};

exports.update_book = async (req, res) => {
  helperFunc.updateItem(res, "book", req.params.bookId, req.body);
};

exports.delete_book = async (req, res) => {
  helperFunc.deleteItem(res, "book", req.params.bookId);
};
