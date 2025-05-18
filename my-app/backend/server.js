const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/projects");
const taskRoutes = require("./routes/tasks");
const attendanceRoutes = require("./routes/attendance");
const messageRoutes = require("./routes/messages");
const submissionRoutes = require("./routes/submissions");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/pm", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/submissions", submissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
