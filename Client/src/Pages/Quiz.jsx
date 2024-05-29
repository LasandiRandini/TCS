import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/quizes/getAllQuizzes');
                setQuizzes(response.data);
                
        setQuizzes((response.data).filter(quiz => quiz.q_year == user.al_year));
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };

        fetchQuizzes();
    });

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const date = dateTime.toLocaleDateString();
        const time = dateTime.toLocaleTimeString();
        return { date, time };
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Quizzes</h1>
            <ul className="space-y-6">
                {quizzes.map(quiz => (
                    <li key={quiz.q_id} className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col items-start">
                        <h3 className="text-2xl text-red-600 font-semibold mb-2">{quiz.q_unit}</h3>
                            <h3 className="text-2xl font-semibold mb-2">{quiz.q_title}</h3>
                            <p className="text-gray-600 font-semibold mb-2">
                                Start Date: {formatDateTime(quiz.start_date).date} 
                                <br /> 
                                Start Time: {formatDateTime(quiz.start_date).time}
                            </p>
                            <p className="text-gray-600 font-semibold mb-2">
                                End Date: {formatDateTime(quiz.end_date).date} 
                                <br />
                                End Time: {formatDateTime(quiz.end_date).time}
                            </p>
                            <Link 
                                to={`/Quiz2/${quiz.q_id}`} 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Start Quiz
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
