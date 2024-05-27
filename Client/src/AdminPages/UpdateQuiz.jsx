import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UpdateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const  fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/questions/displayQuizzes');
      setQuizzes(response.data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const handleDelete = async (q_id) => {
    try {
      if (window.confirm("Are you sure you want to delete this quiz?")) {
        await axios.delete(`http://localhost:8800/api/questions/deleteQuiz/${q_id}`);
        setQuizzes(quizzes.filter(quiz => quiz.q_id !== q_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen bg-primary justify-center items-center">
      <div className=" bg-white rounded shadow-lg p-6">
        <Link to="/QuizCalander" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Quiz</Link>
        
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Student Year</th>
              <th className="py-2">Unit</th>
              <th className="py-2">Quiz Title</th>
              <th className="py-2">Start Date and Time</th>
              <th className="py-2">End Date and Time</th>
              <th className='py-2'>Duration</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map(quiz => (
              <tr key={quiz.q_id} className="border-b">
                <td className="py-2 px-4">{quiz.q_year}</td>
                <td className="py-2 px-4">{quiz.q_unit}</td> 
                <td className="py-2 px-4">{quiz.q_title}</td>
                <td className="py-2 px-4">{quiz.start_date}</td>
                <td className="py-2 px-4">{quiz.end_date}</td>
                <td className="py-2 px-4">{quiz.duration}</td>
                <td className="py-2 px-4">
                  <Link to={`/UpdateQuiz2/${quiz.q_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 mr-2 rounded">Edit</Link>
                  <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(quiz.q_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  UpdateQuiz;

