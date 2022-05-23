const { Book } = require("../src/models");

exports.create_book = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    err.name === "SequelizeValidationError"
      ? res.status(500).json({ error: err.errors.map((e) => e.message) })
      : res.status(500).json(err);
  }
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
