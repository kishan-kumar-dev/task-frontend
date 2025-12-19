import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DarkModeToggle from "../components/DarkModeToggle";
import TaskModal from "../components/TaskModal";
import api from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.data || []);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleEdit = (task) => { setEditingTask(task); setShowModal(true); };
  const handleCloseModal = () => { setEditingTask(null); setShowModal(false); fetchTasks(); };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
          <div className="flex gap-3">
            <DarkModeToggle />
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition transform"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{task.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{task.description}</p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="font-medium">Priority: </span>{task.priority}
                <span className="font-medium">Status: </span>{task.status}
              </div>
              <button
                onClick={() => handleEdit(task)}
                className="mt-4 bg-secondary hover:bg-green-700 text-white px-3 py-1 rounded shadow"
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {showModal && <TaskModal task={editingTask} onClose={handleCloseModal} />}
      </main>
    </div>
  );
}
