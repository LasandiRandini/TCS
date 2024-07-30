import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminheader from "../Components/Adminheader";
import swal from 'sweetalert';

const EditNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/notices/showNotices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleDelete = async (n_id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this notice!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:8800/api/notices/deleteNotice/${n_id}`);
          setNotices(notices.filter(notice => notice.n_id !== n_id));
          swal("Poof! Your notice has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your notice is safe!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Edit Notices" />
      <div className="flex mt-5 ml-5 mr-5 bg-primary justify-center items-center">
        <div className=" bg-white rounded shadow-lg p-6">
          <Link to="/ANotice" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Notice</Link>
          
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Displayed Name</th>
                <th className="py-2">Year</th>
                <th className="py-2">Description</th>
                <th className="py-2">Image</th>
                <th className='py-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(notice => (
                <tr key={notice.n_id} className="border-b">
                  <td className="py-2 px-4">{notice.name}</td>
                  <td className="py-2 px-4">{notice.year}</td> 
                  <td className="py-2 px-4">{notice.n_description}</td>
                  <td className="py-2 px-4">{notice.image}</td>
                  <td className="py-2 px-4">
                    <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(notice.n_id)}>Delete</button>
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

export default EditNotice;
