import { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [employeeId, setEmployeeId] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(`/api/tasks?employee_id=${employeeId}`);
    setTasks(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">View Tasks</h1>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchTasks}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>

      <ul className="mt-5">
        {tasks.map((task) => (
          <li key={task.task_id} className="mb-3 border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
            <p>
              Status: {task.status}, Progress: {task.progress_percentage}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
