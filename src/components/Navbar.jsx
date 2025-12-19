import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.body.classList.add("bg-gray-900", "text-white");
    else document.body.classList.remove("bg-gray-900", "text-white");
  }, [darkMode]);

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
      <div className="space-x-4">
        <Link to="/" className="font-bold">Task Manager</Link>
        {token ? (
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        ) : (
          <Link to="/login" className="hover:underline">Login</Link>
        )}
        {!token && <Link to="/register" className="hover:underline">Register</Link>}
      </div>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span className="text-sm">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-blue-500"
          />
        </label>
        {token && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
