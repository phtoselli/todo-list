const express = require('express');
const { getAll, deleteOne, updateOne, createOne } = require('../controllers/task.controller');

const router = express.Router();

router.route('/:id')
  .put(updateOne)
  .delete(deleteOne);

router.route('/')
  .get(getAll)
  .post(createOne);


module.exports = router;
