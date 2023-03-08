const service = require('../services/task.service');

const getAll = async (_req, res) => {
  try {
    const data = service.getAll();
    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({"err": "err"});
  }
};

const createOne = async (req, res) => {
  try {
    const data = service.createOne(req.body);

    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({"err": "err"});
  }
};

const updateOne = async (req, res) => {
  try {
    const data = service.updateOne(req.body);

    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({"err": "err"});
  }
};

const deleteOne = async (req, res) => {
  try {
    const data = service.deleteOne(req.body);

    return res.status(200).json({data});
  } catch (error) {
    return res.status(500).json({"err": "err"});
  }
};

module.exports = {
  createOne,
  deleteOne,
  getAll,
  updateOne,
}
