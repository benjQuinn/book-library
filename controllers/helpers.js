const { Reader, Book } = require("../src/models");

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
  const models = {
    reader: Reader,
    book: Book,
  };
  return models[model];
};

const removePassword = (obj) => {
  if (obj.hasOwnProperty("password")) {
    delete obj.password;
  }
  return obj;
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

exports.getItems = async (res, model) => {
  const Model = getModel(model);

  try {
    const items = await Model.findAll();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getItemById = async (res, model, id) => {
  const Model = getModel(model);
  const item = await Model.findByPk(id);

  try {
    !item
      ? res.status(404).json(get404Error(model))
      : res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateItem = async (res, model, id, item) => {
  const Model = getModel(model);
  const updatedRecord = await Model.findByPk(id);

  try {
    if (!updatedRecord) {
      res.status(404).json(get404Error(model));
    } else {
      await Model.update(item, { where: { id: id } });
      res.status(200).json(updatedRecord);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteItem = async (res, model, id) => {
  const Model = getModel(model);
  const item = await Model.findByPk(id);

  try {
    if (!item) {
      res.status(404).json(get404Error(model));
    } else {
      await Model.destroy({ where: { id: id } });
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
