const express = require("express");
const router = express.Router();
const {
  createTask,
  updateTask,
  getTasksByEmployee,
} = require("../controllers/taskController");

router.post("/", createTask);
router.put("/:id", updateTask);
router.get("/", getTasksByEmployee);

module.exports = router;
