const Videos = () => {
  // Add your YouTube video IDs here
  // Extract the video ID from YouTube URL (e.g., from https://www.youtube.com/watch?v=VIDEO_ID)
  const videos = [
    // Example: "dQw4w9WgXcQ" - replace with your actual video IDs
    // Add more video IDs as needed
    "oUB4seF9hSE",
    "4pxpnwkangM",
    "avJVK82bGLE",
    "Q8aXzqHf9Sk",
    "Z0f6bWahUMA",
    "zaZPBQ4IMRQ"
  ];

  const getEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div id="videos" className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[40px] text-black text-center mb-12 font-semibold tracking-wide">
          Our Videos
        </h1>

        {videos.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            <p className="text-lg">No videos added yet. Add YouTube video IDs in the Videos component.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4">
              {videos.map((videoId, index) => (
                <div
                  key={index}
                  className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={getEmbedUrl(videoId)}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
            <div className="text-center mt-16 mb-8">
              <a
                href="https://www.youtube.com/@alikhanyansproject"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                Check Out Our YouTube Channel
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Videos;

