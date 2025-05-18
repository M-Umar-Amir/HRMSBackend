import { useState, useEffect } from "react";
import axios from "axios";

function Messages() {
  const [teamId, setTeamId] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await axios.get(`/api/messages?sender_id=${teamId}`);
    setMessages(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Team Messages</h1>
      <input
        type="text"
        placeholder="Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
        className="p-2 border rounded mb-3"
      />
      <button
        onClick={fetchMessages}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch
      </button>
      <ul className="mt-5">
        {messages.map((m) => (
          <li key={m.message_id} className="mb-3 border p-4 rounded shadow">
            <p>
              <strong>From:</strong> {m.sender_id} → <strong>To:</strong>{" "}
              {m.receiver_id}
            </p>
            <p>{m.message_body}</p>
            <p className="text-sm text-gray-500">
              {new Date(m.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
