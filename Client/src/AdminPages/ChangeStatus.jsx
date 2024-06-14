

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Adminheader from "../Components/Adminheader";

// const ChangeStatus = () => {
//     const [students, setStudents] = useState([]);
//     const [loading, setLoading] = useState(true);
    

//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/auth/getAllStudents');
//                 setStudents(response.data);
//             } catch (error) {
//                 console.error('Error fetching students:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchStudents();
//     }, []);

//     const handleStatusChange = async (nic_no, newStatus) => {
//         try {
//             await axios.put(`http://localhost:8800/api/auth/updateStudentStatus/${nic_no}`, { status: newStatus });
//             setStudents(students.map(student => 
//                 student.nic_no === nic_no ? { ...student, status: newStatus } : student
//             ));
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     const confirmStatusChange = (nic_no, currentStatus) => {
//         const newStatus = currentStatus === 'online' ? 'physical' : 'online';
        
//         Swal.fire({
//             title: 'Are you sure?',
//             text: `Do you want to change the status to ${newStatus}?`,
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, change it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleStatusChange(nic_no, newStatus);
//                 Swal.fire(
//                     'Changed!',
//                     'The status has been changed.',
//                     'success'
//                 );
//             }
//         });
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="bg-gray-200 min-h-screen">
//              <Adminheader pageName="Change Student Status" />
          
//             <table className="min-w-full mt-3 ml-3  bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border-b">First Name</th>
//                         <th className="py-2 px-4 border-b">Last Name</th>
//                         <th className="py-2 px-4 border-b">Contact No</th>
//                         <th className="py-2 px-4 border-b">Institute</th>
//                         <th className="py-2 px-4 border-b">NIC No</th>
//                         <th className="py-2 px-4 border-b">Status</th>
//                         <th className="py-2 px-4 border-b">Change Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map(student => (
//                         <tr key={student.nic_no}>
//                             <td className="py-2 px-4 border-b">{student.first_name}</td>
//                             <td className="py-2 px-4 border-b">{student.last_name}</td>
//                             <td className="py-2 px-4 border-b">{student.contact_no}</td>
//                             <td className="py-2 px-4 border-b">{student.institute}</td>
//                             <td className="py-2 px-4 border-b">{student.nic_no}</td>
//                             <td className="py-2 px-4 border-b">{student.status}</td>
//                             <td className="py-2 px-4 border-b">
//                                 <button
//                                     onClick={() => confirmStatusChange(student.nic_no, student.status)}
//                                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//                                 >
//                                     {student.status === 'online' ? 'Set Physical' : 'Set Online'}
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ChangeStatus;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Adminheader from "../Components/Adminheader";

// const ChangeStatus = () => {
//     const [students, setStudents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8800/api/auth/getAllStudents');
//                 setStudents(response.data);
//             } catch (error) {
//                 console.error('Error fetching students:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchStudents();
//     }, []);

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filteredStudents = students.filter((student) =>
//         student.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         student.nic_no.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const handleStatusChange = async (nic_no, newStatus) => {
//         try {
//             await axios.put(`http://localhost:8800/api/auth/updateStudentStatus/${nic_no}`, { status: newStatus });
//             setStudents(students.map(student => 
//                 student.nic_no === nic_no ? { ...student, status: newStatus } : student
//             ));
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     const confirmStatusChange = (nic_no, currentStatus) => {
//         const newStatus = currentStatus === 'online' ? 'physical' : 'online';
        
//         Swal.fire({
//             title: 'Are you sure?',
//             text: `Do you want to change the status to ${newStatus}?`,
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, change it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleStatusChange(nic_no, newStatus);
//                 Swal.fire(
//                     'Changed!',
//                     'The status has been changed.',
//                     'success'
//                 );
//             }
//         });
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="bg-gray-200 min-h-screen">
//             <Adminheader pageName="Change Student Status" />
//             <input
//                 type="text"
//                 placeholder="Search by First Name or NIC No"
//                 className="border border-gray-400 bg-white bg-opacity-40 rounded-md ml-3 px-3 py-2 mt-4 w-1/4"
//                 value={searchQuery}
//                 onChange={handleSearch}
//             />
//             <table className="min-w-full mt-3 ml-3 bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2 px-4 border-b">First Name</th>
//                         <th className="py-2 px-4 border-b">Last Name</th>
//                         <th className="py-2 px-4 border-b">Contact No</th>
//                         <th className="py-2 px-4 border-b">Institute</th>
//                         <th className="py-2 px-4 border-b">NIC No</th>
//                         <th className="py-2 px-4 border-b">Status</th>
//                         <th className="py-2 px-4 border-b">Change Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredStudents.map(student => (
//                         <tr key={student.nic_no}>
//                             <td className="py-2 px-4 border-b">{student.first_name}</td>
//                             <td className="py-2 px-4 border-b">{student.last_name}</td>
//                             <td className="py-2 px-4 border-b">{student.contact_no}</td>
//                             <td className="py-2 px-4 border-b">{student.institute}</td>
//                             <td className="py-2 px-4 border-b">{student.nic_no}</td>
//                             <td className="py-2 px-4 border-b">{student.status}</td>
//                             <td className="py-2 px-4 border-b">
//                                 <button
//                                     onClick={() => confirmStatusChange(student.nic_no, student.status)}
//                                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//                                 >
//                                     {student.status === 'online' ? 'Set Physical' : 'Set Online'}
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ChangeStatus;

import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Adminheader from "../Components/Adminheader";

const ChangeStatus = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/auth/getAllStudents');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleStatusFilterChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const filteredStudents = students.filter((student) => {
        const matchesSearchQuery = 
            student.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.nic_no.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatusFilter =
            statusFilter === "All" ||
            student.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearchQuery && matchesStatusFilter;
    });

    const handleStatusChange = async (nic_no, newStatus) => {
        try {
            await axios.put(`http://localhost:8800/api/auth/updateStudentStatus/${nic_no}`, { status: newStatus });
            setStudents(students.map(student => 
                student.nic_no === nic_no ? { ...student, status: newStatus } : student
            ));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const confirmStatusChange = (nic_no, currentStatus) => {
        const newStatus = currentStatus === 'online' ? 'physical' : 'online';
        
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to change the status to ${newStatus}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, change it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleStatusChange(nic_no, newStatus);
                Swal.fire(
                    'Changed!',
                    'The status has been changed.',
                    'success'
                );
            }
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <Adminheader pageName="Change Student Status" />
            <div className="flex items-center justify-between p-4">
                <input
                    type="text"
                    placeholder="Search by First Name or NIC No"
                    className="border border-gray-400 bg-white bg-opacity-40 rounded-md mb-4 px-3 py-2 w-1/4"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <select
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                    className="border border-gray-400 bg-white bg-opacity-40 rounded-md mb-4 px-3 py-2 w-1/5"
                >
                    <option value="All">All</option>
                    <option value="online">Online</option>
                    <option value="physical">Physical</option>
                </select>
            </div>
            <table className="min-w-full mt-3 ml-3 bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">First Name</th>
                        <th className="py-2 px-4 border-b">Last Name</th>
                        <th className="py-2 px-4 border-b">Contact No</th>
                        <th className="py-2 px-4 border-b">Institute</th>
                        <th className="py-2 px-4 border-b">NIC No</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.nic_no}>
                            <td className="py-2 px-4 border-b">{student.first_name}</td>
                            <td className="py-2 px-4 border-b">{student.last_name}</td>
                            <td className="py-2 px-4 border-b">{student.contact_no}</td>
                            <td className="py-2 px-4 border-b">{student.institute}</td>
                            <td className="py-2 px-4 border-b">{student.nic_no}</td>
                            <td className="py-2 px-4 border-b">{student.status}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => confirmStatusChange(student.nic_no, student.status)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    {student.status === 'online' ? 'Set Physical' : 'Set Online'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChangeStatus;
