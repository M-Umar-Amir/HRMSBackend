const express = require("express");
const router = express.Router();
const {
  getProjects,
  getEmployeesByProject,
} = require("../controllers/projectController");

router.get("/", getProjects);
router.get("/employees", getEmployeesByProject);

module.exports = router;
