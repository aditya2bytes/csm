

import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Play, FileText } from "lucide-react";

import blogs from "../Data/blogs";
import videos from "../Data/videos";

import BlogCard from "../ui/BlogCard";
import VideoCard from "../ui/VideoCard";

export default function HomePage() {
  const featuredBlog = blogs[0];
  const latestBlogs = blogs.slice(1, 5);
  const latestVideos = videos.slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
                Stories & Videos
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-8 mb-10">
              Explore curated blogs and engaging videos from creators around
              the world.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/blogs"
                className="bg-rose-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
              >
                <FileText size={20} />
                Read Blogs
              </Link>

              <Link
                to="/videos"
                className="border border-white/20 bg-white/10 px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
              >
                <Play size={20} />
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {featuredBlog && (
        <section className="max-w-7xl mx-auto px-5 py-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-rose-600" />
            <h2 className="text-3xl font-bold">
              Featured Story
            </h2>
          </div>

          <BlogCard blog={featuredBlog} />
        </section>
      )}

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Latest Videos
            </h2>

            <Link
              to="/videos"
              className="flex items-center gap-2 text-rose-600 font-semibold"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
