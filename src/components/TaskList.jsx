import api from "../services/api";

export default function TaskList({ tasks, fetchTasks, setEditTask }) {
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div key={task._id} className="p-4 bg-white rounded shadow-md flex flex-col space-y-2">
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p>Status: <span className="font-medium">{task.status}</span></p>
          <p>Priority: <span className="font-medium">{task.priority}</span></p>
          <div className="flex space-x-2">
            <button
              onClick={() => setEditTask(task)}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
