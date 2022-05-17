const { Reader } = require("../src/models");

exports.create_reader = async (req, res) => {
  try {
    const newReader = await Reader.create(req.body);
    res.status(201).json(newReader);
  } catch (err) {
    res.status(500).json(err);
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
  const id = req.params.readerId;
  const reader = await Reader.findByPk(id);

  try {
    !reader
      ? res.status(404).json({ error: "The reader could not be found." })
      : res.status(200).json(reader);
  } catch (err) {
    res.status(500).json(err);
  }
};
