

// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { LayoutDashboard, FileText, Play, LogOut } from "lucide-react";
// import { useAuth } from "../../Context/AuthContext";

// export default function AdminLayout() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-72 bg-gray-900 text-white flex flex-col">
//         <div className="p-6 border-b border-gray-700">
//           <h1 className="text-3xl font-bold">
//             Admin Panel
//           </h1>
//         </div>

//         <nav className="flex-1 p-5 space-y-3">
//           <NavLink
//             to="/admin"
//             end
//             className={({ isActive }) =>
//               `flex items-center gap-3 p-3 rounded-lg ${
//                 isActive
//                   ? "bg-rose-600"
//                   : "hover:bg-gray-800"
//               }`
//             }
//           >
//             <LayoutDashboard />
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/admin/blogs"
//             className={({ isActive }) =>
//               `flex items-center gap-3 p-3 rounded-lg ${
//                 isActive
//                   ? "bg-rose-600"
//                   : "hover:bg-gray-800"
//               }`
//             }
//           >
//             <FileText />
//             Manage Blogs
//           </NavLink>

//           <NavLink
//             to="/admin/videos"
//             className={({ isActive }) =>
//               `flex items-center gap-3 p-3 rounded-lg ${
//                 isActive
//                   ? "bg-rose-600"
//                   : "hover:bg-gray-800"
//               }`
//             }
//           >
//             <Play />
//             Manage Videos
//           </NavLink>
//         </nav>

//         {/* Bottom */}
//         <div className="border-t border-gray-700 p-5">
//           <p className="mb-4">
//             User : {user?.name}
//           </p>

//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 bg-rose-600 py-3 rounded-lg"
//           >
//             <LogOut />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Content */}
//       <main className="flex-1 bg-gray-100 p-8">
//         <Outlet />
//       </main>
//     </div>
//   );
// }


import {
  LayoutDashboard,
  FileText,
  Video,
  LogOut,
  Play,
  Menu,
  X,
} from "lucide-react";

import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function AdminLayout() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      path: "/admin/blogs",
      label: "Blog Management",
      icon: FileText,
    },
    {
      path: "/admin/videos",
      label: "Video Management",
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
        fixed
        top-0
        left-0
        h-full
        w-72
        bg-white
        border-r
        z-50
        transition-transform
        duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0
      `}
      >
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
              <Play className="text-white fill-white w-5 h-5" />
            </div>

            <h1 className="text-2xl font-bold">
              VlogTube
            </h1>
          </div>
        </div>

        <nav className="p-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                onClick={() =>
                  setSidebarOpen(false)
                }
                className={({
                  isActive,
                }) =>
                  `flex items-center gap-3 p-3 rounded-xl transition ${
                    isActive
                      ? "bg-rose-50 text-rose-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t bg-white">
          <div className="mb-4">
            <p className="font-medium">
              User : {user?.name}
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex justify-center items-center gap-2 bg-rose-600 text-white py-3 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <div className="lg:ml-72">
        <header className="bg-white border-b p-4 flex justify-between lg:justify-end">
          <button
            onClick={() =>
              setSidebarOpen(true)
            }
            className="lg:hidden"
          >
            <Menu />
          </button>

          <a
            href="/"
            className="text-gray-600"
          >
            View Site
          </a>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}