// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   Home,
//   FileText,
//   Play,
//   Info,
//   Mail,
//   LogIn,
//   Menu,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { path: "/", label: "Home", icon: Home },
//     { path: "/blogs", label: "Blogs", icon: FileText },
//     { path: "/videos", label: "Videos", icon: Play },
//     { path: "/about", label: "About", icon: Info },
//     { path: "/contact", label: "Contact", icon: Mail },
//   ];

//   return (
//     <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="h-16 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
//               <Play className="text-white fill-white w-5 h-5" />
//             </div>

//             <h1 className="text-2xl font-bold text-gray-900">
//               VlogTube
//             </h1>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-3">
//             {navLinks.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
//                       isActive
//                         ? "bg-rose-50 text-rose-600"
//                         : "text-gray-600 hover:bg-gray-100"
//                     }`
//                   }
//                 >
//                   <Icon size={18} />
//                   {item.label}
//                 </NavLink>
//               );
//             })}

//             <Link
//               to="/admin/login"
//               className="flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-lg hover:bg-rose-700 transition"
//             >
//               <LogIn size={18} />
//               Admin
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700"
//           >
//             {isOpen ? (
//               <X size={28} />
//             ) : (
//               <Menu size={28} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden py-4 border-t">
//             <div className="flex flex-col gap-2">
//               {navLinks.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={({ isActive }) =>
//                       `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
//                         isActive
//                           ? "bg-rose-50 text-rose-600"
//                           : "text-gray-700 hover:bg-gray-100"
//                       }`
//                     }
//                   >
//                     <Icon size={18} />
//                     {item.label}
//                   </NavLink>
//                 );
//               })}

//               <Link
//                 to="/admin/login"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-lg bg-rose-600 text-white mt-2"
//               >
//                 <LogIn size={18} />
//                 Admin
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, FileText, Play, Info, Mail, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/blogs", label: "Blogs", icon: FileText },
    { path: "/videos", label: "Videos", icon: Play },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="h-16 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">VlogTube</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                      isActive
                        ? "bg-rose-50 text-rose-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}

            <Link
              to="/admin/login"
              className="flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-lg hover:bg-rose-700"
            >
              <LogIn size={18} />
              Admin
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg ${
                        isActive
                          ? "bg-rose-50 text-rose-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.label}
                  </NavLink>
                );
              })}

              <Link
                to="/admin/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-rose-600 text-white mt-2"
              >
                <LogIn size={18} />
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
