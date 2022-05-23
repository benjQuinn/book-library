const { Book } = require("../src/models");
const helperFunc = require("./helpers");

exports.create_book = (req, res) => {
  helperFunc.createItem(res, "book", req.body);
};

exports.get_books = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_books_id = async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);

  try {
    !book
      ? res.status(404).json({ error: "The book could not be found." })
      : res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update_book = async (req, res) => {
  const updatedBookRecord = await Book.findByPk(req.params.bookId);

  try {
    await Book.update(req.body, { where: { id: req.params.bookId } });
    !updatedBookRecord
      ? res.status(404).json({ error: "The book could not be found." })
      : res.status(200).json(updatedBookRecord);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete_book = async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);

  try {
    await Book.destroy({ where: { id: req.params.bookId } });
    !book
      ? res.status(404).json({ error: "The book could not be found." })
      : res.status(204).send("Book deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};
