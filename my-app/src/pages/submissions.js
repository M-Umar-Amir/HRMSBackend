import { useState } from "react";
import axios from "axios";

function Submissions() {
  const [taskId, setTaskId] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    const res = await axios.get(`/api/submissions?task_id=${taskId}`);
    setSubmissions(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Task Submissions</h1>
      <input
        type="text"
        placeholder="Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchSubmissions}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>
      <ul className="mt-5">
        {submissions.map((s) => (
          <li key={s.submission_id} className="mb-3 border p-4 rounded shadow">
            <p>
              <strong>Employee ID:</strong> {s.employee_id}
            </p>
            <p>
              <strong>Comment:</strong> {s.comment}
            </p>
            <p>
              <a
                href={s.file_url}
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View File
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Submissions;
