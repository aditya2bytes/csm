// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";

// import HomePage from "./pages/HomePage";

// function Blogs() {
//   return <h1 className="text-4xl p-10">Blogs Page</h1>;
// }

// function Videos() {
//   return <h1 className="text-4xl p-10">Videos Page</h1>;
// }

// function About() {
//   return <h1 className="text-4xl p-10">About Page</h1>;
// }

// function Contact() {
//   return <h1 className="text-4xl p-10">Contact Page</h1>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/videos" element={<Videos />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Context/AuthContext";
// import { ToastProvider } from "./hooks/useToast";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import VideosPage from "./Pages/VideosPage";
import VideoDetailPage from "./Pages/VideoDetailPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import AdminLayout from "./Pages/admin/AdminLayout";
import AdminLoginPage from "./Pages/admin/AdminLoginPage";
import DashboardPage from "./Pages/admin/DashboardPage";
import BlogManagementPage from "./Pages/admin/BlogManagementPage";
import VideoManagementPage from "./Pages/admin/VideoManagementPage";

export default function App() {
  return (
    <AuthProvider>
      {/* <ToastProvider> */}
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:id" element={<VideoDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          <Route path="/admin/login" element={<AdminLoginPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />

            <Route path="blogs" element={<BlogManagementPage />} />

            <Route path="videos" element={<VideoManagementPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </ToastProvider> */}
    </AuthProvider>
  );
}
