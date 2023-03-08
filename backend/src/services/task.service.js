const model = require('../models/task.model');

const getAll = async () => {
  const result = model.getAll();
  return result;
};

const createOne = async (body) => {
  if (!body.id) return "invalid id";

  const result = model.createOne(body);
  return result;
};

const updateOne = async (body) => {
  if (!body.id) return "invalid id";
  if (!body.data) return "invalid data";

  const result = model.updateOne(body);
  return result;
};

const deleteOne = async (body) => {
  if (!body.id) return "invalid id";

  const result = model.deleteOne(body);
  return result;
};

module.exports = {
  createOne,
  deleteOne,
  getAll,
  updateOne,
}
