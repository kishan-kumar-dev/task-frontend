import { useState, useEffect } from "react";
import api from "../services/api";

export default function TaskModal({ task, onClose }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "pending");
  const [priority, setPriority] = useState(task?.priority || "medium");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (task) {
        await api.put(`/tasks/${task._id}`, { title, description, status, priority });
      } else {
        await api.post("/tasks", { title, description, status, priority });
      }
      onClose();
    } catch (err) {
      setError(err.response?.data?.error?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {task ? "Edit Task" : "Add New Task"}
        </h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="flex gap-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="flex-1 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold mt-2 shadow disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Saving..." : task ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}
