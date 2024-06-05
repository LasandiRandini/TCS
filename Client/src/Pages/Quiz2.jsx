// // // import { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';

// // // const Quiz2 = () => {
// // //     const { q_id } = useParams();
// // //     const [questions, setQuestions] = useState(null);
// // //     const [responses, setResponses] = useState({});
// // //     const [result, setResult] = useState(null); // State for the quiz result
// // //     const [timeLeft, setTimeLeft] = useState(null); // State for the countdown timer
// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         const fetchQuestions = async () => {
// // //             try {
// // //                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`);
// // //                 setQuestions(response.data.questions);
// // //                 setTimeLeft(response.data.duration * 60); // Set initial countdown time in seconds
// // //             } catch (error) {
// // //                 console.error('Error fetching quiz questions:', error);
// // //             }
// // //         };

// // //         fetchQuestions();
// // //     }, [q_id]);

// // //     useEffect(() => {
// // //         if (timeLeft === 0) {
// // //             handleSubmit(); // Auto-submit when time is up
// // //         }

// // //         const timer = timeLeft > 0 && setInterval(() => {
// // //             setTimeLeft(timeLeft - 1);
// // //         }, 1000);

// // //         return () => clearInterval(timer);
// // //     }, [timeLeft]);

// // //     const handleAnswerChange = (questionId, answer) => {
// // //         setResponses({ ...responses, [questionId]: answer });
// // //     };

// // //     const handleSubmit = async (event) => {
// // //         if (event) event.preventDefault(); // Prevent default only if there's an event (manual submit)
// // //         try {
// // //             const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
// // //                 quiz_id: q_id,
// // //                 responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer }))
// // //             });
// // //             setResult(response.data); // Set the result in the state
// // //         } catch (error) {
// // //             console.error('Error submitting responses:', error);
// // //         }
// // //     };

// // //     if (!questions) return <div>Loading...</div>;

// // //     const formatTime = (seconds) => {
// // //         const minutes = Math.floor(seconds / 60);
// // //         const secs = seconds % 60;
// // //         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
// // //     };

// // //     // Result interface
// // //     if (result) {
// // //         return (
            
// // //             <div className="rounded-lg bg-white md:px-10 py-12 bg-gray-300 w-full">
// // //                 <h1 className="text-2xl font-bold mb-4">Quiz Result</h1>
// // //                 <div className="text-center">
// // //                     <p className="text-xl font-bold mb-4">
// // //                         You scored {result.totalMarks} out of {questions.length}
// // //                     </p>
// // //                     {result.totalMarks >= questions.length / 2 ? (
// // //                         <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
// // //                     ) : (
// // //                         <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
// // //                     )}
// // //                     <button
// // //                         onClick={() => navigate('/')}
// // //                         className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
// // //                     >
// // //                         Go Home
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         );
// // //     }

// // //     return (
// // //         <div className="rounded-lg bg-white md:px-10 py-12 w-full">
// // //             <h1 className="text-2xl font-bold mb-4">Quiz</h1>
// // //             <div className="mb-4">
// // //                 <span className="font-bold">Time Left: </span>
// // //                 <span>{formatTime(timeLeft)}</span>
// // //             </div>
// // //             <form onSubmit={handleSubmit}>
// // //                 {questions.map((question, qIndex) => (
// // //                     <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
// // //                         <div className="mb-4">
// // //                             <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
// // //                             <p>{question.q_text}</p>
// // //                         </div>
// // //                         {question.answers.map((answer, aIndex) => (
// // //                             <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
// // //                                 <input
// // //                                     type="radio"
// // //                                     name={`question-${qIndex}`}
// // //                                     value={aIndex + 1}
// // //                                     onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
// // //                                     className="mr-2"
// // //                                 />
// // //                                 <span>{answer}</span>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 ))}
// // //                 <div className='ml-auto mr-auto w-4/12 mt-2'>
// // //                     <button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded">
// // //                         Submit Quiz
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default Quiz2;

// // import { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import CLASS from '../assets/class.png';

// // const Quiz2 = () => {
// //     const { q_id } = useParams();
// //     const [questions, setQuestions] = useState(null);
// //     const [responses, setResponses] = useState({});
// //     const [result, setResult] = useState(null);
// //     const [timeLeft, setTimeLeft] = useState(null);
// //     const navigate = useNavigate();
    

