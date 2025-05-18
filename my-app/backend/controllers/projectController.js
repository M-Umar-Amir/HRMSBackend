const pool = require("../db");

exports.getProjects = async (req, res) => {
  const { pm_id } = req.query;
  const [rows] = await pool.execute(
    "SELECT * FROM projects WHERE assigned_pm_id = ?",
    [pm_id]
  );
  res.json(rows);
};

exports.getEmployeesByProject = async (req, res) => {
  const { project_id } = req.query;
  const [rows] = await pool.execute(
    "SELECT * FROM employees WHERE assigned_project_id = ?",
    [project_id]
  );
  res.json(rows);
};
