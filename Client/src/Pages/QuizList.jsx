

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminheader from '../Components/Adminheader';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/quizes/getquizzes');
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);



const handleDownloadPDF = async (quizId) => {
    try {
      const response = await axios.get(`http://localhost:8800/api/quizes/getQuizResultsPDF/${quizId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `quiz_results_${quizId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Adminheader pageName="Quiz Result" />
      <div className="container mx-auto md:px-10 py-8 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{quiz.unit}</h3>
              <p className="text-gray-600 mb-4">Year: {quiz.year}</p>
              <p className="text-gray-600 mb-4">Type: {quiz.quiz_type}</p>
              <div className="flex justify-between">
                <Link to={`/QuizResult/${quiz.id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Results
                  </button>
                </Link>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => handleDownloadPDF(quiz.id)}
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
