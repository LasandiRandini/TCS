

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Adminheader from '../Components/Adminheader';

// const DeleteStudent = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/auth/displayUsers');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleActivenessToggle = async (id, currentStatus) => {
//     const newStatus = currentStatus === 'active' ? 'not active' : 'active';
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: `You are about to set this user as ${newStatus}.`,
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, do it!',
//         cancelButtonText: 'No, cancel!',
//       });

//       if (result.isConfirmed) {
//         await axios.put(`http://localhost:8800/api/auth/updateActiveness/${id}`, { activeness: newStatus });
//         setUsers(users.map(user => (user.id === id ? { ...user, activeness: newStatus } : user)));
//         Swal.fire('Updated!', `User status has been set to ${newStatus}.`, 'success');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//       Swal.fire('Error!', 'There was an error updating the status.', 'error');
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Manage Student Activeness" />
//       <div className="bg-white ml-3 rounded shadow-lg p-4 w-full max-w-7xl mt-5">
//         <table className="w-full text-sm">
//           <thead>
//             <tr>
//               <th className="py-1 px-2 border-b">First Name</th>
//               <th className="py-1 px-2 border-b">Last Name</th>
             
//               <th className="py-1 px-2 border-b">Contact No</th>
//               <th className="py-1 px-2 border-b">Email</th>
//               <th className="py-1 px-2 border-b">A/L Year</th>
//               <th className="py-1 px-2 border-b">NIC No</th>
//               <th className="py-1 px-2 border-b">Institute</th>
//               <th className="py-1 px-2 border-b">Parent Contact No</th>
//               <th className="py-1 px-2 border-b">Parent Email</th>
//               <th className="py-1 px-2 border-b">Status</th>
//               <th className="py-1 px-2 border-b">Activeness</th>
//               <th className="py-1 px-2 border-b">Change Activeness</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="border-b">
//                 <td className="py-1 px-2">{user.first_name}</td>
//                 <td className="py-1 px-2">{user.last_name}</td>
               
//                 <td className="py-1 px-2">{user.contact_no}</td>
//                 <td className="py-1 px-2">{user.email}</td>
//                 <td className="py-1 px-2">{user.al_year}</td>
//                 <td className="py-1 px-2">{user.snic_no}</td>
//                 <td className="py-1 px-2">{user.institute}</td>
//                 <td className="py-1 px-2">{user.parent_contact_no}</td>
//                 <td className="py-1 px-2">{user.parent_email}</td>
//                 <td className="py-1 px-2">{user.status}</td>
//                 <td className="py-1 px-2">{user.activeness}</td>
//                 <td className="py-1 px-2">
//                   <button
//                     onClick={() => handleActivenessToggle(user.id, user.activeness)}
//                     className={`bg-${user.activeness === 'active' ? 'red' : 'green'}-500 text-white font-bold py-1 px-2 rounded hover:bg-${user.activeness === 'active' ? 'red' : 'green'}-600 transition duration-300`}
//                   >
//                     {user.activeness === 'active' ? 'Set Not Active' : 'Set Active'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DeleteStudent;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Adminheader from '../Components/Adminheader';

// const DeleteStudent = () => {
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [yearFilter, setYearFilter] = useState("All");

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/auth/displayUsers');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleStatusFilterChange = (event) => {
//     setStatusFilter(event.target.value);
//   };

//   const handleYearFilterChange = (event) => {
//     setYearFilter(event.target.value);
//   };

//   const filteredUsers = users.filter((user) => {
//     const matchesSearchQuery = 
//       user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.snic_no.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesStatusFilter = 
//       statusFilter === "All" || 
//       user.status.toLowerCase() === statusFilter.toLowerCase();

//     const matchesYearFilter = 
//       yearFilter === "All" || 
//       user.al_year === yearFilter;

//     return matchesSearchQuery && matchesStatusFilter && matchesYearFilter;
//   });

//   const handleActivenessToggle = async (id, currentStatus) => {
//     const newStatus = currentStatus === 'active' ? 'not active' : 'active';
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: `You are about to set this user as ${newStatus}.`,
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, do it!',
//         cancelButtonText: 'No, cancel!',
//       });

