import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Adminheader from '../Components/Adminheader';

const ASetting = () => {
    const [alYear, setAlYear] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8800/api/settings/addAlYear', { al_year: alYear });
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'New AL Year has been added successfully.',
            });
            setAlYear('');
        } catch (error) {
            console.error('Error adding AL Year:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the AL Year.',
            });
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen">
        <Adminheader pageName="Settings" />
        <div className="min-h-screen bg-cover bg-center flex justify-center items-center">
           
            <div className="container mx-auto p-6 rounded-lg bg-white md:px-10 py-12 w-full max-w-md">
                <h1 className="text-2xl text-center font-bold mb-4">Add New AL Year</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alYear">
                            AL Year
                        </label>
                        <input
                            type="text"
                            id="alYear"
                            value={alYear}
                            onChange={(e) => setAlYear(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add AL Year
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ASetting;
