

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserFriends, FaChalkboardTeacher, FaReceipt } from 'react-icons/fa';
import Adminheader from '../Components/Adminheader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function AHome() {
  const [studentCounts, setStudentCounts] = useState({ online: 0, physical: 0 });
  const [receiptPayments, setReceiptPayments] = useState({ count: 0, totalIncome: 0 });
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [instituteData, setInstituteData] = useState([]);
 // const [userQuizSummaries, setUserQuizSummaries] = useState([]);

  useEffect(() => {
    fetchIncomeData();
    fetchStudentCounts();
    fetchReceiptPayments();
   // fetchUserQuizSummaries();
    fetchInstituteData();
  }, []);

  const fetchIncomeData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/o_videos/getIncomeData');
      const modifiedData = response.data.map(item => ({
        ...item,
        unit_year: `${item.unit_name} (${item.v_year})`,
      }));
      setData(modifiedData);
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  };

  const fetchStudentCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/ahomes/getStudentCounts');
      setStudentCounts(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  // const fetchReceiptPayments = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8800/api/ahomes/receiptPayments');
  //     setReceiptPayments({
  //       count: response.data.receiptPayments,
  //       totalIncome: response.data.totalIncome,
  //     });
  //     setError(null);
  //   } catch (err) {
  //     if (err.response && err.response.data && err.response.data.error) {
  //       setError(err.response.data.error);
  //     } else {
  //       setError('Something went wrong. Please try again later.');
  //     }
  //   }
  // };
  const fetchReceiptPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/ahomes/receiptPayments');
      console.log(response.data); // Log the response data to inspect its structure
      
      // Assuming response.data is an object and totalIncome is a string, convert it to a number
      const receiptPaymentsData = {
        ...response.data,
        totalIncome: parseFloat(response.data.totalIncome),
      };
  
      setReceiptPayments(receiptPaymentsData);
      setError(null);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };
  
  // const fetchUserQuizSummaries = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8800/api/quizes/getUserQuizSummaries');
  //     setUserQuizSummaries(response.data);
  //   } catch (error) {
  //     console.error('Error fetching user quiz summaries:', error);
  //     setError('Failed to fetch user quiz summaries.');
  //   }
  // };

  const fetchInstituteData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/ahomes/getInstituteStudentCounts');
      setInstituteData(response.data);
    } catch (error) {
      console.error('Error fetching institute student counts:', error);
      setError('Failed to fetch institute student counts.');
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Adminheader pageName="Dashboard" />
      <div className="container mx-auto py-6 px-4 ">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaUserFriends className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Online Students</h3>
                  <p className="text-3xl text-gray-900">{studentCounts.online}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaChalkboardTeacher className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Physical Students</h3>
                  <p className="text-3xl text-gray-900">{studentCounts.physical}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaReceipt className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Accepted Receipts</h3>
                  <p className="text-3xl text-gray-900">{receiptPayments.count}</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaDollarSign className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Total Income</h3>
                  <p className="text-3xl text-gray-900">Rs. {receiptPayments.totalIncome.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full md:w-1/3 lg:w-1/3 px-4 mb-6">
  <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="flex items-center">
      <FaReceipt className="text-5xl text-blue-500 mr-4" />
      <div>
        <h3 className="text-xl font-bold text-gray-700">Accepted Receipt Payments</h3>
        <p className="text-3xl text-gray-900">Rs. {receiptPayments.totalIncome.toFixed(2)}</p>
      </div>
    </div>
  </div>
</div>

        </div>
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="text-sm text-center">{error}</p>
          </div>
        )}
      </div>
      <div className="App flex">
        <div className="w-1/2">
          <h1 className="text-xl ml-4 font-semibold">Institute Wise Student Counts</h1>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={instituteData}
                dataKey="student_count"
                nameKey="institute"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {instituteData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2">
          <h1 className="text-xl ml-4 font-semibold">Video Unit Income</h1>
          <ResponsiveContainer width="90%" height={400}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit_year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_income" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* <div className="App">
        <h1 className="text-2xl font-bold mt-5 text-center">User Quiz Summaries</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-5 text-left">Rank</th>
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Total Marks</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {userQuizSummaries.map(user => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-3 px-5 border-b">{user.rank}</td>
                  <td className="py-3 px-5 border-b">{user.name}</td>
                  <td className="py-3 px-5 border-b">{user.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default AHome;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import { FaUserFriends, FaChalkboardTeacher, FaReceipt } from 'react-icons/fa';
// import Adminheader from '../Components/Adminheader';

// function AHome() {
//     const [studentCounts, setStudentCounts] = useState({ online: 0, physical: 0 });
//     const [receiptPayments, setReceiptPayments] = useState({ count: 0, totalIncome: 0 });
//     const [error, setError] = useState(null);
//     const [data, setData] = useState([]);
//     const [instituteData, setInstituteData] = useState([]);
//     const [quizAverages, setQuizAverages] = useState([]);
//     const [period, setPeriod] = useState('week');

//     useEffect(() => {
//         fetchIncomeData();
//         fetchStudentCounts();
//         fetchReceiptPayments();
//         fetchInstituteData();
//         fetchQuizAverages(period);
//     }, [period]);

//     const fetchIncomeData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/o_videos/getIncomeData');
//             const modifiedData = response.data.map(item => ({
//                 ...item,
//                 unit_year: `${item.unit_name} (${item.v_year})`,
//             }));
//             setData(modifiedData);
//         } catch (error) {
//             console.error('Error fetching income data:', error);
//         }
//     };

//     const fetchStudentCounts = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/ahomes/getStudentCounts');
//             setStudentCounts(response.data);
//             setError(null);
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.error) {
//                 setError(err.response.data.error);
//             } else {
//                 setError('Something went wrong. Please try again later.');
//             }
//         }
//     };

//     const fetchReceiptPayments = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/ahomes/receiptPayments');
//             const receiptPaymentsData = {
//                 ...response.data,
//                 totalIncome: parseFloat(response.data.totalIncome),
//             };
//             setReceiptPayments(receiptPaymentsData);
//             setError(null);
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.error) {
//                 setError(err.response.data.error);
//             } else {
//                 setError('Something went wrong. Please try again later.');
//             }
//         }
//     };

//     const fetchInstituteData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8800/api/ahomes/getInstituteStudentCounts');
//             setInstituteData(response.data);
//         } catch (error) {
//             console.error('Error fetching institute student counts:', error);
//             setError('Failed to fetch institute student counts.');
//         }
//     };

//     const fetchQuizAverages = async (selectedPeriod) => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/ahome/getQuizAverages?period=${selectedPeriod}`);
//             setQuizAverages(response.data);
//         } catch (error) {
//             console.error('Error fetching quiz averages:', error);
//             setError('Failed to fetch quiz averages.');
//         }
//     };

//     const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <Adminheader pageName="Dashboard" />
//             <div className="container mx-auto py-6 px-4">
//                 <div className="flex flex-wrap -mx-4">
//                     <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
//                         <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <div className="flex items-center">
//                                 <FaUserFriends className="text-5xl text-blue-500 mr-4" />
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-700">Online Students</h3>
//                                     <p className="text-3xl text-gray-900">{studentCounts.online}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
//                         <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <div className="flex items-center">
//                                 <FaChalkboardTeacher className="text-5xl text-blue-500 mr-4" />
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-700">Physical Students</h3>
//                                     <p className="text-3xl text-gray-900">{studentCounts.physical}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full md:w-1/3 lg:w-1/3 px-4 mb-6">
//                         <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <div className="flex items-center">
//                                 <FaReceipt className="text-5xl text-blue-500 mr-4" />
//                                 <div>
//                                     <h3 className="text-xl font-bold text-gray-700">Accepted Receipt Payments</h3>
//                                     <p className="text-3xl text-gray-900">Rs. {receiptPayments.totalIncome.toFixed(2)}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {error && (
//                     <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//                         <p className="text-sm text-center">{error}</p>
//                     </div>
//                 )}
//             </div>
//             <div className="flex justify-center my-6">
//                 <button onClick={() => setPeriod('week')} className={`mx-2 px-4 py-2 ${period === 'week' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}>Week</button>
//                 <button onClick={() => setPeriod('month')} className={`mx-2 px-4 py-2 ${period === 'month' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}>Month</button>
//                 <button onClick={() => setPeriod('year')} className={`mx-2 px-4 py-2 ${period === 'year' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}>Year</button>
//             </div>
//             <div className="App flex">
//                 <div className="w-1/2">
//                     <h1 className="text-xl ml-4 font-semibold">Institute Wise Student Counts</h1>
//                     <ResponsiveContainer width="100%" height={400}>
//                         <PieChart>
//                             <Pie
//                                 data={instituteData}
//                                 dataKey="student_count"
//                                 nameKey="institute"
//                                 cx="50%"
//                                 cy="50%"
//                                 outerRadius={150}
//                                 fill="#8884d8"
//                                 label
//                             >
//                                 {instituteData.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>
//                 <div className="w-1/2">
//                     <h1 className="text-xl ml-4 font-semibold">Video Unit Income</h1>
//                     <ResponsiveContainer width="90%" height={400}>
//                         <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="unit_year" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Bar dataKey="total_income" fill="#8884d8" />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//             <div className="App">
//                 <h1 className="text-2xl font-bold mt-5 text-center">Average Quiz Results</h1>
//                 <ResponsiveContainer width="90%" height={400}>
//                     <BarChart data={quizAverages} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="period" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="average" fill="#82ca9d" />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }

// export default AHome;
