const express = require("express");
const {
  getAllOperations,
  getOperation,
  updateOperation
} = require("../controllers/operation");

const router = express.Router();

router.get("/", getAllOperations);
router.get("/:operationid", getOperation);
router.get("/:operationid", updateOperation);

module.exports = router;
