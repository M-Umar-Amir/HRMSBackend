import { useState } from "react";
import axios from "axios";

function Employees() {
  const [projectId, setProjectId] = useState("");
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get(
      `/api/projects/employees?project_id=${projectId}`
    );
    setEmployees(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Employees in Project</h1>
      <input
        type="text"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchEmployees}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>
      <ul className="mt-5">
        {employees.map((emp) => (
          <li key={emp.employee_id} className="mb-3 border p-4 rounded shadow">
            <h3 className="font-bold">{emp.full_name}</h3>
            <p>
              {emp.email} — {emp.designation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
