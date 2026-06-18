import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm text-rose-600 font-medium">
          {blog.category}
        </span>

        <h2 className="text-lg font-bold mt-2 line-clamp-2">{blog.title}</h2>

        <p className="text-gray-600 text-sm mt-3 line-clamp-3">
          {blog.description}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-block mt-4 text-rose-600 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
