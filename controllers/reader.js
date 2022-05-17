const { Reader } = require("../src/models");

exports.create_reader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

exports.get_readers = async (req, res) => {
  const readers = await Reader.findAll();
  res.status(200).json(readers);
};
