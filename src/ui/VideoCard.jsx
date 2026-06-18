import { Play } from "lucide-react";

export default function VideoCard({ video }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-56 w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 p-4 rounded-full">
            <Play className="text-rose-600 fill-rose-600" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <span className="text-sm text-rose-600 font-medium">
          {video.category}
        </span>

        <h2 className="font-bold text-lg mt-2">{video.title}</h2>

        <p className="text-gray-600 text-sm mt-3">{video.description}</p>
      </div>
    </div>
  );
}
