const { Reader } = require("../src/models");
const helperFunc = require("./helpers");

exports.create_reader = async (req, res) => {
  const existingReader = await Reader.findOne({
    where: { email: req.body.email },
  });

  try {
    if (!existingReader) {
      const newReader = await Reader.create(req.body);
      res.status(201).json(newReader);
    } else {
      res
        .status(500)
        .json({ error: "Reader with this email address already exists" });
    }
  } catch (err) {
    err.name === "SequelizeValidationError"
      ? res.status(500).json({ error: err.errors.map((e) => e.message) })
      : res.status(500).json(err);
  }
};

exports.get_readers = (req, res) => {
  helperFunc.getItems(res, "reader");
};

exports.get_reader_id = (req, res) => {
  helperFunc.getItemById(res, "reader", req.params.readerId);
};

exports.update_reader = async (req, res) => {
  helperFunc.updateItem(res, "reader", req.params.readerId, req.body);
};

exports.delete_reader = async (req, res) => {
  helperFunc.deleteItem(res, "reader", req.params.readerId);
};
