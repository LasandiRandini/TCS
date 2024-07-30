

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Adminheader from '../Components/Adminheader';

const ASetting = () => {
    const [alYear, setAlYear] = useState('');
    const [newAlYear, setNewAlYear] = useState('');
    const [alYears, setAlYears] = useState([]);
    const [editingYear, setEditingYear] = useState(null);
    
    const [institute, setInstitute] = useState('');
    const [newInstitute, setNewInstitute] = useState('');
    const [institutes, setInstitutes] = useState([]);
    const [editingInstitute, setEditingInstitute] = useState(null);

    useEffect(() => {
        fetchAlYears();
        fetchInstitutes();
    }, []);

    const fetchAlYears = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/settings/alYears');
            setAlYears(response.data);
        } catch (error) {
            console.error('Error fetching AL Years:', error);
        }
    };

    const fetchInstitutes = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/settings/institutes');
            setInstitutes(response.data);
        } catch (error) {
            console.error('Error fetching Institutes:', error);
        }
    };

    const handleSubmitAlYear = async (event) => {
        event.preventDefault();
        if (editingYear) {
            handleUpdateAlYear();
        } else {
            handleAddAlYear();
        }
    };

    const handleSubmitInstitute = async (event) => {
        event.preventDefault();
        if (editingInstitute) {
            handleUpdateInstitute();
        } else {
            handleAddInstitute();
        }
    };

    const handleAddAlYear = async () => {
        try {
            await axios.post('http://localhost:8800/api/settings/addAlYear', { al_year: alYear });
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'New AL Year has been added successfully.',
            });
            setAlYear('');
            fetchAlYears();
        } catch (error) {
            console.error('Error adding AL Year:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the AL Year.',
            });
        }
    };

    const handleAddInstitute = async () => {
        try {
            await axios.post('http://localhost:8800/api/settings/addInstitute', { institute });
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'New Institute has been added successfully.',
            });
            setInstitute('');
            fetchInstitutes();
        } catch (error) {
            console.error('Error adding Institute:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the Institute.',
            });
        }
    };

    const handleUpdateAlYear = async () => {
        try {
            await axios.put(`http://localhost:8800/api/settings/updateAlYear/${editingYear}`, { new_al_year: newAlYear });
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'AL Year has been updated successfully.',
            });
            setAlYear('');
            setNewAlYear('');
            setEditingYear(null);
            fetchAlYears();
        } catch (error) {
            console.error('Error updating AL Year:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating the AL Year.',
            });
        }
    };

    const handleUpdateInstitute = async () => {
        try {
            await axios.put(`http://localhost:8800/api/settings/updateInstitute/${editingInstitute}`, { new_institute: newInstitute });
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Institute has been updated successfully.',
            });
            setInstitute('');
            setNewInstitute('');
            setEditingInstitute(null);
            fetchInstitutes();
        } catch (error) {
            console.error('Error updating Institute:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating the Institute.',
            });
        }
    };

    const handleDeleteAlYear = async (alYear) => {
        try {
            await axios.delete(`http://localhost:8800/api/settings/deleteAlYear/${alYear}`);
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'AL Year has been deleted successfully.',
            });
            fetchAlYears();
        } catch (error) {
            console.error('Error deleting AL Year:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while deleting the AL Year.',
            });
        }
    };

    const handleDeleteInstitute = async (institute) => {
        try {
            await axios.delete(`http://localhost:8800/api/settings/deleteInstitute/${institute}`);
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Institute has been deleted successfully.',
            });
            fetchInstitutes();
        } catch (error) {
            console.error('Error deleting Institute:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while deleting the Institute.',
            });
        }
    };

    const handleEditAlYear = (year) => {
        setAlYear(year.al_year);
        setNewAlYear(year.al_year);
        setEditingYear(year.al_year);
    };

    const handleEditInstitute = (inst) => {
        setInstitute(inst.institute);
        setNewInstitute(inst.institute);
        setEditingInstitute(inst.institute);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Adminheader pageName="Settings" />
            <div className="min-h-screen bg-cover bg-center flex justify-center items-center">
                <div className="container mx-auto p-10 rounded-lg bg-white md:px-10 w-1/2 max-w-md">
                    <h1 className="text-2xl text-center font-bold mb-4">Add / Update AL Year</h1>
                    <form onSubmit={handleSubmitAlYear}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alYear">
                                {editingYear ? 'New AL Year' : 'AL Year'}
                            </label>
                            <input
                                type="text"
                                id="alYear"
                                value={editingYear ? newAlYear : alYear}
                                onChange={(e) => editingYear ? setNewAlYear(e.target.value) : setAlYear(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                {editingYear ? 'Update' : 'Add'} AL Year
                            </button>
                        </div>
                    </form>
                    <h2 className="text-xl font-bold mt-8">Existing AL Years</h2>
                    <ul>
                        {alYears.map((year) => (
                            <li key={year.al_year} className="flex justify-between items-center bg-gray-100 my-2 p-2 rounded">
                                {year.al_year}
                                <div>
                                    <button onClick={() => handleEditAlYear(year)} className="bg-yellow-500 text-white font-bold py-1 px-2 rounded mx-1">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteAlYear(year.al_year)} className="bg-red-500 text-white font-bold py-1 px-2 rounded mx-1">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mx-auto rounded-lg bg-white md:px-10 w-1/2 max-w-md">
                    <h1 className="text-2xl text-center font-bold mt-8 mb-4">Add / Update Institute</h1>
                    <form onSubmit={handleSubmitInstitute}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institute">
                                {editingInstitute ? 'New Institute' : 'Institute'}
                            </label>
                            <input
                                type="text"
                                id="institute"
                                value={editingInstitute ? newInstitute : institute}
                                onChange={(e) => editingInstitute ? setNewInstitute(e.target.value) : setInstitute(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                {editingInstitute ? 'Update' : 'Add'} Institute
                            </button>
                        </div>
                    </form>
                    <h2 className="text-xl font-bold mt-8">Existing Institutes</h2>
                    <ul>
                        {institutes.map((inst) => (
                            <li key={inst.institute} className="flex justify-between items-center bg-gray-100 my-2 p-2 rounded">
                                {inst.institute}
                                <div>
                                    <button onClick={() => handleEditInstitute(inst)} className="bg-yellow-500 text-white font-bold py-1 px-2 rounded mx-1">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteInstitute(inst.institute)} className="bg-red-500 text-white font-bold py-1 px-2 rounded mx-1">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ASetting;
