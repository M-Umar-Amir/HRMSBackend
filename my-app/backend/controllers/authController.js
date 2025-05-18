const pool = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await pool.execute(
    "SELECT * FROM project_managers WHERE email = ?",
    [email]
  );
  const user = rows[0];

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { pm_id: user.pm_id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.json({ token });
};

exports.getProfile = async (req, res) => {
  const { pm_id } = req.user;
  const [rows] = await pool.execute(
    "SELECT full_name, email, phone, profile_image_url FROM project_managers WHERE pm_id = ?",
    [pm_id]
  );
  res.json(rows[0]);
};
