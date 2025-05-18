import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Tasks from "./pages/tasks";
import Projects from "./pages/projects";
import Employees from "./pages/employees";
import Submissions from "./pages/submissions";
import Attendance from "./pages/attendance";
import Messages from "./pages/messages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
