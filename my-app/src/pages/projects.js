import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [pmId, setPmId] = useState("1");

  const fetchProjects = async () => {
    const res = await axios.get(`/api/projects?pm_id=${pmId}`);
    setProjects(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <input
        type="text"
        placeholder="PM ID"
        value={pmId}
        onChange={(e) => setPmId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchProjects}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>
      <ul className="mt-5">
        {projects.map((p) => (
          <li key={p.project_id} className="mb-3 border p-4 rounded shadow">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.description}</p>
            <p>Status: {p.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
