

import { FaRegSmileBeam, FaRegFrown } from 'react-icons/fa';
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
                <div className="container mx-auto p-6 bg-transparent rounded-lg shadow-lg md:px-10 py-12 w-full">
                    <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-6">Quiz Result</h1>
                    <div className="text-center bg-white bg-opacity-70 p-8 rounded-lg shadow-md">
                        <p className="text-2xl font-bold mb-4 text-gray-800">
                            You scored <span className="text-indigo-600">{result.totalMarks}</span> out of <span className="text-indigo-600">{questions.length}</span>
                        </p>
                        {result.totalMarks >= questions.length / 2 ? (
                            <div className="flex flex-col items-center">
                                <FaRegSmileBeam className="text-green-500 text-6xl mb-4" />
                                <p className="text-green-500 text-3xl font-semibold mb-6">Great job!</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <FaRegFrown className="text-red-500 text-6xl mb-4" />
                                <p className="text-red-500 text-3xl font-semibold mb-6">Better luck next time!</p>
                            </div>
                        )}
                        <button
                            onClick={() => navigate('/PHome')}
                            className="mt-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded transition duration-300"
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
            <div className="container my-20 px-2 md:px-12 p-4 min-h-screen ">
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
