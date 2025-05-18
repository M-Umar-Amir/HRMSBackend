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

const { getSubmissionsByTask } = require("../controllers/taskController");

router.get("/submissions", getSubmissionsByTask);

module.exports = router;
