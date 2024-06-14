

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Adminheader from '../Components/Adminheader';
// import Swal from 'sweetalert2';

// const UpdateQuiz = () => {
//   const [quizzes, setQuizzes] = useState([]);

//   useEffect(() => {
//     fetchQuizzes();
//   }, []);

//   const fetchQuizzes = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/questions/displayQuizzes');
//       setQuizzes(response.data);
//     } catch (error) {
//       console.error('Error fetching quizzes:', error);
//     }
//   };

//   const handleDelete = async (q_id) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: "If you delete the quiz, then related questions will also be auto deleted.",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       });

//       if (result.isConfirmed) {
//         await axios.delete(`http://localhost:8800/api/questions/deleteQuiz/${q_id}`);
//         setQuizzes(quizzes.filter(quiz => quiz.q_id !== q_id));
//         Swal.fire(
//           'Deleted!',
//           'The quiz has been deleted.',
//           'success'
//         );
//       }
//     } catch (err) {
//       console.log(err);
//       Swal.fire(
//         'Error!',
//         'There was an error deleting the quiz.',
//         'error'
//       );
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Update Quiz" />
//       <div className="flex mt-4 bg-primary justify-center items-center">
//         <div className="bg-white rounded shadow-lg p-6 ml-4 mr-4">
//           <Link to="/QuizCalander" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Quiz</Link>
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="py-2">Student Year</th>
//                 <th className="py-2">Unit</th>
//                 <th className="py-2">Quiz Title</th>
//                 <th className="py-2">Quiz Type</th>
//                 <th className="py-2">Start Date and Time</th>
              
//                 <th className='py-2'>Duration</th>
//                 <th className="py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {quizzes.map(quiz => (
//                 <tr key={quiz.q_id} className="border-b">
//                   <td className="py-2 px-3">{quiz.q_year}</td>
//                   <td className="py-2 px-3">{quiz.q_unit}</td>
//                   <td className="py-2 px-3">{quiz.q_title}</td>
//                   <td className="py-2 px-3">{quiz.quiz_type}</td>
//                   <td className="py-2 px-3">{quiz.start_date}</td>
               
//                   <td className="py-2 px-3">{quiz.duration}</td>
//                   <td className="py-2 px-3">
//                     <Link to={`/UpdateQuiz2/${quiz.q_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 mr-2 rounded">Edit</Link>
//                     <button className="bg-red-500 text-white mt-4 font-bold py-1 px-2 rounded" onClick={() => handleDelete(quiz.q_id)}>Delete</button>
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

// export default UpdateQuiz;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminheader from '../Components/Adminheader';
import Swal from 'sweetalert2';

const UpdateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/questions/displayQuizzes');
      setQuizzes(response.data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleDelete = async (q_id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "If you delete the quiz, then related questions will also be auto deleted.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8800/api/questions/deleteQuiz/${q_id}`);
        setQuizzes(quizzes.filter(quiz => quiz.q_id !== q_id));
        Swal.fire(
          'Deleted!',
          'The quiz has been deleted.',
          'success'
        );
      }
    } catch (err) {
      console.log(err);
      Swal.fire(
        'Error!',
        'There was an error deleting the quiz.',
        'error'
      );
    }
  };

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearchQuery = quiz.q_unit.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYearFilter = yearFilter === "All" || quiz.q_year.toString() === yearFilter;
    const matchesTypeFilter = typeFilter === "All" || quiz.quiz_type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearchQuery && matchesYearFilter && matchesTypeFilter;
  });

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Update Quiz" />
      <div className="flex mt-4 bg-primary justify-center items-center">
        <div className="bg-white rounded shadow-lg p-6 ml-4 mr-4">
          <div className="mb-4 flex justify-between items-center">
            <Link to="/QuizCalander" className="bg-green-500 text-white font-bold py-2 px-4 rounded">Add Quiz</Link>
            <input
              type="text"
              placeholder="Search by Unit"
              className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 w-1/4"
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              value={yearFilter}
              onChange={handleYearFilterChange}
              className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
            >
              <option value="All">All Years</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <select
              value={typeFilter}
              onChange={handleTypeFilterChange}
              className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
            >
              <option value="All">All Types</option>
              <option value="common">Common</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Student Year</th>
                <th className="py-2">Unit</th>
                <th className="py-2">Quiz Title</th>
                <th className="py-2">Quiz Type</th>
                <th className="py-2">Start Date and Time</th>
                <th className='py-2'>Duration</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuizzes.map(quiz => (
                <tr key={quiz.q_id} className="border-b">
                  <td className="py-2 px-3">{quiz.q_year}</td>
                  <td className="py-2 px-3">{quiz.q_unit}</td>
                  <td className="py-2 px-3">{quiz.q_title}</td>
                  <td className="py-2 px-3">{quiz.quiz_type}</td>
                  <td className="py-2 px-3">{quiz.start_date}</td>
                  <td className="py-2 px-3">{quiz.duration}</td>
                  <td className="py-2 px-3">
                    <Link to={`/UpdateQuiz2/${quiz.q_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 mr-2 rounded">Edit</Link>
                    <button className="bg-red-500 text-white mt-4 font-bold py-1 px-2 rounded" onClick={() => handleDelete(quiz.q_id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuiz;
