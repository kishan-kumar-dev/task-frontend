import { useState, useEffect } from "react";
import api from "../services/api";

export default function TaskForm({ fetchTasks, editTask, setEditTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editTask) {
        await api.put(`/tasks/${editTask._id}`, { title, priority });
        setEditTask(null);
      } else {
        await api.post("/tasks", { title, priority });
      }
      setTitle("");
      setPriority("medium");
      fetchTasks();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-2 mb-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
