// import blogs from "../../Data/blogs";

// export default function BlogManagementPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-10">
//         Manage Blogs
//       </h1>

//       <div className="space-y-5">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white p-5 rounded-xl shadow flex justify-between"
//           >
//             <div>
//               <h2 className="font-bold">
//                 {blog.title}
//               </h2>

//               <p className="text-gray-500">
//                 {blog.category}
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
//                 Edit
//               </button>

//               <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import blogsData from "../../Data/blogs";

export default function BlogManagementPage() {
  const [blogs, setBlogs] =
    useState(blogsData);

  const handleDelete = (id) => {
    setBlogs(
      blogs.filter(
        (blog) => blog.id !== id
      )
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Blog Management
      </h1>

      <button className="bg-rose-600 text-white px-5 py-3 rounded-xl mb-8">
        Add Blog
      </button>

      <div className="space-y-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-5 rounded-2xl shadow flex justify-between"
          >
            <div>
              <h2 className="font-bold text-xl">
                {blog.title}
              </h2>

              <p>
                {blog.category}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(blog.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}