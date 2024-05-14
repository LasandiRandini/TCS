import { useState, useEffect } from "react";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    file: null,
    video_id: null,
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/videos/displayUnits"
        );
        setVideos(response.data);
      } catch (err) {
        setError("Failed to fetch videos");
      }
    };

    fetchVideos();
  }, []);

  const handleFile = (e) => {
    setInputs({ ...inputs, file: e.target.files[0] });
  };

  const handleUpload = async (videoId) => {
    try {
      const formData = new FormData();
      formData.append("file", inputs.file);
      formData.append("r_unit_id", videoId); 

      await axios.post(
        "http://localhost:8800/api/o_videos/addReceipt",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setInputs({
        file: null,
      });
      setError(null);
    } catch (err) {
      setError("Failed to upload receipt");
    }
  };

  return (
    <div>
      <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="w-full">
            <div className="grid sm:grid-cols-1 grid-cols-1 item-start md:gap-12 gap-8">
              {error ? (
                <p className="text-red-500">Error: {error}</p>
              ) : (
                <div>
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 flex hover:-translate-y-4 transition-all duration-300 relative"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">
                          {video.unit_name}
                        </h3>
                        <p className="text-lg text-gray-500">
                          {video.unit_description}
                        </p>
                        <p className="text-lg font-bold text-black-500">
                          {video.price}
                        </p>
                      </div>
                      <div className="flex mb-4 absolute bottom-10 right-4 py-2 rounded transition duration-300">
                        <div className="text-white">{video.unit_id}</div>
                        <label className="text-sm font-medium mt-5">
                          Upload the Receipt:
                        </label>
                        <div className="mt-2">
                          <input
                            type="file"
                            id="imageUpload"
                            onChange={handleFile}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => handleUpload(video.unit_id)}
                          >
                            Upload
                          </button>
                        </div>
                      </div>

                      <a
                        href="/video-playlist"
                        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Go to Video Playlist
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
