// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import Adminheader from "../Components/Adminheader";

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

//   const handleDelete = async (id) => {
//     try {
//       if (window.confirm("Are you sure you want to delete this user?")) {
//         await axios.delete(`http://localhost:8800/api/auth/deleteStudent/${id}`);
//         setUsers(users.filter(user => user.id !== id));
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="bg-gray-200 w-[1300px]  min-h-screen ">
//     <Adminheader pageName="Delete a student" />
//     <div className="  flex mt-5 bg-primary  justify-center items-center  ">
//       <div className=" bg-white rounded shadow-lg p-2 ">
     
        
//         <table className="">
//           <thead>
//             <tr>
//               <th className="py-2">First Name</th>
//               <th className="py-2">Last Name</th>
//               <th className="py-2">Distric</th>
//               <th className="py-2">Contact No</th>
//               <th className="py-2">Email</th>
//               <th className="py-2">A/L Year</th>
//               <th className='py-2'>NIC No</th>
//               <th className="py-2">Institute</th>
//               <th className="py-2">Parent Contact No</th>
//               <th className="py-2">Parent Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="border-b">
//                 <td className="py-2 px-4">{user.first_name}</td>
//                 <td className="py-2 px-4">{user.last_name}</td>
//                 <td className="py-2 px-4">{user.distric}</td> 
//                 <td className="py-2 px-4">{user.contact_no}</td>
//                 <td className="py-2 px-4">{user.email}</td>
//                 <td className="py-2 px-4">{user.al_year}</td>
//                 <td className="py-2 px-4">{user.snic_no}</td>
//                 <td className="py-2 px-4">{user.institute}</td>
//                <td className="py-2 px-4">{user.parent_contact_no}</td>
//                <td className="py-2 px-4">{user.parent_email}</td>
//                 <td className="py-2 px-4">
                  
//                   <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(user.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default DeleteStudent;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Adminheader from "../Components/Adminheader";
// import Swal from 'sweetalert2';


// const ManageStudents = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/auth/displayUsers');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleActivenessToggle = async (id, currentActiveness) => {
//     const newActiveness = currentActiveness === 'active' ? 'not active' : 'active';

//     Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to change the activeness to ${newActiveness}?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, change it!'
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.put(`http://localhost:8800/api/auth/updateActiveness/${id}`, { activeness: newActiveness });
//           setUsers(users.map(user => user.id === id ? { ...user, activeness: newActiveness } : user));
//           Swal.fire(
//             'Changed!',
//             'The activeness status has been changed.',
//             'success'
//           );
//         } catch (error) {
//           console.error('Error updating activeness:', error);
//         }
//       }
//     });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-200 w-full  ">
//       <Adminheader pageName="Manage Students" />
//       <div className="flex mt-5 bg-primary justify-center items-center">
//         <div className="bg-white rounded shadow-lg p-4 w-full max-w-7xl">
         
//           <table className=" bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-3 border-b">First Name</th>
//                 <th className="py-2 px-3 border-b">Last Name</th>
//                 <th className="py-2 px-3 border-b">District</th>
//                 <th className="py-2 px-3 border-b">Contact No</th>
//                 <th className="py-2 px-3 border-b">Email</th>
//                 <th className="py-2 px-3 border-b">A/L Year</th>
//                 <th className="py-2 px-3 border-b">NIC No</th>
//                 <th className="py-2 px-3 border-b">Institute</th>
//                 <th className="py-2 px-3 border-b">Parent Contact No</th>
//                 <th className="py-2 px-3 border-b">Parent Email</th>
//                 <th className="py-2 px-3 border-b">Status</th>
//                 <th className="py-2 px-3 border-b">Activeness</th>
//                 <th className="py-2 px-3 border-b">Change Activeness</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id} className="border-b">
//                   <td className="py-2 px-3">{user.first_name}</td>
//                   <td className="py-2 px-3">{user.last_name}</td>
//                   <td className="py-2 px-3">{user.distric}</td>
//                   <td className="py-2 px-3">{user.contact_no}</td>
//                   <td className="py-2 px-3">{user.email}</td>
//                   <td className="py-2 px-3">{user.al_year}</td>
//                   <td className="py-2 px-3">{user.snic_no}</td>
//                   <td className="py-2 px-3">{user.institute}</td>
//                   <td className="py-2 px-3">{user.parent_contact_no}</td>
//                   <td className="py-2 px-3">{user.parent_email}</td>
//                   <td className="py-2 px-3">{user.status}</td>
//                   <td className="py-2 px-3">{user.activeness}</td>
//                   <td className="py-2 px-3">
//                     <button
//                       onClick={() => handleActivenessToggle(user.id, user.activeness)}
//                       className={`bg-${user.activeness === 'active' ? 'red' : 'green'}-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded hover:bg-${user.activeness === 'active' ? 'red' : 'green'}-600 transition duration-300`}
//                     >
//                       {user.activeness === 'active' ? 'Set Not Active' : 'Set Active'}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageStudents;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Adminheader from '../Components/Adminheader';

const DeleteStudent = () => {
  const [users, setUsers] = useState([]);

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
      <div className="bg-white ml-3 rounded shadow-lg p-4 w-full max-w-7xl mt-5">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="py-1 px-2 border-b">First Name</th>
              <th className="py-1 px-2 border-b">Last Name</th>
              <th className="py-1 px-2 border-b">District</th>
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
            {users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="py-1 px-2">{user.first_name}</td>
                <td className="py-1 px-2">{user.last_name}</td>
                <td className="py-1 px-2">{user.distric}</td>
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
