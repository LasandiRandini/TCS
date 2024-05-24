import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
    const [questions, setQuestions] = useState([{ question: '', answers: ['', '', '', '', ''], correctAnswer: '' }]);
    const navigate = useNavigate();

    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex, aIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].correctAnswer = event.target.value.replace(/[^1-5]/g, '');
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: ['', '', '', '', ''], correctAnswer: '' }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(questions); // This is where you would handle the quiz submission, e.g., sending it to an API.
        navigate('/te_calender');
    };

    return (
        <div className="rounded-lg bg-white md:px-10 py-8 w-full">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-3 text-indigo-800">Sample Quiz Title</h2>
                <span className="font-medium">Selected unit ID :</span>
                <span className="text-indigo-600"> 1101 </span>
                <div></div>
                <span className="font-medium">Due date and time :</span>
                <span className="text-indigo-600"> 2024-04-24 14:00 </span>
            </div>

            <form onSubmit={handleSubmit}>
                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="mb-4 bg-gray-100 px-4 py-3.5 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="font-bold text-gray-700">Question {qIndex + 1}</label>
                            <input
                                type="text"
                                value={question.question}
                                onChange={(event) => handleQuestionChange(qIndex, event)}
                                placeholder="Enter question"
                                className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        {question.answers.map((answer, aIndex) => (
                            <div key={aIndex} className="mb-3 w-11/12 ml-auto mr-auto">
                                <span className="block text-gray-700 font-medium mb-2 ml-6 w-full">{aIndex + 1}.{' '}
                                    <span className="inline-block w-11/12">
                                        <input
                                            type="text"
                                            value={answer}
                                            onChange={(event) => handleAnswerChange(qIndex, aIndex, event)}
                                            placeholder={`Enter answer ${aIndex + 1}`}
                                            className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </span>
                                </span>
                            </div>
                        ))}
                        <div className="mb-2 mt-3 text-center w-5/12 ml-auto mr-auto">
                            <label className="font-bold text-gray-700 w-6/12">Enter correct answer (1-5)</label>
                            <div className='w-2/12 text-center ml-48'>
                                <input
                                    type="text"
                                    value={question.correctAnswer}
                                    onChange={(event) => handleCorrectAnswerChange(qIndex, event)}
                                    maxLength="1"
                                    placeholder="Answer"
                                    className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className='ml-auto mr-auto w-4/12 mt-2'>
                    <button type="button" onClick={addQuestion} className="mb-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
                        Add a question
                    </button>
                    <button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-semibold py-2 px-4 rounded">
                        Publish Quiz
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateQuiz;
