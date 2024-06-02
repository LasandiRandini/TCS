

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VideoGallery = () => {
//   const { unitId } = useParams(); 
//   const [videos, setVideos] = useState([]);
//   const [unitName, setUnitName] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:8800/api/o_videos/getVideosByUnitId/${unitId}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           setUnitName(response.data[0].unit_name);
//           setVideos(response.data);
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [unitId]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">{unitName}</h1>
//       <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {videos.map(video => (
//           <div key={video.video_id} className="video-item flex flex-col items-center">
//             <video className="w-full h-auto" controls>
//               <source src={video.video_link} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="mt-2 text-center">{video.video_name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoGallery = () => {
  const { unitId } = useParams(); // Extract unitId from URL parameters
  const [videos, setVideos] = useState([]);
  const [unitName, setUnitName] = useState('');

  useEffect(() => {
    // Fetch videos by unitId
    axios.get(`http://localhost:8800/api/o_videos/getVideosByUnitId/${unitId}`)
      .then(response => {
        if (response.data.length > 0) {
          setUnitName(response.data[0].unit_name); 
          setVideos(response.data); 
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [unitId]); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{unitName}</h1>
      <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map(video => (
          <div key={video.video_id} className="video-item flex flex-col items-center">
            <video className="w-full h-auto" controls>
              <source src={video.video_link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="mt-2 text-center">{video.video_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