// //     useEffect(() => {
// //         const fetchQuestions = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`);
// //                 setQuestions(response.data.questions);
// //                 setTimeLeft(response.data.duration * 60);
// //             } catch (error) {
// //                 console.error('Error fetching quiz questions:', error);
// //             }
// //         };

// //         fetchQuestions();
// //     }, [q_id]);

// //     useEffect(() => {
// //         if (timeLeft === 0) {
// //             handleSubmit();
// //         }

// //         const timer = timeLeft > 0 && setInterval(() => {
// //             setTimeLeft(timeLeft - 1);
// //         }, 1000);

// //         return () => clearInterval(timer);
// //     });

// //     const handleAnswerChange = (questionId, answer) => {
// //         setResponses({ ...responses, [questionId]: answer });
// //     };

// //     const handleSubmit = async (event) => {
// //         if (event) event.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
// //                 quiz_id: q_id,
// //                 responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer }))
// //             });
// //             setResult(response.data);
// //         } catch (error) {
// //             console.error('Error submitting responses:', error);
// //         }
// //     };

// //     if (!questions) return <div>Loading...</div>;

// //     const formatTime = (seconds) => {
// //         const minutes = Math.floor(seconds / 60);
// //         const secs = seconds % 60;
// //         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
// //     };

// //     if (result) {
// //         return (
// //             <div
// //                 className="min-h-screen bg-cover bg-center flex justify-center items-center"
// //                 style={{ backgroundImage: `url(${CLASS})` }}
// //             >
// //                 <div className="container ml-5 mr-5 mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full">
// //                     <h1 className="text-2xl text-cwnter font-bold mb-4">Quiz Result</h1>
// //                     <div className="text-center">
// //                         <p className="text-xl font-bold mb-4">
// //                             You scored {result.totalMarks} out of {questions.length}
// //                         </p>
// //                         {result.totalMarks >= questions.length / 2 ? (
// //                             <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
// //                         ) : (
// //                             <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
// //                         )}
// //                         <button
// //                             onClick={() => navigate('/')}
// //                             className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
// //                         >
// //                             Go Home
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div
// //             className="min-h-screen bg-cover bg-center flex justify-center items-center"
// //             style={{ backgroundImage: `url(${CLASS})` }}
// //         >
// //             <div className="container mx-auto p-6 rounded-lg md:px-10 py-12 ">
             
// //                 <div className="mb-4 mt-10">
// //                     <span className="text-2xl text-white ">Time Left: </span>
// //                     <span className="text-2xl text-white ">{formatTime(timeLeft)}</span>
// //                 </div>
// //                 <form onSubmit={handleSubmit}>
// //                     {questions.map((question, qIndex) => (
// //                         <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
// //                             <div className="mb-4">
// //                                 <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
// //                                 <p>{question.q_text}</p>
// //                             </div>
// //                             {question.answers.map((answer, aIndex) => (
// //                                 <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
// //                                     <input
// //                                         type="radio"
// //                                         name={`question-${qIndex}`}
// //                                         value={aIndex + 1}
// //                                         onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
// //                                         className="mr-2"
// //                                     />
// //                                     <span>{answer}</span>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     ))}
// //                     <div className="ml-auto mr-auto w-4/12 mt-2">
// //                         <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
// //                             Submit Quiz
// //                         </button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Quiz2;

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CLASS from '../assets/class.png';

// const Quiz2 = () => {
//     const { q_id } = useParams();
//     const [questions, setQuestions] = useState(null);
//     const [responses, setResponses] = useState({});
//     const [result, setResult] = useState(null);
//     const [timeLeft, setTimeLeft] = useState(null);
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("user"));

//     useEffect(() => {
//         const fetchQuestions = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`);
//                 setQuestions(response.data.questions);
//                 setTimeLeft(response.data.duration * 60);
//             } catch (error) {
//                 console.error('Error fetching quiz questions:', error);
//             }
//         };

//         fetchQuestions();
//     }, [q_id]);

//     useEffect(() => {
//         if (timeLeft === 0) {
//             handleSubmit();
//         }

//         const timer = timeLeft > 0 && setInterval(() => {
//             setTimeLeft(timeLeft - 1);
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeLeft]);

//     const handleAnswerChange = (questionId, answer) => {
//         setResponses({ ...responses, [questionId]: answer });
//     };