//       if (result.isConfirmed) {
//         await axios.put(`http://localhost:8800/api/auth/updateActiveness/${id}`, { activeness: newStatus });
//         setUsers(users.map(user => (user.id === id ? { ...user, activeness: newStatus } : user)));
//         Swal.fire('Updated!', `User status has been set to ${newStatus}.`, 'success');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//       Swal.fire('Error!', 'There was an error updating the status.', 'error');
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Manage Student Activeness" />
//       <div className="flex items-center justify-between p-4 bg-white ml-3 rounded shadow-lg w-full max-w-7xl mt-5">
//         <input
//           type="text"
//           placeholder="Search by First Name or NIC No"
//           className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 w-1/4"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//         <select
//           value={statusFilter}
//           onChange={handleStatusFilterChange}
//           className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
//         >
//           <option value="All">All Statuses</option>
//           <option value="online">Online</option>
//           <option value="physical">Physical</option>
//         </select>
//         <select
//           value={yearFilter}
//           onChange={handleYearFilterChange}
//           className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
//         >
//           <option value="All">All Years</option>
//           <option value="2024">2024</option>
//           <option value="2025">2025</option>
//           <option value="2026">2026</option>
//         </select>
//       </div>
//       <div className="bg-white ml-3 rounded shadow-lg p-4 w-full max-w-7xl mt-5">
//         <table className="w-full text-sm">
//           <thead>
//             <tr>
//               <th className="py-1 px-2 border-b">First Name</th>
//               <th className="py-1 px-2 border-b">Last Name</th>
//               <th className="py-1 px-2 border-b">Contact No</th>
//               <th className="py-1 px-2 border-b">Email</th>
//               <th className="py-1 px-2 border-b">A/L Year</th>
//               <th className="py-1 px-2 border-b">NIC No</th>
//               <th className="py-1 px-2 border-b">Institute</th>
//               <th className="py-1 px-2 border-b">Parent Contact No</th>
//               <th className="py-1 px-2 border-b">Parent Email</th>
//               <th className="py-1 px-2 border-b">Status</th>
//               <th className="py-1 px-2 border-b">Activeness</th>
//               <th className="py-1 px-2 border-b">Change Activeness</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map(user => (
//               <tr key={user.id} className="border-b">
//                 <td className="py-1 px-2">{user.first_name}</td>
//                 <td className="py-1 px-2">{user.last_name}</td>
//                 <td className="py-1 px-2">{user.contact_no}</td>
//                 <td className="py-1 px-2">{user.email}</td>
//                 <td className="py-1 px-2">{user.al_year}</td>
//                 <td className="py-1 px-2">{user.snic_no}</td>
//                 <td className="py-1 px-2">{user.institute}</td>
//                 <td className="py-1 px-2">{user.parent_contact_no}</td>
//                 <td className="py-1 px-2">{user.parent_email}</td>
//                 <td className="py-1 px-2">{user.status}</td>
//                 <td className="py-1 px-2">{user.activeness}</td>
//                 <td className="py-1 px-2">
//                   <button
//                     onClick={() => handleActivenessToggle(user.id, user.activeness)}
//                     className={`bg-${user.activeness === 'active' ? 'red' : 'green'}-500 text-white font-bold py-1 px-2 rounded hover:bg-${user.activeness === 'active' ? 'red' : 'green'}-600 transition duration-300`}
//                   >
//                     {user.activeness === 'active' ? 'Set Not Active' : 'Set Active'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DeleteStudent;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Adminheader from '../Components/Adminheader';

const DeleteStudent = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/auth/displayUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearchQuery = 
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.snic_no.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatusFilter = 
      statusFilter === "All" || 
      user.status.toLowerCase() === statusFilter.toLowerCase();

    const matchesYearFilter = 
      yearFilter === "All" || 
      user.al_year.toString() === yearFilter;

    return matchesSearchQuery && matchesStatusFilter && matchesYearFilter;
  });

  const handleActivenessToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'not active' : 'active';
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: `You are about to set this user as ${newStatus}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!',
      });

      if (result.isConfirmed) {
        await axios.put(`http://localhost:8800/api/auth/updateActiveness/${id}`, { activeness: newStatus });
        setUsers(users.map(user => (user.id === id ? { ...user, activeness: newStatus } : user)));
        Swal.fire('Updated!', `User status has been set to ${newStatus}.`, 'success');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      Swal.fire('Error!', 'There was an error updating the status.', 'error');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Manage Student Activeness" />
      <div className="flex items-center justify-between p-4 bg-white ml-3 rounded shadow-lg w-full max-w-7xl mt-5">
        <input
          type="text"
          placeholder="Search by First Name or NIC No"
          className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 w-1/4"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select
          value={statusFilter}
          onChange={handleStatusFilterChange}
          className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
        >
          <option value="All">All Statuses</option>
          <option value="online">Online</option>
          <option value="physical">Physical</option>
        </select>
        <select
          value={yearFilter}
          onChange={handleYearFilterChange}
          className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 ml-2"
        >
          <option value="All">All Years</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
      <div className="bg-white ml-3 rounded shadow-lg p-4 w-full max-w-7xl mt-5">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="py-1 px-2 border-b">First Name</th>
              <th className="py-1 px-2 border-b">Last Name</th>
              <th className="py-1 px-2 border-b">Contact No</th>
              <th className="py-1 px-2 border-b">Email</th>
              <th className="py-1 px-2 border-b">A/L Year</th>
              <th className="py-1 px-2 border-b">NIC No</th>
              <th className="py-1 px-2 border-b">Institute</th>
              <th className="py-1 px-2 border-b">Parent Contact No</th>
              <th className="py-1 px-2 border-b">Parent Email</th>
              <th className="py-1 px-2 border-b">Status</th>
              <th className="py-1 px-2 border-b">Activeness</th>
              <th className="py-1 px-2 border-b">Change Activeness</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b">
                <td className="py-1 px-2">{user.first_name}</td>
                <td className="py-1 px-2">{user.last_name}</td>
                <td className="py-1 px-2">{user.contact_no}</td>
                <td className="py-1 px-2">{user.email}</td>
                <td className="py-1 px-2">{user.al_year}</td>
                <td className="py-1 px-2">{user.snic_no}</td>
                <td className="py-1 px-2">{user.institute}</td>
                <td className="py-1 px-2">{user.parent_contact_no}</td>
                <td className="py-1 px-2">{user.parent_email}</td>
                <td className="py-1 px-2">{user.status}</td>
                <td className="py-1 px-2">{user.activeness}</td>
                <td className="py-1 px-2">
                  <button
                    onClick={() => handleActivenessToggle(user.id, user.activeness)}
                    className={`bg-${user.activeness === 'active' ? 'red' : 'green'}-500 text-white font-bold py-1 px-2 rounded hover:bg-${user.activeness === 'active' ? 'red' : 'green'}-600 transition duration-300`}
                  >
                    {user.activeness === 'active' ? 'Set Not Active' : 'Set Active'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteStudent;
