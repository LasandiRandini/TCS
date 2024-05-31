import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminheader from "../Components/Adminheader";

const AddStudent = () => {
  const [nic_no, setNic] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setNic(value);
  };

  const addStudent = async () => {
    try {
      await axios.post("http://localhost:8800/api/checkings/addStudent", {
        nic_no,
      });
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleRegister = async () => {
    await addStudent();
    navigate("/PSignup");
  };

  return (
    <div className="bg-gray-200 min-h-screen">
    <Adminheader pageName="Add Physical Class Students" />
    <div className="max-w-md mx-auto mt-40 p-6 bg-gray-100  shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Register a Physical Student
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">NIC Number:</label>
          <input
            id="nic_no"
            type="text"
            name="nic_no"
            value={nic_no}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs italic">{error}</p>
        )}
        <div className="text-center">
          <button
            type="button"
            onClick={handleRegister}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  )
};

export default AddStudent;
