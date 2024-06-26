
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import CLASS from '../assets/class.png';

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

//   const isQuizStart = (startDate) => {
//     return new Date(startDate) <= new Date();
//   };

//   return (
//     <div
//       className="min-h-screen  h-[100%]  bg-cover bg-center flex justify-center items-center "
//       style={{ backgroundImage: `url(${CLASS})` }}
//     >
//       <div className="container my-20 px-2 md:px-12 p-4 min-h-screen">
//         <div className="mb-8 ml-5 mr-5 ">
//           <h2 className="text-2xl font-bold mb-4  text-white ">Weekly Quizzes</h2>
//           <div className=" space-y-4 rounded-lg shadow-md p-5 container mx-auto  bg-gray-300 bg-opacity-75">
//             {weeklyQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
//               >
//                 <div>
//                   <div className="flex">
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit} </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2"> {quiz.q_title}</h3>
//                   </div>
//                   <p className="text-gray-600">Starts: {formatDateTime(quiz.start_date).date}, {formatDateTime(quiz.start_date).time}</p>
//                 </div>
//                 <Link
//                   to={`/Quiz2/${quiz.q_id}`}
//                   className={`${
//                     isQuizStart(quiz.start_date) ? 'bg-blue-800 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
//                   } text-white px-4 py-2 rounded`}
//                   onClick={(e) => {
//                     if (!isQuizStart(quiz.start_date)) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Start Quiz
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="ml-5 mr-5">
//           <h2 className="text-2xl font-bold text-white mb-5">Other Available Quizzes</h2>
//           <div className="space-y-4 rounded-lg shadow-md p-5 container mx-auto p-6 bg-gray-300 bg-opacity-75    ">
//             {commonQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
//               >
//                 <div>
//                   <div className="flex">
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit}</h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_title}</h3>
//                   </div>
//                   <p className="text-gray-700">Closed: {formatDateTime(quiz.end_date).date}, {formatDateTime(quiz.end_date).time}</p>
//                 </div>
//                 <Link
//                   to={`/Quiz2/${quiz.q_id}`}
//                   className={`${
//                     isQuizActive(quiz.end_date) ? 'bg-blue-800 rounded hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
//                   } text-white px-4 py-2 rounded`}
//                   onClick={(e) => {
//                     if (!isQuizActive(quiz.end_date)) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Start Quiz
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import CLASS from '../assets/class.png';

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

//   const isQuizActive = (startDate, endDate, quizType) => {
//     const now = new Date();
//     if (quizType === 'weekly') {
//       const start = new Date(startDate);
//       const activeUntil = new Date(start);
//       activeUntil.setHours(start.getHours() + 24);
//       return now >= start && now <= activeUntil;
//     }
//     return new Date(endDate) > now;
//   };

//   // const isQuizStart = (startDate) => {
//   //   return new Date(startDate) <= new Date();
//   // };

//   return (
//     <div
//       className="min-h-screen  h-[100%]  bg-cover bg-center flex justify-center items-center "
//       style={{ backgroundImage: `url(${CLASS})` }}
//     >
//       <div className="container my-20 px-2 md:px-12 p-4 min-h-screen">
//         <div className="mb-8 ml-5 mr-5 ">
//           <h2 className="text-2xl font-bold mb-4  text-white ">Weekly Quizzes</h2>
//           <div className=" space-y-4 rounded-lg shadow-md p-5 container mx-auto  bg-gray-300 bg-opacity-75">
//             {weeklyQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
//               >
//                 <div>
//                   <div className="flex">
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit} </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2"> {quiz.q_title}</h3>
//                   </div>
//                   <p className="text-gray-600">Starts: {formatDateTime(quiz.start_date).date}, {formatDateTime(quiz.start_date).time}</p>
//                 </div>
//                 <Link
//                   to={`/Quiz2/${quiz.q_id}`}
//                   className={`${
//                     isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type) ? 'bg-blue-800 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
//                   } text-white px-4 py-2 rounded`}
//                   onClick={(e) => {
//                     if (!isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type)) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Start Quiz
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="ml-5 mr-5">
//           <h2 className="text-2xl font-bold text-white mb-5">Other Available Quizzes</h2>
//           <div className="space-y-4 rounded-lg shadow-md p-5 container mx-auto bg-gray-300 bg-opacity-75    ">
//             {commonQuizzes.map((quiz) => (
//               <div
//                 key={quiz.q_id}
//                 className="bg-gray-200 p-3 rounded shadow-lg flex justify-between items-center"
//               >
//                 <div>
//                   <div className="flex">
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_unit}</h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">  -  </h3>
//                     <h3 className="text-xl font-bold text-red-700 mb-2">{quiz.q_title}</h3>
//                   </div>
//                   <p className="text-gray-700">Closed: {formatDateTime(quiz.end_date).date}, {formatDateTime(quiz.end_date).time}</p>
//                 </div>
//                 <Link
//                   to={`/Quiz2/${quiz.q_id}`}
//                   className={`${
//                     isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type) ? 'bg-blue-800 rounded hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
//                   } text-white px-4 py-2 rounded`}
//                   onClick={(e) => {
//                     if (!isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type)) {
//                       e.preventDefault();
//                     }
//                   }}
//                 >
//                   Start Quiz
//                 </Link>
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

  const isQuizActive = (startDate, endDate, quizType) => {
    const now = new Date();
    if (quizType === 'weekly') {
      const start = new Date(startDate);
      const activeUntil = new Date(start);
      activeUntil.setHours(start.getHours() + 2); // Active for only 2 hours
      return now >= start && now <= activeUntil;
    }
    return new Date(endDate) > now;
  };

  return (
    <div
      className="min-h-screen  h-[100%]  bg-cover bg-center flex justify-center items-center "
      style={{ backgroundImage: `url(${CLASS})` }}
    >
      <div className="container my-20 px-2 md:px-12 p-4 min-h-screen">
        <div className="mb-8 ml-5 mr-5 ">
          <h2 className="text-2xl font-bold mb-4  text-white ">Weekly Quizzes</h2>
          <div className=" space-y-4 rounded-lg shadow-md p-5 container mx-auto  bg-gray-300 bg-opacity-75">
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
                  <p className="text-gray-600">Starts: {formatDateTime(quiz.start_date).date}, {formatDateTime(quiz.start_date).time}</p>
                </div>
                <Link
                  to={`/Quiz2/${quiz.q_id}`}
                  className={`${
                    isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type) ? 'bg-blue-800 hover:bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
                  } text-white px-4 py-2 rounded`}
                  onClick={(e) => {
                    if (!isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type)) {
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
          <div className="space-y-4 rounded-lg shadow-md p-5 container mx-auto bg-gray-300 bg-opacity-75">
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
                    isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type) ? 'bg-blue-800 rounded hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                  } text-white px-4 py-2 rounded`}
                  onClick={(e) => {
                    if (!isQuizActive(quiz.start_date, quiz.end_date, quiz.quiz_type)) {
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
