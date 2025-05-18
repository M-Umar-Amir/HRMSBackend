const express = require("express");
const router = express.Router();
const { getAttendanceLogs } = require("../controllers/attendanceController");

router.get("/logs", getAttendanceLogs);
module.exports = router;