//     const handleSubmit = async (event) => {
//         if (event) event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
//                 quiz_id: q_id,
//                 responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer })),
//                 user_id: user.id // Include the user ID in the request
//             });
//             setResult(response.data);
//         } catch (error) {
//             console.error('Error submitting responses:', error);
//         }
//     };

//     if (!questions) return <div>Loading...</div>;

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     if (result) {
//         return (
//             <div
//                 className="min-h-screen bg-cover bg-center flex justify-center items-center"
//                 style={{ backgroundImage: `url(${CLASS})` }}
//             >
//                 <div className="container ml-5 mr-5 mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full">
//                     <h1 className="text-2xl text-center font-bold mb-4">Quiz Result</h1>
//                     <div className="text-center">
//                         <p className="text-xl font-bold mb-4">
//                             You scored {result.totalMarks} out of {questions.length}
//                         </p>
//                         {result.totalMarks >= questions.length / 2 ? (
//                             <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
//                         ) : (
//                             <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
//                         )}
//                         <button
//                             onClick={() => navigate('/Quiz')}
//                             className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
//                         >
//                             Go Home
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div
//             className="min-h-screen bg-cover bg-center flex justify-center items-center"
//             style={{ backgroundImage: `url(${CLASS})` }}
//         >
//             <div className="container mx-auto p-6 rounded-lg md:px-10 py-12 ">
//                 <div className="mb-4 mt-10">
//                     <span className="text-2xl text-white">Time Left: </span>
//                     <span className="text-2xl text-white">{formatTime(timeLeft)}</span>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     {questions.map((question, qIndex) => (
//                         <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
//                             <div className="mb-4">
//                                 <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
//                                 <p>{question.q_text}</p>
//                             </div>
//                             {question.answers.map((answer, aIndex) => (
//                                 <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
//                                     <input
//                                         type="radio"
//                                         name={`question-${qIndex}`}
//                                         value={aIndex + 1}
//                                         onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
//                                         className="mr-2"
//                                     />
//                                     <span>{answer}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <div className="ml-auto mr-auto w-4/12 mt-2">
//                         <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
//                             Submit Quiz
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Quiz2;


// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import CLASS from '../assets/class.png';

// const Quiz2 = () => {
//     const { q_id } = useParams();
//     const [questions, setQuestions] = useState(null);
//     const [responses, setResponses] = useState({});
//     const [result, setResult] = useState(null);
//     const [timeLeft, setTimeLeft] = useState(null);
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("user"));
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchQuestions = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`, {
//                     params: { user_id: user.id }
//                 });
//                 setQuestions(response.data.questions);
//                 setTimeLeft(response.data.duration * 60);
//             } catch (error) {
//                 if (error.response && error.response.status === 403) {
//                     setError('You have already taken this quiz');
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'You have already taken this quiz!',
//                     });
//                 } else {
//                     console.error('Error fetching quiz questions:', error);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Error',
//                         text: 'An error occurred while fetching quiz questions.',
//                     });
//                 }
//             }
//         };

//         fetchQuestions();
//     }, [q_id, user.id]);

//     useEffect(() => {
//         if (timeLeft === 0) {
//             handleSubmit();
//         }

//         const timer = timeLeft > 0 && setInterval(() => {
//             setTimeLeft(timeLeft - 1);
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeLeft]);

//     const handleAnswerChange = (questionId, answer) => {
//         setResponses({ ...responses, [questionId]: answer });
//     };

//     const handleSubmit = async (event) => {
//         if (event) event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
//                 quiz_id: q_id,
//                 responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer })),
//                 user_id: user.id
//             });
//             setResult(response.data);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Submitted!',
//                 text: 'Your quiz responses have been submitted successfully.',
//             });
//         } catch (error) {
//             console.error('Error submitting responses:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'An error occurred while submitting your responses.',
//             });
//         }
//     };

//     if (error) return <div>{error}</div>;

//     if (!questions) return <div>Loading...</div>;

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     if (result) {
//         return (
//             <div
//                 className="min-h-screen bg-cover bg-center flex justify-center items-center"
//                 style={{ backgroundImage: `url(${CLASS})` }}
//             >
//                 <div className="container ml-5 mr-5 mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full">
//                     <h1 className="text-2xl text-center font-bold mb-4">Quiz Result</h1>
//                     <div className="text-center">
//                         <p className="text-xl font-bold mb-4">
//                             You scored {result.totalMarks} out of {questions.length}
//                         </p>
//                         {result.totalMarks >= questions.length / 2 ? (
//                             <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
//                         ) : (
//                             <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
//                         )}
//                         <button
//                             onClick={() => navigate('/')}
//                             className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
//                         >
//                             Go Home
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div
//             className="min-h-screen bg-cover bg-center flex justify-center items-center"
//             style={{ backgroundImage: `url(${CLASS})` }}
//         >
//             <div className="container mx-auto p-6 rounded-lg md:px-10 py-12 ">
//                 <div className="mb-4 mt-10">
//                     <span className="text-2xl text-white">Time Left: </span>
//                     <span className="text-2xl text-white">{formatTime(timeLeft)}</span>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     {questions.map((question, qIndex) => (
//                         <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
//                             <div className="mb-4">
//                                 <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
//                                 <p>{question.q_text}</p>
//                             </div>
//                             {question.answers.map((answer, aIndex) => (
//                                 <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
//                                     <input
//                                         type="radio"
//                                         name={`question-${qIndex}`}
//                                         value={aIndex + 1}
//                                         onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
//                                         className="mr-2"
//                                     />
//                                     <span>{answer}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <div className="ml-auto mr-auto w-4/12 mt-2">
//                         <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
//                             Submit Quiz
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Quiz2;
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import CLASS from '../assets/class.png';

// const Quiz2 = () => {
//     const { q_id } = useParams();
//     const [questions, setQuestions] = useState(null);
//     const [responses, setResponses] = useState({});
//     const [result, setResult] = useState(null);
//     const [timeLeft, setTimeLeft] = useState(null);
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem("user"));
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchQuestions = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`, {
//                     params: { user_id: user.id }
//                 });
//                 setQuestions(response.data.questions);
//                 setTimeLeft(response.data.duration * 60);
//             } catch (error) {
//                 if (error.response && error.response.status === 403) {
//                     setError('You have already taken this quiz');
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'ඔබ දැනටමත් මෙම ප්‍රශ්න මාලාව කර අවසන් කර ඇත.',
//                     });
//                 } else if (error.response && error.response.status === 404) {
//                     Swal.fire({
//                         icon: 'warning',
//                         title: 'මෙම ප්‍රශ්න මාලාව තවමත් ආරම්භ කර නැත.',
//                     });
//                     navigate('/Quiz'); // Redirect to quiz gallery
//                 } else {
//                     console.error('Error fetching quiz questions:', error);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Error',
//                         text: 'An error occurred while fetching quiz questions.',
//                     });
//                 }
//             }
//         };

//         fetchQuestions();
//     }, [q_id, user.id, navigate]);

//     useEffect(() => {
//         if (timeLeft === 0) {
//             handleSubmit();
//         }

//         const timer = timeLeft > 0 && setInterval(() => {
//             setTimeLeft(timeLeft - 1);
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeLeft]);

