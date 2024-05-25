import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';

function QuizCalander() {
    const [quizData, setQuizData] = useState({ q_title: '', q_unit: '', q_year: '', start_date: null, end_date: null, duration: '' });
    const [q_id, setQuizId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Convert datetime values to MySQL format
            const formattedData = {
                ...quizData,
                start_date: quizData.start_date ? quizData.start_date.toISOString().slice(0, 19).replace('T', ' ') : null,
                end_date: quizData.end_date ? quizData.end_date.toISOString().slice(0, 19).replace('T', ' ') : null
            };

            const response = await axios.post('http://localhost:8800/api/quizes/createQuiz', formattedData);
            setQuizId(response.data.q_id); 
            navigate(`/CreateQuiz/${response.data.q_id}`);
        } catch (error) {
            console.error("There was an error creating the quiz!", error);
        }
    };

    return (
        <div className='rounded-lg bg-white md:px-10 py-10 w-full'>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-1/2">
                    <div className="p-4">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Student Year</label>
                                <input 
                                    type="text" 
                                    placeholder="2025" 
                                    className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-black-300 rounded-md"
                                    value={quizData.q_year}
                                    onChange={(e) => setQuizData({ ...quizData, q_year: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Unit Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Electronics" 
                                    className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value={quizData.q_unit}
                                    onChange={(e) => setQuizData({ ...quizData, q_unit: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Quiz Title</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter quiz title" 
                                    className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value={quizData.q_title}
                                    onChange={(e) => setQuizData({ ...quizData, q_title: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Start Date</label>
                                <Datetime
                                    className="block mt-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(date) => setQuizData({ ...quizData, start_date: date })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Due Date and Time</label>
                                <Datetime
                                    className="block mt-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(date) => setQuizData({ ...quizData, end_date: date })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Quiz Duration (minutes)</label>
                                <input 
                                    type="number" 
                                    placeholder="Enter quiz duration in minutes" 
                                    className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value={quizData.duration}
                                    onChange={(e) => setQuizData({ ...quizData, duration: e.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-end items-center p-4 border-t">
                        <button onClick={handleSubmit} className="bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded">Create quiz</button>
                        {q_id && (
                            <Link to={`/CreateQuiz/${q_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 rounded ml-2">Go to Quiz</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizCalander;
