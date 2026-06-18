import videos from "../data/videos";
import VideoCard from "../ui/VideoCard";

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-5xl font-bold mb-10">
        Videos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}