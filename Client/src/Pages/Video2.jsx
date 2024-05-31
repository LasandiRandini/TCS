

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Modal } from "flowbite-react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "../firebase";

// const Video = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);
//   const [inputs, setInputs] = useState({
//     file: null,
//     video_id: null,
//   });
//   const [uploadPerc, setUploadPerc] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"))
//   console.log(user);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8800/api/videos/displayUnits"
//         );
//         console.log(response.data);
//         setVideos((response.data).filter(Video => Video.v_year === user.al_year));
//       } catch (err) {
//         setError("Failed to fetch videos");
//       }
//     };

//     fetchVideos();
//   });

//   const handleFile = (e) => {
//     setInputs({ ...inputs, file: e.target.files[0] });
//   };

//   const uploadFileToFirebase = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, `uploads/${fileName}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadPerc(Math.round(progress));
//         },
//         (error) => {
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   const handleUpload = async (videoId) => {
//     try {
//       if (!inputs.file) {
//         setError("No file selected");
//         return;
//       }

//       const fileUrl = await uploadFileToFirebase(inputs.file);

//       const formData = {
//         r_unit_id: videoId,
//         fileUrl,
//       };

//       await axios.post(
//         "http://localhost:8800/api/o_videos/addReceipt",
//         formData
//       );

//       setInputs({ file: null });
//       setError(null);
//       setUploadPerc(0);
//       setOpenModal(true);
//     } catch (err) {
//       setError("Failed to upload receipt");
//     }
//   };

//   return (
//     <div className="container mx-auto my-24 px-4 ">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-1 ">
//         {error ? (
//           <p className="text-red-500">Error: {error}</p>
//         ) : (
//           videos.map((video, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 relative"
//             >
//               <h3 className="text-xl font-semibold mb-2">{video.unit_name}</h3>
//               <p className="text-gray-600 mb-4">{video.unit_description}</p>
//               <p className="text-lg font-bold text-black-500">{video.price}LKR</p>
//               <input
//                 type="file"
//                 id={`file-${index}`}
//                 accept="image/*,.pdf"
//                 onChange={handleFile}
//                 className="hidden"
//               />
//               <label
//                 htmlFor={`file-${index}`}
//                 className="w-1/2 block px-4 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-blue-400 transition duration-300"
//               >
//                 Upload Receipt
//               </label>
//               <button
//                 onClick={() => handleUpload(video.unit_id)}
//                 className=" flex mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600 transition duration-300"
//               >
//                 Upload
//               </button>
//               {uploadPerc > 0 && (
//                 <p className="text-gray-600 mt-2">Uploading: {uploadPerc}%</p>
//               )}
//               <a
//                 href="/video-playlist"
//                 className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//               >
//                 Go to Video Playlist
//               </a>
//             </div>
//           ))
//         )}
//       </div>

//       <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
//         <Modal.Header />
//         <Modal.Body>
//           <div className="text-center">
//             <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
//             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//               Thank you for choosing us as your guide. Please wait while we send an email to confirm your payment.
//             </h3>
//             <div className="flex justify-center gap-4">
//               <Button color="red" onClick={() => setOpenModal(false)}>
//                 Close
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Video;


import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    file: null,
    video_id: null,
  });
  const [uploadPerc, setUploadPerc] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/videos/displayUnits"
        );
        console.log(response.data);
        setVideos(response.data.filter((video) => video.v_year === user.al_year));
      } catch (err) {
        setError("Failed to fetch videos");
      }
    };

    fetchVideos();
  }, [user.al_year]);

  const handleFile = (e) => {
    setInputs({ ...inputs, file: e.target.files[0] });
  };

  const uploadFileToFirebase = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `uploads/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadPerc(Math.round(progress));
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleUpload = async (videoId) => {
    try {
      if (!inputs.file) {
        setError("No file selected");
        return;
      }

      const fileUrl = await uploadFileToFirebase(inputs.file);

      const formData = {
        r_unit_id: videoId,
        u_id: user.id, // Include user ID
        fileUrl,
      };

      await axios.post(
        "http://localhost:8800/api/o_videos/addReceipt",
        formData
      );

      setInputs({ file: null });
      setError(null);
      setUploadPerc(0);
      setOpenModal(true);
    } catch (err) {
      setError("Failed to upload receipt");
    }
  };

  return (
    <div className="container mx-auto my-24 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 relative"
            >
              <h3 className="text-xl font-semibold mb-2">{video.unit_name}</h3>
              <p className="text-gray-600 mb-4">{video.unit_description}</p>
              <p className="text-lg font-bold text-black-500">{video.price} LKR</p>
              <input
                type="file"
                id={`file-${index}`}
                accept="image/*,.pdf"
                onChange={handleFile}
                className="hidden"
              />
              <label
                htmlFor={`file-${index}`}
                className="w-1/2 block px-4 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-blue-400 transition duration-300"
              >
                Upload Receipt
              </label>
              <button
                onClick={() => handleUpload(video.unit_id)}
                className="flex mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600 transition duration-300"
              >
                Upload
              </button>
              {uploadPerc > 0 && (
                <p className="text-gray-600 mt-2">Uploading: {uploadPerc}%</p>
              )}
              <a
                href="/video-playlist"
                className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Go to Video Playlist
              </a>
            </div>
          ))
        )}
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Thank you for choosing us as your guide. Please wait while we send an email to confirm your payment.
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setOpenModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
