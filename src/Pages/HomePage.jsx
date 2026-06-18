// import { Link } from "react-router-dom";
// import {
//   Play,
//   FileText,
//   TrendingUp,
//   ArrowRight,
// } from "lucide-react";

// export default function HomePage() {
//   const categories = [
//     "Technology",
//     "Lifestyle",
//     "Travel",
//     "Entertainment",
//     "Tutorials",
//     "News",
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
//         <div className="max-w-7xl mx-auto px-5 py-24">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//               Discover Amazing{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
//                 Stories
//               </span>
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
//                 & Videos
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 leading-8 mb-10">
//               Explore curated blogs and watch engaging videos from creators
//               around the world. Your daily dose of inspiration,
//               education, and entertainment.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="/blogs"
//                 className="flex items-center gap-2 bg-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-700"
//               >
//                 <FileText size={20} />
//                 Read Blogs
//               </Link>

//               <Link
//                 to="/videos"
//                 className="flex items-center gap-2 bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20"
//               >
//                 <Play size={20} />
//                 Watch Videos
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Story */}
//       <section className="max-w-7xl mx-auto px-5 py-16">
//         <div className="flex items-center gap-2 mb-8">
//           <TrendingUp className="text-rose-600" />
//           <h2 className="text-3xl font-bold">
//             Featured Story
//           </h2>
//         </div>

//         <div className="bg-white rounded-2xl shadow p-8">
//           <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm">
//             Technology
//           </span>

//           <h3 className="text-3xl font-bold mt-5">
//             Building Modern Web Applications with React
//           </h3>

//           <p className="text-gray-600 mt-4 leading-8">
//             Learn how React and modern frontend technologies
//             help developers create scalable and responsive web
//             applications.
//           </p>

//           <Link
//             to="/blogs"
//             className="inline-flex items-center gap-2 mt-6 text-rose-600 font-semibold"
//           >
//             Read More
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       {/* Latest Blogs */}
//       <section className="max-w-7xl mx-auto px-5 py-10">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold">
//             Latest Blogs
//           </h2>

//           <Link
//             to="/blogs"
//             className="text-rose-600 font-semibold"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((item) => (
//             <div
//               key={item}
//               className="bg-white rounded-xl shadow overflow-hidden"
//             >
//               <div className="h-48 bg-gray-200"></div>

//               <div className="p-5">
//                 <h3 className="font-bold text-lg mb-2">
//                   Blog Title {item}
//                 </h3>

//                 <p className="text-gray-600 text-sm">
//                   Short description of the blog goes here.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Videos */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl font-bold">
//               Latest Videos
//             </h2>

//             <Link
//               to="/videos"
//               className="text-rose-600 font-semibold"
//             >
//               View All
//             </Link>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((item) => (
//               <div
//                 key={item}
//                 className="bg-white rounded-xl shadow overflow-hidden"
//               >
//                 <div className="h-56 bg-gray-300 flex items-center justify-center">
//                   <Play
//                     size={50}
//                     className="text-gray-600"
//                   />
//                 </div>

//                 <div className="p-5">
//                   <h3 className="font-bold text-lg">
//                     Video Title {item}
//                   </h3>

//                   <p className="text-gray-600 text-sm mt-2">
//                     Video description goes here.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="max-w-7xl mx-auto px-5 py-20">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold mb-5">
//             Explore by Category
//           </h2>

//           <p className="text-gray-600 text-lg">
//             Browse content across various categories including
//             technology, lifestyle, travel, tutorials, and more.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {categories.map((category) => (
//             <Link
//               key={category}
//               to="/blogs"
//               className="bg-white border rounded-2xl p-8 text-center hover:shadow-lg transition"
//             >
//               <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-rose-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl mb-4">
//                 {category[0]}
//               </div>

//               <h3 className="font-semibold">
//                 {category}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

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
