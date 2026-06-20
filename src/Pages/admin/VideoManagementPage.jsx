// import videos from "../../Data/videos";

// export default function VideoManagementPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-10">Manage Videos</h1>

//       <div className="space-y-5">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className="bg-white p-5 rounded-xl shadow flex justify-between"
//           >
//             <div>
//               <h2 className="font-bold">{video.title}</h2>

//               <p className="text-gray-500">{video.category}</p>
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
import videosData from "../../Data/videos";

export default function VideoManagementPage() {
  const [videos, setVideos] = useState(videosData);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Video Management</h1>

      <button className="bg-rose-600 text-white px-5 py-3 rounded-xl mb-8">
        Add Video
      </button>

      <div className="space-y-5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white p-5 rounded-2xl shadow flex justify-between"
          >
            <div>
              <h2 className="font-bold text-xl">{video.title}</h2>

              <p>{video.category}</p>
            </div>

            <div className="flex gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button
                onClick={() => handleDelete(video.id)}
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
