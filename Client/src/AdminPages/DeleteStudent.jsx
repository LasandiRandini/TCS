import  { useState, useEffect } from 'react';
import axios from 'axios';
import Adminheader from "../Components/Adminheader";

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

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        await axios.delete(`http://localhost:8800/api/auth/deleteStudent/${id}`);
        setUsers(users.filter(user => user.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
    <Adminheader pageName="Delete a student" />
    <div className="flex   justify-center items-center mt-5 ml-5 mr-5">
      <div className=" bg-white rounded shadow-lg p-2">
     
        
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">First Name</th>
              <th className="py-2">Last Name</th>
              <th className="py-2">Distric</th>
              <th className="py-2">Contact No</th>
              <th className="py-2">Email</th>
              <th className="py-2">A/L Year</th>
              <th className='py-2'>NIC No</th>
              <th className="py-2">Institute</th>
              <th className="py-2">Parent Contact No</th>
              <th className="py-2">Parent Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.first_name}</td>
                <td className="py-2 px-4">{user.last_name}</td>
                <td className="py-2 px-4">{user.distric}</td> 
                <td className="py-2 px-4">{user.contact_no}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.al_year}</td>
                <td className="py-2 px-4">{user.snic_no}</td>
                <td className="py-2 px-4">{user.institute}</td>
               <td className="py-2 px-4">{user.parent_contact_no}</td>
               <td className="py-2 px-4">{user.parent_email}</td>
                <td className="py-2 px-4">
                  
                  <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DeleteStudent;
