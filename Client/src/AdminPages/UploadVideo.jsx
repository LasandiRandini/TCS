import { useEffect, useState } from "react";
// import axios from "axios";
import Adminheader from "../Components/Adminheader";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [videoperc, setVideoperc] = useState(0);

  useEffect(() => {
    video && handleUpload(video, "videoUrl");
  }, [video]);

  const uploadFile = async (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "videUrl" ? "images/" : "videos/";
    const fileName = new Data().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl"
        ? setImgPerc
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log(" Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            console.log(error);
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
          default:
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);
          // setInputs((prev) => {
          //   return{
          //     ...prev,
          //     [fileType]:downloadURL,
          //   };
          // });
        });
      }
    );
  };
}

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   "http://localhost:5000/upload",
      //   formData,
      //   {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Adminheader pageName="Add a Notice" />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Video Upload</h1>
          <p className="text-gray-600">Select a video file to upload</p>
        </header>
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-indigo-50 file:text-indigo-700
                       hover:file:bg-indigo-100 mb-4"
          />
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md
                       hover:bg-indigo-700 transition duration-300"
          >
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
