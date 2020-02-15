const Operation = require("../models/operation");

async function getAllOperations(req, res) {
  const operations = await Operation.findById().exec();
  return res.json(opeations);
}

async function getOperation(req, res) {
  const operation = await Operation.findById(operation._id).exec();

  if (!operation) {
    return res.status(404).json("operation not found");
  }

  return res.json(operation);
}

async function updateOperation(req, res) {
  const { operationid } = req.params;
  const { time, detail } = req.body;

  const newOperation = await Operation.findByIdAndUpdate(
    operationid,
    { time, detail },
    { new: true }
  ).exec();
  if (!operationid) {
    return res.status(404).json("operation not found");
  }

  return res.json(newOperation);
}

module.exports = {
  getAllOperations,
  getOperation,
  updateOperation
};
