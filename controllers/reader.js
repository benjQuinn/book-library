const { Reader } = require("../src/models");

exports.reader_create = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};