//     const handleAnswerChange = (questionId, answer) => {
//         setResponses({ ...responses, [questionId]: answer });
//     };

//     const handleSubmit = async (event) => {
//         if (event) event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
//                 quiz_id: q_id,
//                 responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer })),
//                 user_id: user.id
//             });
//             setResult(response.data);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Submitted!',
//                 text: 'Your quiz responses have been submitted successfully.',
//             });
//         } catch (error) {
//             console.error('Error submitting responses:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'An error occurred while submitting your responses.',
//             });
//         }
//     };

//     if (error) return <div>{error}</div>;

//     if (!questions) return <div>Loading...</div>;

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//     };

//     if (result) {
//         return (
//             <div
//                 className="min-h-screen bg-cover bg-center flex justify-center items-center"
//                 style={{ backgroundImage: `url(${CLASS})` }}
//             >
//                 <div className="container ml-5 mr-5 mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full">
//                     <h1 className="text-2xl text-center font-bold mb-4">Quiz Result</h1>
//                     <div className="text-center">
//                         <p className="text-xl font-bold mb-4">
//                             You scored {result.totalMarks} out of {questions.length}
//                         </p>
//                         {result.totalMarks >= questions.length / 2 ? (
//                             <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
//                         ) : (
//                             <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
//                         )}
//                         <button
//                             onClick={() => navigate('/')}
//                             className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
//                         >
//                             Go Home
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div
//             className="min-h-screen bg-cover bg-center flex justify-center items-center"
//             style={{ backgroundImage: `url(${CLASS})` }}
//         >
//             <div className="container mx-auto p-6 rounded-lg md:px-10 py-12 ">
//                 <div className="mb-4 mt-10">
//                     <span className="text-2xl text-white">Time Left: </span>
//                     <span className="text-2xl text-white">{formatTime(timeLeft)}</span>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     {questions.map((question, qIndex) => (
//                         <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
//                             <div className="mb-4">
//                                 <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
//                                 <p>{question.q_text}</p>
//                             </div>
//                             {question.answers.map((answer, aIndex) => (
//                                 <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
//                                     <input
//                                         type="radio"
//                                         name={`question-${qIndex}`}
//                                         value={aIndex + 1}
//                                         onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
//                                         className="mr-2"
//                                     />
//                                     <span>{answer}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <div className="ml-auto mr-auto w-4/12 mt-2">
//                         <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
//                             Submit Quiz
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Quiz2;

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import CLASS from '../assets/class.png';

