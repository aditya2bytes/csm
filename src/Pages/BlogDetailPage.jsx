import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="text-center py-20">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[450px] object-cover rounded-2xl"
      />

      <h1 className="text-5xl font-bold mt-10">
        {blog.title}
      </h1>

      <p className="text-gray-600 mt-6 text-lg leading-8">
        {blog.description}
      </p>
    </div>
  );
}