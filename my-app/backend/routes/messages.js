const express = require("express");
const router = express.Router();
const { getMessagesBySender } = require("../controllers/messageController");

router.get("/", getMessagesBySender);

module.exports = router;
