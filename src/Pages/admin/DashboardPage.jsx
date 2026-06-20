// import blogs from "../../Data/blogs";
// import videos from "../../Data/videos";

// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-10">
//         Dashboard
//       </h1>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-8 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold">
//             Total Blogs
//           </h2>

//           <p className="text-5xl font-bold mt-5 text-rose-600">
//             {blogs.length}
//           </p>
//         </div>

//         <div className="bg-white p-8 rounded-2xl shadow">
//           <h2 className="text-xl font-semibold">
//             Total Videos
//           </h2>

//           <p className="text-5xl font-bold mt-5 text-rose-600">
//             {videos.length}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import blogs from "../../Data/blogs";
import videos from "../../Data/videos";

import {
  FileText,
  Video,
  Eye,
} from "lucide-react";

export default function DashboardPage() {
  const blogViews = blogs.reduce(
    (sum, item) => sum + item.views,
    0
  );

  const videoViews = videos.reduce(
    (sum, item) => sum + item.views,
    0
  );

  const cards = [
    {
      title: "Total Blogs",
      value: blogs.length,
      icon: FileText,
    },
    {
      title: "Total Videos",
      value: videos.length,
      icon: Video,
    },
    {
      title: "Blog Views",
      value: blogViews,
      icon: Eye,
    },
    {
      title: "Video Views",
      value: videoViews,
      icon: Eye,
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <Icon className="mb-5 text-rose-600" />

              <h2 className="text-4xl font-bold">
                {card.value}
              </h2>

              <p className="text-gray-500 mt-2">
                {card.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}