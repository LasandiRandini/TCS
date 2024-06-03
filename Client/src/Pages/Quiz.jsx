

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const Quiz = () => {
// //   const [quizzes, setQuizzes] = useState([]);
// //   const user = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     const fetchQuizzes = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:8800/api/quizes/getAllQuizzes"
// //         );
// //         const filteredQuizzes = response.data.filter(
// //           (quiz) => quiz.q_year == user.al_year
// //         );
// //         setQuizzes(filteredQuizzes);
// //       } catch (error) {
// //         console.error("Error fetching quizzes:", error);
// //       }
// //     };

// //     fetchQuizzes();
// //   }, [user.al_year]);

// //   const formatDateTime = (dateTimeString) => {
// //     const dateTime = new Date(dateTimeString);
// //     const date = dateTime.toLocaleDateString();
// //     const time = dateTime.toLocaleTimeString();
// //     return { date, time };
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen  bg-gray-100">
// //       <div className="container ml-10 mr-10 mx-auto p-7">
// //         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
// //           {quizzes.map((quiz) => (
// //             <div
// //               key={quiz.q_id}
// //               className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
// //             >
// //               <div className="flex flex-col items-start p-2">
// //                 <h3 className="text-2xl font-bold mb-2">{quiz.q_unit}</h3>
// //                 <h2 className="text-xl font-bold mb-2">{quiz.q_title}</h2>
             

// //                 <div className="flex justify-between w-full text-gray-700 mb-4 p-10">
// //                   <div className="">
// //                     <p className="font-semibold">
// //                       Start Date: {formatDateTime(quiz.start_date).date}
// //                     </p>
// //                     <p className="font-semibold">
// //                       Start Time: {formatDateTime(quiz.start_date).time}
// //                     </p>
// //                   </div>
// //                   <div className="">
// //                     <p className="font-semibold">
// //                       End Date: {formatDateTime(quiz.end_date).date}
// //                     </p>
// //                     <p className="font-semibold">
// //                       End Time: {formatDateTime(quiz.end_date).time}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <Link
// //                   to={`/Quiz2/${quiz.q_id}`}
// //                   className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
// //                 >
// //                   Start Quiz
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Quiz;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Quiz = () => {
//   const [commonQuizzes, setCommonQuizzes] = useState([]);
//   const [weeklyQuizzes, setWeeklyQuizzes] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8800/api/quizes/getAllQuizzes"
//         );
//         const filteredQuizzes = response.data.filter(
//           (quiz) => quiz.q_year == user.al_year
//         );
//         setCommonQuizzes(filteredQuizzes.filter(quiz => quiz.quiz_type === 'common'));
//         setWeeklyQuizzes(filteredQuizzes.filter(quiz => quiz.quiz_type === 'weekly'));
//       } catch (error) {
//         console.error("Error fetching quizzes:", error);
//       }
//     };

//     fetchQuizzes();
//   }, [user.al_year]);

//   const formatDateTime = (dateTimeString) => {
//     const dateTime = new Date(dateTimeString);
//     const date = dateTime.toLocaleDateString();
//     const time = dateTime.toLocaleTimeString();
//     return { date, time };
//   };

//   const isQuizActive = (endDate) => {
//     return new Date(endDate) > new Date();
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-300">
//       <div className="container mx-auto p-6">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4 mt-10 ">Common Quizzes</h2>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
//             {commonQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex flex-col items-start p-2">
//                   <h3 className="text-2xl font-bold mb-2">{quiz.q_unit}</h3>
//                   <h2 className="text-xl font-bold mb-2">{quiz.q_title}</h2>
//                   <div className="flex justify-between w-full text-gray-700 mb-4 p-10">
//                     <div className="">
//                       <p className="font-semibold">
//                         Start Date: {formatDateTime(quiz.start_date).date}
//                       </p>
//                       <p className="font-semibold">
//                         Start Time: {formatDateTime(quiz.start_date).time}
//                       </p>
//                     </div>
//                     <div className="">
//                       <p className="font-semibold">
//                         End Date: {formatDateTime(quiz.end_date).date}
//                       </p>
//                       <p className="font-semibold">
//                         End Time: {formatDateTime(quiz.end_date).time}
//                       </p>
//                     </div>
//                   </div>
//                   <Link
//                     to={`/Quiz2/${quiz.q_id}`}
//                     className={`${
//                       isQuizActive(quiz.end_date) ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
//                     } text-white px-4 py-2 rounded transition-colors duration-300`}
//                     onClick={(e) => {
//                       if (!isQuizActive(quiz.end_date)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     Start Quiz
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold mb-5">Weekly Quizzes</h2>
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
//             {weeklyQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex flex-col items-start p-2">
//                   <h3 className="text-2xl font-bold mb-2">{quiz.q_unit}</h3>
//                   <h2 className="text-xl font-bold mb-2">{quiz.q_title}</h2>
//                   <div className="flex justify-between w-full text-gray-700 mb-4 p-10">
//                     <div className="">
//                       <p className="font-semibold">
//                         Start Date: {formatDateTime(quiz.start_date).date}
//                       </p>
//                       <p className="font-semibold">
//                         Start Time: {formatDateTime(quiz.start_date).time}
//                       </p>
//                     </div>
//                     <div className="">
//                       <p className="font-semibold">
//                         End Date: {formatDateTime(quiz.end_date).date}
//                       </p>
//                       <p className="font-semibold">
//                         End Time: {formatDateTime(quiz.end_date).time}
//                       </p>
//                     </div>
//                   </div>
//                   <Link
//                     to={`/Quiz2/${quiz.q_id}`}
//                     className={`${
//                       isQuizActive(quiz.end_date) ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
//                     } text-white px-4 py-2 rounded transition-colors duration-300`}
//                     onClick={(e) => {
//                       if (!isQuizActive(quiz.end_date)) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     Start Quiz
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CLASS from '../assets/class.png';

const Quiz = () => {
  const [commonQuizzes, setCommonQuizzes] = useState([]);
  const [weeklyQuizzes, setWeeklyQuizzes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/quizes/getAllQuizzes"
        );
        const filteredQuizzes = response.data.filter(
          (quiz) => quiz.q_year == user.al_year
        );
        setCommonQuizzes(filteredQuizzes.filter(quiz => quiz.quiz_type === 'common'));
        setWeeklyQuizzes(filteredQuizzes.filter(quiz => quiz.quiz_type === 'weekly'));
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, [user.al_year]);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    return { date, time };
  };

  const isQuizActive = (endDate) => {
    return new Date(endDate) > new Date();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center "
      style={{ backgroundImage: `url(${CLASS})` }}
    >
      <div className="container mx-auto p-6 rounded-lg ml-5 mr-5">
        <div className="mb-8 ml-5 mr-5 ">
          <h2 className="text-2xl font-bold mb-4  text-white mt-10">Weekly Quizzes</h2>
          <div className=" space-y-4 rounded-lg shadow-md p-5 container mx-auto p-6 bg-gray-300 bg-opacity-75">
            {weeklyQuizzes.map((quiz) => (
              <div
                key={quiz.q_id}
                className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
              >
                <div>
                    <div className="flex">
                  <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit} </h3>
                  <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
                  <h3 className="text-xl font-bold text-red-700 mb-2"> {quiz.q_title}</h3>
                  </div>
                  <p className="text-gray-600">Closed: {formatDateTime(quiz.end_date).date}, {formatDateTime(quiz.end_date).time}</p>
                </div>
                <Link
                  to={`/Quiz2/${quiz.q_id}`}
                  className={`${
                    isQuizActive(quiz.end_date) ? 'bg-blue-800 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
                  } text-white px-4 py-2 rounded`}
                  onClick={(e) => {
                    if (!isQuizActive(quiz.end_date)) {
                      e.preventDefault();
                    }
                  }}
                >
                  Start Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-5 mr-5">
          <h2 className="text-2xl font-bold text-white mb-5">Other Available Quizzes</h2>
          <div className="space-y-4 rounded-lg shadow-md p-5 container mx-auto p-6 bg-gray-300 bg-opacity-75    ">
            {commonQuizzes.map((quiz) => (
              <div
                key={quiz.q_id}
                className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
              >
                <div>
                <div className="flex">
                  <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit}</h3>
                  <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
                  <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_title}</h3>
                  </div>
                  <p className="text-gray-700">Closed: {formatDateTime(quiz.end_date).date}, {formatDateTime(quiz.end_date).time}</p>
                </div>
                <Link
                  to={`/Quiz2/${quiz.q_id}`}
                  className={`${
                    isQuizActive(quiz.end_date) ? 'bg-blue-800 rounded hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                  } text-white px-4 py-2 rounded`}
                  onClick={(e) => {
                    if (!isQuizActive(quiz.end_date)) {
                      e.preventDefault();
                    }
                  }}
                >
                  Start Quiz
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
