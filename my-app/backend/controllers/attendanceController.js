const pool = require("../db");

exports.getAttendanceLogs = async (req, res) => {
  const { pm_id } = req.query;
  const [rows] = await pool.execute(
    "SELECT * FROM attendance_logs WHERE pm_id = ?",
    [pm_id]
  );
  res.json(rows);
};
