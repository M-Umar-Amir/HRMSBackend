const pool = require("../db");

exports.createTask = async (req, res) => {
  const {
    title,
    description,
    deadline,
    assigned_by_pm_id,
    assigned_to_employee_id,
  } = req.body;
  await pool.execute(
    "INSERT INTO tasks (title, description, deadline, assigned_by_pm_id, assigned_to_employee_id, status, progress_percentage) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      title,
      description,
      deadline,
      assigned_by_pm_id,
      assigned_to_employee_id,
      "Pending",
      0,
    ]
  );
  res.status(201).json({ message: "Task created" });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { status, progress_percentage } = req.body;
  await pool.execute(
    "UPDATE tasks SET status = ?, progress_percentage = ?, updated_at = NOW() WHERE task_id = ?",
    [status, progress_percentage, id]
  );
  res.json({ message: "Task updated" });
};

exports.getTasksByEmployee = async (req, res) => {
  const { employee_id } = req.query;
  const [rows] = await pool.execute(
    "SELECT * FROM tasks WHERE assigned_to_employee_id = ?",
    [employee_id]
  );
  res.json(rows);
};

exports.getSubmissionsByTask = async (req, res) => {
  const { task_id } = req.query;
  const [rows] = await pool.execute(
    "SELECT * FROM task_submissions WHERE task_id = ?",
    [task_id]
  );
  res.json(rows);
};
