import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/login" },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-900 dark:bg-gray-800 text-white min-h-screen transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h1 className="text-xl font-bold">Task Manager</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-700"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            {/* You can replace this with icons */}
            <span className={`${collapsed ? "hidden" : "block"}`}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