const Quiz2 = () => {
    const { q_id } = useParams();
    const [questions, setQuestions] = useState(null);
    const [responses, setResponses] = useState({});
    const [result, setResult] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${q_id}`, {
                    params: { user_id: user.id }
                });
                setQuestions(response.data.questions);
                setTimeLeft(response.data.duration * 60);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    setError('You have already taken this quiz');
                    Swal.fire({
                        icon: 'error',
                        title: 'ඔබ දැනටමත් මෙම ප්‍රශ්න මාලාව කර අවසන් කර ඇත.',
                    });
                } else if (error.response && error.response.status === 404) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'මෙම ප්‍රශ්න මාලාව තවමත් ආරම්භ කර නැත.',
                    });
                    
                } else {
                    console.error('Error fetching quiz questions:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An error occurred while fetching quiz questions.',
                    });
                }
            }
        };

        fetchQuestions();
    }, [q_id, user.id, navigate]);

    useEffect(() => {
        if (timeLeft === 0) {
            handleSubmit();
        }

        const timer = timeLeft > 0 && setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswerChange = (questionId, answer) => {
        setResponses({ ...responses, [questionId]: answer });
    };

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/api/quizes/submitResponse', {
                quiz_id: q_id,
                responses: Object.entries(responses).map(([que_id, answer]) => ({ que_id, answer })),
                user_id: user.id
            });
            setResult(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: 'Your quiz responses have been submitted successfully.',
            });
        } catch (error) {
            console.error('Error submitting responses:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while submitting your responses.',
            });
        }
    };

    if (error) return <div>{error}</div>;

    if (!questions) return <div>Loading...</div>;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    if (result) {
        return (
            <div
                className="min-h-screen bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${CLASS})` }}
            >
                <div className="container ml-5 mr-5 mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full">
                    <h1 className="text-2xl text-center font-bold mb-4">Quiz Result</h1>
                    <div className="text-center">
                        <p className="text-xl font-bold mb-4">
                            You scored {result.totalMarks} out of {questions.length}
                        </p>
                        {result.totalMarks >= questions.length / 2 ? (
                            <p className="text-green-500 text-3xl">🎉 Great job! 🎉</p>
                        ) : (
                            <p className="text-red-500 text-3xl">😢 Better luck next time! 😢</p>
                        )}
                        <button
                            onClick={() => navigate('/')}
                            className="mt-6 bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${CLASS})` }}
        >
            <div className="container mx-auto p-6 rounded-lg md:px-10 py-12 ">
                <div className="mb-4 mt-10">
                    <span className="text-2xl text-white">Time Left: </span>
                    <span className="text-2xl text-white">{formatTime(timeLeft)}</span>
                </div>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, qIndex) => (
                        <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
                                <p>{question.q_text}</p>
                            </div>
                            {question.answers.map((answer, aIndex) => (
                                <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        value={aIndex + 1}
                                        onChange={() => handleAnswerChange(question.que_id, aIndex + 1)}
                                        className="mr-2"
                                    />
                                    <span>{answer}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="ml-auto mr-auto w-4/12 mt-2">
                        <button type="submit" className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                            Submit Quiz
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Quiz2;
