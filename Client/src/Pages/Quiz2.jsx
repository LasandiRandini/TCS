import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Quiz2 = () => {
    const { quizId } = useParams();
    const [quizDetails, setQuizDetails] = useState(null);
    const [responses, setResponses] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/api/quizes/getQuiz/${quizId}`);
                setQuizDetails(response.data);
            } catch (error) {
                console.error('Error fetching quiz details:', error);
            }
        };

        fetchQuizDetails();
    }, [quizId]);

    const handleAnswerChange = (questionId, answer) => {
        setResponses({ ...responses, [questionId]: answer });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8800/api/quizes/submitResponse', {
                quiz_id: quizId,
                responses: Object.entries(responses).map(([questionId, answer]) => ({ questionId, answer }))
            });
            navigate('/result');
        } catch (error) {
            console.error('Error submitting responses:', error);
        }
    };

    if (!quizDetails) return <div>Loading...</div>;

    return (
        <div className="rounded-lg bg-white md:px-10 py-8 w-full">
            <h1 className="text-2xl font-bold mb-4">{quizDetails.title}</h1>
            <h2 className="text-xl mb-4">Unit: {quizDetails.unitName}</h2>
            <h3 className="text-lg mb-4">Due Date: {new Date(quizDetails.dueDate).toLocaleString()}</h3>
            <form onSubmit={handleSubmit}>
                {quizDetails.questions.map((question, qIndex) => (
                    <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
                            <p>{question.question}</p>
                        </div>
                        {question.answers.map((answer, aIndex) => (
                            <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
                                <input
                                    type="radio"
                                    name={`question-${qIndex}`}
                                    value={aIndex + 1}
                                    onChange={() => handleAnswerChange(question.id, aIndex + 1)}
                                    className="mr-2"
                                />
                                <span>{answer}</span>
                            </div>
                        ))}
                    </div>
                ))}
                <div className='ml-auto mr-auto w-4/12 mt-2'>
                    <button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded">
                        Submit Quiz
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Quiz2;
