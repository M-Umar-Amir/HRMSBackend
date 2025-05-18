const pool = require("../db");

exports.getSubmissionsByTask = async (req, res) => {
  const { task_id } = req.query;
  if (!task_id) return res.status(400).json({ message: "task_id required" });

  const [rows] = await pool.execute(
    "SELECT * FROM task_submissions WHERE task_id = ?",
    [task_id]
  );

  res.json(rows);
};
