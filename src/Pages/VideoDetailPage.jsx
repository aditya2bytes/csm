import { useParams } from "react-router-dom";
import videos from "../data/videos";

export default function VideoDetailPage() {
  const { id } = useParams();

  const video = videos.find(
    (item) => item.id === Number(id)
  );

  if (!video) {
    return (
      <div className="text-center py-20">
        Video Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full rounded-2xl"
      />

      <h1 className="text-5xl font-bold mt-10">
        {video.title}
      </h1>

      <p className="text-gray-600 text-lg mt-6 leading-8">
        {video.description}
      </p>
    </div>
  );
}