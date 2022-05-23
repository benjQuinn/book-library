const { Reader, Book } = require("../src/models");

const getModel = (model) => {
  const models = {
    reader: Reader,
    book: Book,
  };
  return models[model];
};

exports.createItem = async (res, model, item) => {
  const Model = getModel(model);

  try {
    const newModel = await Model.create(item);
    res.status(201).json(newModel);
  } catch (err) {
    err.name === "SequelizeValidationError"
      ? res.status(500).json({ error: err.errors.map((e) => e.message) })
      : res.status(500).json(err);
  }
};
