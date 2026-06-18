import { useState } from "react";

import blogs from "../data/blogs";
import categories from "../data/categories";

import BlogCard from "../ui/BlogCard";
import SearchBar from "../ui/SearchBar";
import CategoryFilter from "../ui/CategoryFilter";

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch =
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "" ||
      blog.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-5xl font-bold mb-10">
        Blogs
      </h1>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search blogs..."
        />

        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}