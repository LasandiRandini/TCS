

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const QuizResults = ({ quizId }) => {
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizResults = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResults/${quizId}`);
//                 setResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching quiz results:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizResults();
//     }, [quizId]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto mt-8">
//             <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg">
//                     <thead className="bg-blue-500 text-white">
//                         <tr>
//                             <th className="py-2 px-4">Student Name</th>
//                             <th className="py-2 px-4">Mark</th>
//                             <th className="py-2 px-4">Question</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {results.map((result, index) => (
//                             <tr key={index} className="even:bg-gray-100">
//                                 <td className="py-2 px-4 border-b">{result.studentName}</td>
//                                 <td className="py-2 px-4 border-b">{result.mark}</td>
//                                 <td className="py-2 px-4 border-b">{result.question}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// QuizResults.propTypes = {
//     quizId: PropTypes.number.isRequired
// };

// export default QuizResults;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams to extract parameters from the URL

// const QuizResults = () => {
//     const { quizId } = useParams(); // Use useParams to get quizId from the URL
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizResults = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResults/${quizId}`);
//                 setResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching quiz results:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizResults();
//     }, [quizId]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto mt-8">
//             <h2 className="text-3xl font-bold mb-6 text-center">Quiz Results</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg">
//                     <thead className="bg-blue-500 text-white">
//                         <tr>
//                             <th className="py-2 px-4">Student ID</th>
//                             <th className="py-2 px-4">Mark</th>
//                             <th className="py-2 px-4">Question</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {results.map((result, index) => (
//                             <tr key={index} className="even:bg-gray-100">
//                                 <td className="py-2 px-4 border-b">{result.studentID}</td>
//                                 <td className="py-2 px-4 border-b">{result.mark}</td>
//                                 <td className="py-2 px-4 border-b">{result.question}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default QuizResults;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const QuizResults = () => {
//     const { quizId } = useParams();
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizResults = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResults/${quizId}`);
//                 setResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching quiz results:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizResults();
//     }, [quizId]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto mt-8">
//             <h2 className="text-3xl font-bold mb-6 text-center">Quiz Results</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg">
//                     <thead className="bg-blue-500 text-white">
//                         <tr>
//                             <th className="py-2 px-4">Student ID</th>
//                             <th className="py-2 px-4">Total Marks</th>
//                             <th className="py-2 px-4">Questions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {results.map((result, index) => (
//                             <tr key={index} className="even:bg-gray-100">
//                                 <td className="py-2 px-4 border-b">{result.studentID}</td>
//                                 <td className="py-2 px-4 border-b">{result.totalMarks}</td>
//                                 <td className="py-2 px-4 border-b">{result.questions ? result.questions.join(', ') : ''}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default QuizResults;

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const QuizResults = () => {
//     const { quizId } = useParams();
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchQuizResults = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResults/${quizId}`);
//                 setResults(response.data);
//             } catch (error) {
//                 console.error('Error fetching quiz results:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizResults();
//     }, [quizId]);

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto mt-8 px-4">
//             <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Quiz Results</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg">
//                     <thead className="bg-blue-600 text-white">
//                         <tr>
//                             <th className="py-3 px-4">Student ID</th>
//                             <th className="py-3 px-4">Student Name</th>
//                             <th className="py-3 px-4">Question 01</th>
//                             <th className="py-3 px-4">Question 02</th>
//                             <th className="py-3 px-4">Question 03</th>
//                             <th className="py-3 px-4">Question 04</th>
//                             <th className="py-3 px-4">Total Marks</th>
//                             <th className="py-3 px-4">Rank</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {results.map((result, index) => (
//                             <tr key={index} className="even:bg-gray-100">
//                                 <td className="py-3 px-4 border-b">{result.id}</td>
//                                 <td className="py-3 px-4 border-b">{result.name}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.marks[1] ? '✓' : ''}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.marks[2] ? '✓' : ''}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.marks[3] ? '✓' : ''}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.marks[4] ? '✓' : ''}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.total}</td>
//                                 <td className="py-3 px-4 border-b text-center">{result.rank}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default QuizResults;


import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizResults = () => {
    const { quizId } = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizResults = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResults/${quizId}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching quiz results:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizResults();
    }, [quizId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Quiz Results</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4">Student ID</th>
                            <th className="py-3 px-4">Student Name</th>
                            <th className="py-3 px-4">Question 01</th>
                            <th className="py-3 px-4">Question 02</th>
                            <th className="py-3 px-4">Question 03</th>
                            <th className="py-3 px-4">Question 04</th>
                            <th className="py-3 px-4">Total Marks</th>
                            <th className="py-3 px-4">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index} className="even:bg-gray-100">
                                <td className="py-3 px-4 border-b">{result.id}</td>
                                <td className="py-3 px-4 border-b">{result.name}</td>
                                <td className="py-3 px-4 border-b text-center">{result.marks[1] ? '✓' : ''}</td>
                                <td className="py-3 px-4 border-b text-center">{result.marks[2] ? '✓' : ''}</td>
                                <td className="py-3 px-4 border-b text-center">{result.marks[3] ? '✓' : ''}</td>
                                <td className="py-3 px-4 border-b text-center">{result.marks[4] ? '✓' : ''}</td>
                                <td className="py-3 px-4 border-b text-center">{result.total}</td>
                                <td className="py-3 px-4 border-b text-center">{result.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuizResults;
