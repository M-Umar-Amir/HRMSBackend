const express = require("express");
const router = express.Router();
const { getSubmissionsByTask } = require("../controllers/submissionsController");

router.get("/", getSubmissionsByTask);

module.exports = router;
