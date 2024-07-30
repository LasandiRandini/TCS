
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Adminheader from "../Components/Adminheader";
import swal from 'sweetalert';
import UpdatePracticalModal from './UpdatePracticalModal';

const DeletePractical = () => {
  const [practicals, setPracticals] = useState([]);
  const [selectedPractical, setSelectedPractical] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPracticals();
  }, []);

  const fetchPracticals = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/practicals/displayPractical');
      setPracticals(response.data);
    } catch (error) {
      console.error('Error fetching practicals:', error);
    }
  };

  const handleDelete = async (practical_id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this practical session. Timeslot selection will also be deleted.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:8800/api/practicals/deletePractical/${practical_id}`);
          setPracticals(practicals.filter(practical => practical.practical_id !== practical_id));
          swal("Poof! Your practical session has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your practical session is safe!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (practical) => {
    setSelectedPractical(practical);
    setIsModalOpen(true);
  };

  const handleAddTimeslots = (practical_id) => {
    navigate(`/AddTimeslots/${practical_id}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPractical(null);
  };

  const handlePracticalUpdate = (updatedPractical) => {
    setPracticals(practicals.map(practical =>
      practical.practical_id === updatedPractical.practical_id ? updatedPractical : practical
    ));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Adminheader pageName="Edit Practical" />
      <div className="flex mt-5 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Manage Practical Sessions</h2>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Title</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Year</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Date</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Duration</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Institute</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Description</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {practicals.map(practical => (
                <tr key={practical.practical_id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b border-gray-300">{practical.title}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{practical.year}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{practical.date}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{practical.duration}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{practical.institute}</td>
                  <td className="py-3 px-4 border-b border-gray-300">{practical.description}</td>
                  <td className="py-3 px-4 border-b border-gray-300 flex space-x-2">
                    <button
                      className="bg-indigo-500 text-white font-bold py-1 px-2 rounded hover:bg-indigo-600 transition duration-300 text-sm"
                      onClick={() => handleUpdate(practical)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-indigo-500 text-white font-bold py-1 px-2 rounded hover:bg-indigo-600 transition duration-300 text-sm"
                      onClick={() => handleAddTimeslots(practical.practical_id)}
                    >
                      Add Timeslots
                    </button>
                    <button
                      className="bg-indigo-500 text-white font-bold py-1 px-2 rounded hover:bg-indigo-600 transition duration-300 text-sm"
                      onClick={() => handleDelete(practical.practical_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpdatePracticalModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        practical={selectedPractical}
        onUpdate={handlePracticalUpdate}
      />
    </div>
  );
};

export default DeletePractical;
