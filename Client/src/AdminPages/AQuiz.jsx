import { useState } from "react";


function AVideo() {
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedYear, setSelectedYear] = useState("Electronics");
  const [selectedTime, setSelectedTime] = useState("Electronics");
  const [selectedDate, setSelectedDate] = useState("Electronics");
  const [studentStatus, setStudentStatus] = useState("Physical");
  const [videoOption, setVideoOption] = useState("Upload a video");
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleUnitNameChange = (event) => {
    setUnitName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleStudentStatusChange = (event) => {
    setStudentStatus(event.target.value);
  };

  const handleVideoOptionChange = (event) => {
    setVideoOption(event.target.value);
  };

  const handleVideoUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedVideo(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", {
      unitName,
      description,
      selectedYear,
      studentStatus,
      videoOption,
      uploadedVideo,
    });
  };

  return (
    <>
      <div className="flex">
        
        <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col mb-4">
            <label htmlFor="selectYear" className="text-sm font-medium mb-1">
              Select Year:
            </label>
            <select
              id="selectYear"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="Electronics">2025 A/L</option>
              <option value="Mathematics">2026 A/L</option>
              <option value="Science">2027 A/L</option>
            </select>
          </div>
          <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-medium text-center pb-6">
              Add New Unit (If you want to add new lesson fill this)
            </h1>

            <div className="flex flex-col mb-4">
              <label htmlFor="unitName" className="text-sm font-medium mb-1">
                Unit Name:
              </label>
              <input
                type="text"
                id="unitName"
                value={unitName}
                onChange={handleUnitNameChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                rows={4}
              />
            </div>
            <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time:</label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
        
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
        

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Add Unit
            </button>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="unitName" className="text-sm font-medium mb-1">
              Select Unit Name:
            </label>
            <select
              id="selectYear"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="Electronics">Electronice</option>
              <option value="Mathematics">Electricity</option>
              <option value="Science">Heat</option>
            </select>
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
              rows={4}
            />
          </div>
          <div className="flex flex-col mt-6 mb-4">
            <label className="text-sm font-medium mb-1">Student Status:</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  id="physical"
                  name="studentStatus"
                  value="Physical"
                  checked={studentStatus === "Physical"}
                  onChange={handleStudentStatusChange}
                  className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">Physical</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="online"
                  name="studentStatus"
                  value="Online"
                  checked={studentStatus === "Online"}
                  onChange={handleStudentStatusChange}
                  className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">Online</span>
              </label>
            </div>
            <div className="flex flex-col mt-6 mb-4">
              <label className="text-sm font-medium mb-1">
                Videos upload options:
              </label>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    id="uploadVideo"
                    name="videoOption"
                    value="Upload a video"
                    checked={videoOption === "Upload a video"}
                    onChange={handleVideoOptionChange}
                    className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm">Upload a video</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="useExistingVideo"
                    name="videoOption"
                    value="Youtube video"
                    checked={videoOption === "Youtube video"}
                    onChange={handleVideoOptionChange}
                    className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm">Youtube video (link)</span>
                </label>
              </div>
              {videoOption === "Upload a video" && (
                <div className="mt-2">
                  <input
                    type="file"
                    id="videoUpload"
                    onChange={handleVideoUpload}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              )}
              {videoOption === "Youtube video" && (
                <div className="container mx-auto bg-gray-100 p-6 rounded-lg mt-6 shadow-md">
                  <div>
                    <label className="text-sm mt-6 font-medium mb-1">
                      Videos visibility:
                    </label>
                    <div className="flex items-center space-x-4">
                      <label>
                        <input
                          type="radio"
                          id="uploadVideo"
                          name="visibility"
                          value="Public"
                          checked={videoOption === "Public"}
                          onChange={handleVideoOptionChange}
                          className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm">Public</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="useExistingVideo"
                          name="visibility"
                          value="Private"
                          checked={videoOption === "Private"}
                          onChange={handleVideoOptionChange}
                          className="w-4 h-4 border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm">Private</span>
                      </label>
                    </div>
                    <div className="flex flex-col mb-4">
                      <label
                        htmlFor="videoLink"
                        className="text-sm font-medium mb-1"
                      >
                        Video Link:
                      </label>
                      <input
                        type="text"
                        id="videoLink"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 mt-6 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Submit the Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AVideo;
