

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Adminheader from "../Components/Adminheader";
// import swal from 'sweetalert';

// const DeletePractical = () => {
//   const [practicals, setPracticals] = useState([]);

//   useEffect(() => {
//     fetchPracticals();
//   }, []);

//   const fetchPracticals = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/practicals/displayPractical');
//       setPracticals(response.data);
//     } catch (error) {
//       console.error('Error fetching practicals:', error);
//     }
//   };

//   const handleDelete = async (practical_id) => {
//     try {
//       swal({
//         title: "Are you sure?",
//         text: "Once deleted, you will not be able to recover this practical session. Timeslot selection will also be deleted.",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       })
//       .then(async (willDelete) => {
//         if (willDelete) {
//           await axios.delete(`http://localhost:8800/api/practicals/deletePractical/${practical_id}`);
//           setPracticals(practicals.filter(practical => practical.practical_id !== practical_id));
//           swal("Poof! Your practical session has been deleted!", {
//             icon: "success",
//           });
//         } else {
//           swal("Your practical session is safe!");
//         }
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Delete a Practical" />
//       <div className="flex mt-5 bg-primary justify-center items-center">
//         <div className=" bg-white rounded shadow-lg p-6">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="py-2">Title</th>
//                 <th className="py-2">Year</th>
//                 <th className="py-2">Date</th>
//                 <th className="py-2">Duration</th>
//                 <th className="py-2">Institute</th>
//                 <th className="py-2">Description</th>
//                 <th className="py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {practicals.map(practical => (
//                 <tr key={practical.practical_id} className="border-b">
//                   <td className="py-2 px-4">{practical.title}</td>
//                   <td className="py-2 px-4">{practical.year}</td>
//                   <td className="py-2 px-4">{practical.date}</td> 
//                   <td className="py-2 px-4">{practical.duration}</td>
//                   <td className="py-2 px-4">{practical.institute}</td>
//                   <td className="py-2 px-4">{practical.description}</td>
//                   <td className="py-2 px-4">
//                     <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(practical.practical_id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeletePractical;

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
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Delete a Practical" />
      <div className="flex mt-5 bg-primary justify-center items-center">
        <div className="bg-white rounded shadow-lg p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Title</th>
                <th className="py-2">Year</th>
                <th className="py-2">Date</th>
                <th className="py-2">Duration</th>
                <th className="py-2">Institute</th>
                <th className="py-2">Description</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {practicals.map(practical => (
                <tr key={practical.practical_id} className="border-b">
                  <td className="py-2 px-4">{practical.title}</td>
                  <td className="py-2 px-4">{practical.year}</td>
                  <td className="py-2 px-4">{practical.date}</td>
                  <td className="py-2 px-4">{practical.duration}</td>
                  <td className="py-2 px-4">{practical.institute}</td>
                  <td className="py-2 px-4">{practical.description}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-yellow-500 text-white mt-2 font-bold hover:bg-yellow-600 py-1 px-2 rounded mr-2"
                      onClick={() => handleUpdate(practical)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-blue-500 text-white mt-2 font-bold py-1 hover:bg-blue-600 px-2 rounded mr-2"
                      onClick={() => handleAddTimeslots(practical.practical_id)}
                    >
                      Add Timeslots
                    </button>
                    <button
                      className="bg-red-500 text-white mt-2 font-bold py-1 hover:bg-red-600 px-2 rounded"
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
