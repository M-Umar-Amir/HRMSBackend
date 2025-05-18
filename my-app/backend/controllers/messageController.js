const pool = require("../db");

exports.getMessagesBySender = async (req, res) => {
  const { sender_id } = req.query;
  if (!sender_id)
    return res.status(400).json({ message: "sender_id required" });

  const [rows] = await pool.execute(
    "SELECT * FROM messages WHERE sender_id = ? OR receiver_id = ? ORDER BY timestamp DESC",
    [sender_id, sender_id]
  );

  res.json(rows);
};
