const { Reader } = require("../src/models");

exports.create_reader = async (req, res) => {
  try {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
  } catch (err) {
    err.name === "SequelizeValidationError"
      ? res.status(500).json(err.errors.map((e) => e.message))
      : res.status(500).json(err);
  }
};

exports.get_readers = async (req, res) => {
  try {
    const readers = await Reader.findAll();
    res.status(200).json(readers);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.get_reader_id = async (req, res) => {
  const reader = await Reader.findByPk(req.params.readerId);

  try {
    !reader
      ? res.status(404).json({ error: "The reader could not be found." })
      : res.status(200).json(reader);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update_reader = async (req, res) => {
  const updatedReaderRecord = await Reader.findByPk(req.params.readerId);

  try {
    await Reader.update(req.body, { where: { id: req.params.readerId } });
    !updatedReaderRecord
      ? res.status(404).json({ error: "The reader could not be found." })
      : res.status(200).json(updatedReaderRecord);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete_reader = async (req, res) => {
  const reader = await Reader.findByPk(req.params.readerId);

  try {
    await Reader.destroy({ where: { id: req.params.readerId } });
    !reader
      ? res.status(404).json({ error: "The reader could not be found." })
      : res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err);
  }
};
