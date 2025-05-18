import { useState } from "react";
import axios from "axios";

function Attendance() {
  const [pmId, setPmId] = useState("1");
  const [attendance, setAttendance] = useState([]);

  const fetchAttendance = async () => {
    const res = await axios.get(`/api/attendance/logs?pm_id=${pmId}`);
    setAttendance(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Attendance Logs</h1>
      <input
        type="text"
        placeholder="PM ID"
        value={pmId}
        onChange={(e) => setPmId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchAttendance}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>
      <ul className="mt-5">
        {attendance.map((a) => (
          <li key={a.attendance_id} className="mb-3 border p-4 rounded shadow">
            <p>Date: {a.date}</p>
            <p>Status: {a.status}</p>
            <p>
              Location: {a.location_lat}, {a.location_lng}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
