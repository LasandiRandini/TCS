import { useState } from "react";
import Dashboard from "../Components/Dashboard";

function AVideo() {
  const [Name, setName] = useState("");

  const [Year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", {
      Name,
      Year,
      uploadedImage,
    });
  };

  return (
    <>
      <div className="flex">
        <Dashboard />
        <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4  px-5">Notice Details</h1>
          <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <label htmlFor="Name" className="text-sm font-medium mb-1">
                Practical Name:
              </label>
              <input
                type="text"
                id="Name"
                value={Name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="Year" className="text-sm font-medium mb-1">
                Year:
              </label>
              <textarea
                id="Year"
                value={Name}
                onChange={handleYearChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={1}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="text-sm font-medium mb-1">
                Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={2}
              />
            </div>

            <div className="flex flex-col mt-6 mb-4">
              <label className="text-sm font-medium mb-1">Image upload :</label>

              <div className="mt-2">
                <input
                  type="file"
                  id="imageUpload"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 mt-6 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Create Notice
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AVideo;
