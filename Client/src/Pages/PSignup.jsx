// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link, useNavigate, useLocation } from "react-router-dom";

// // const PSignup = () => {
// //   const [inputs, setInputs] = useState({
// //     first_name: "",
// //     last_name: "",                                                                
// //     district: "",
// //     email: "",
// //     snic_no: "",
// //     contact_no: "",
// //     al_year: "",
// //     institute: "",
// //     parent_contact_no: "",
// //     parent_email: "",
// //     username: "",
// //     password: ""
// //   });

// //   const [err, setError] = useState(null);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     const queryParams = new URLSearchParams(location.search);
// //     const nic = queryParams.get('nic_no');
// //     if (nic) {
// //       setInputs((prev) => ({ ...prev, snic_no: nic }));
// //     }
// //   }, [location.search]);

// //   const handleChange = (e) => {
// //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post("http://localhost:8800/api/auth/register", inputs);
// //       navigate("/SLogin");
// //     } catch (err) {
// //       if (err.response && err.response.data) {
// //         setError(err.response.data.message);
// //       } else {
// //         setError("Something went wrong!");
// //       }
// //     }
// //   };

// //   const districts = [
// //     "Colombo",
// //     "Gampaha",
// //     "Kalutara",
// //     "Kandy",
// //     "Matale",
// //     "Nuwara Eliya",
// //     "Galle",
// //     "Matara",
// //     "Hambantota",
// //     "Jaffna",
// //     "Kilinochchi",
// //     "Mannar",
// //     "Vavuniya",
// //     "Mullaitivu",
// //     "Batticaloa",
// //     "Ampara",
// //     "Trincomalee",
// //     "Kurunegala",
// //     "Puttalam",
// //     "Anuradhapura",
// //     "Polonnaruwa",
// //     "Badulla",
// //     "Monaragala",
// //     "Ratnapura",
// //     "Kegalle"
// //   ];
// //   return (
// //     <div className="flex justify-center items-center min-h-screen p-6 bg-gray-700">
// //       <div className="w-full max-w-lg bg-black bg-opacity-40 shadow-md rounded-lg shadow-lg p-8">
// //         <h1 className="text-3xl font-semibold text-center mb-6 text-white">Register</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="flex flex-col">
// //             <label htmlFor="first_name" className="text-sm text-white font-medium mb-1">First Name</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="first_name"
// //               type="text"
// //               placeholder="First Name"
// //               name="first_name"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="last_name" className="text-sm text-white font-medium mb-1">Last Name</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="last_name"
// //               type="text"
// //               placeholder="Last Name"
// //               name="last_name"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="district" className="text-sm text-white font-medium mb-1">District</label>
// //             <select
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="district"
// //               name="district"
// //               value={inputs.district}
// //               onChange={handleChange}
// //             >
// //               <option value="" disabled>Select District</option>
// //               {districts.map((district, index) => (
// //                 <option key={index} value={district}>{district}</option>
// //               ))}
// //             </select>
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="email" className="text-sm text-white font-medium mb-1">Email</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="email"
// //               type="email"
// //               placeholder="Email"
// //               name="email"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="snic_no" className="text-sm text-white font-medium mb-1">NIC Number</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="snic_no"
// //               type="text"
// //               placeholder="NIC Number"
// //               name="snic_no"
// //               value={inputs.snic_no}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="contact_no" className="text-sm text-white font-medium mb-1">Contact No</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="contact_no"
// //               type="text"
// //               placeholder="Contact No"
// //               name="contact_no"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="al_year" className="text-sm text-white font-medium mb-1">AL Year</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="al_year"
// //               type="text"
// //               placeholder="AL Year"
// //               name="al_year"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="institute" className="text-sm text-white font-medium mb-1">Institute</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="institute"
// //               type="text"
// //               placeholder="Institute"
// //               name="institute"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="parent_contact_no" className="text-sm text-white font-medium mb-1">Parent Contact No</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="parent_contact_no"
// //               type="text"
// //               placeholder="Parent Contact No"
// //               name="parent_contact_no"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="parent_email" className="text-sm text-white font-medium mb-1">Parent Email</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="parent_email"
// //               type="email"
// //               placeholder="Parent Email"
// //               name="parent_email"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col">
// //             <label htmlFor="username" className="text-sm text-white font-medium mb-1">Username</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="username"
// //               type="text"
// //               placeholder="Username"
// //               name="username"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="flex flex-col mb-6">
// //             <label htmlFor="password" className="text-sm text-white font-medium mb-1">Password</label>
// //             <input
// //               required
// //               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //               id="password"
// //               type="password"
// //               placeholder="Password"
// //               name="password"
// //               onChange={handleChange}
// //             />
// //           </div>
// //           {err && <p className="text-red-500 text-xs italic text-center mb-4">{err}</p>}
// //           <button
// //             type="submit"
// //             className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <p className="text-center mt-4">
// //           Do you have an account? <Link to="/SLogin" className="text-green-500 hover:text-green-700">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PSignup;


// import Datetime from 'react-datetime';
// import { Link } from 'react-router-dom';
// import "react-datetime/css/react-datetime.css";
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function StdRegistration() {

//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});

//   const [formData, setFormData] = useState({
//     first_name: "",
//         last_name: "",                                                                
//         district: "",
//         email: "",
//         snic_no: "",
//         contact_no: "",
//         al_year: "",
//         institute: "",
//         parent_contact_no: "",
//         parent_email: "",
//         username: "",
//         password: ""
    
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setFormErrors({
//       ...formErrors,
//       [name]: ''
//     });
//   };

  

//   const validate = () => {
//     let errors = {};
//     if (!formData.firstName) errors.firstName = 'First name is required';
//     if (!formData.lastName) errors.lastName = 'Last name is required';
//     if (!formData.district) errors.district = 'Initial is required';
    
//     if (!formData.emailAddress) errors.emailAddress = 'Email address is required';
//     if (!formData.snic_no) errors.snic_no = 'Mobile phone is required';
//     if (!formData.al_year) errors.al_year = 'Address line 1 is required';
//     if (!formData.institute) errors.institute = 'Address line 2 is required';

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validate();
//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       navigate('/reg_fees', {
//         state: formData
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="bg-gray-100 py-6">
//         <div className="max-w-7xl mx-auto p-6">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <h2 className="text-3xl font-bold text-center text-gray-900">Admission Form</h2>
//             <p className="mt-4 text-center text-red-600 text-xs">
//               * Please insert the correct details. You will have to pay Rs.300 before registering in the system.
//             </p>

//             <h3 className="text-lg font-semibold text-gray-900">Personal Information | පුද්ගලික තොරතුරු</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">First Name | මුල් නම<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Last Name | අවසාන නම<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Initial | මුලකුරු සමග නම<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="initial"
//                   value={formData.initial}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.initial && <p className="text-red-500 text-sm">{formErrors.initial}</p>}
//               </div>
//               <div className="relative">
//                 <label className="block text-sm font-medium text-gray-900">Birthday | උපන් දිනය<span className="text-red-500"> *</span></label>
//                 <div className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
//                   <Datetime
//                     timeFormat={false}
//                     readOnly
//                     className="readonly block w-full"
//                     onChange={handleBirthdayChange}
//                     onKeyDown={(event) => event.preventDefault()}
//                   />
//                   <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   {formErrors.birthday && <p className="text-red-500 text-sm">{formErrors.birthday}</p>}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Gender | ස්ත්‍රී/පුරුෂ භාවය<span className="text-red-500"> *</span></label>
//                 <div className="mt-1 flex items-center space-x-4">
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="male"
//                       onChange={handleChange}
//                       className="h-4 w-4 border-gray-300 focus:ring-indigo-500"
//                     />
//                     <span className="ml-2 text-sm text-gray-900">Male</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="female"
//                       onChange={handleChange}
//                       className="h-4 w-4 border-gray-300 focus:ring-indigo-500"
//                     />
//                     <span className="ml-2 text-sm text-gray-900">Female</span>
//                   </label>
//                   {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Email Address | විද්‍යුත් තැපැල් ලිපිනය</label>
//                 <input
//                   type="email"
//                   name="emailAddress"
//                   value={formData.emailAddress}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.emailAddress && <p className="text-red-500 text-sm">{formErrors.emailAddress}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Mobile Phone | දුරකථන අංකය<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="mobilePhone"
//                   value={formData.mobilePhone}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.mobilePhone && <p className="text-red-500 text-sm">{formErrors.mobilePhone}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">WhatsApp Number | WhatsApp අංකය</label>
//                 <input
//                   type="text"
//                   name="whatsappNumber"
//                   value={formData.whatsappNumber}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.whatsappNumber && <p className="text-red-500 text-sm">{formErrors.whatsappNumber}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Address Line 1 | ලිපිනය 1<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="addressLine1"
//                   value={formData.addressLine1}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.addressLine1 && <p className="text-red-500 text-sm">{formErrors.addressLine1}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Address Line 2 | ලිපිනය 2<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="addressLine2"
//                   value={formData.addressLine2}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.addressLine2 && <p className="text-red-500 text-sm">{formErrors.addressLine2}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">City | නගරය<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900 mt-8">School Information | පාසල් තොරතුරු</h3>
//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">School | පාසල</label>
//                 <input
//                   type="text"
//                   name="school"
//                   value={formData.school}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900 mt-8">Parent Information | දෙමව්පියන්ගේ තොරතුරු</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Parent Name | දෙමව්පියන්ගේ නම</label>
//                 <input
//                   type="text"
//                   name="parentName"
//                   value={formData.parentName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Occupation | රැකියාව</label>
//                 <input
//                   type="text"
//                   name="occupation"
//                   value={formData.occupation}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">Contact No | දුරකථන අංකය</label>
//                 <input
//                   type="text"
//                   name="contactNo"
//                   value={formData.contactNo}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-900 mt-8">Other Information | වෙනත් තොරතුරු</h3>
//             <div className="grid grid-cols-1 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-900">How did you hear about Vision Academy? | Vision Academy ගැන කෙසේ දැන ගත්තෙහිද?</label>
//                 <textarea
//                   name="aboutVision"
//                   value={formData.aboutVision}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="3"
//                 ></textarea>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreedToTerms"
//                   checked={formData.agreedToTerms}
//                   onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
//                   className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                 />
//                 <label className="ml-2 text-sm text-gray-900">
//                   I agree to the <Link to="#" className="text-indigo-600 hover:underline">Terms and Conditions</Link> and I understand that a fee of Rs.300 is required for registration.
//                 </label>
//               </div>
//               {formErrors.agreedToTerms && <p className="text-red-500 text-sm">{formErrors.agreedToTerms}</p>}
//             </div>

//             <div className="flex justify-end mt-6">
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StdRegistration;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import CLASS from '../assets/class.png';

// import "react-datetime/css/react-datetime.css";

// const PSignup = () => {
//   const [inputs, setInputs] = useState({
//     first_name: "",
//     last_name: "",                                                                
//     district: "",
//     email: "",
//     snic_no: "",
//     contact_no: "",
//     al_year: "",
//     institute: "",
//     parent_contact_no: "",
//     parent_email: "",
//     username: "",
//     password: ""
//   });

//   const [err, setError] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const nic = queryParams.get('nic_no');
//     if (nic) {
//       setInputs((prev) => ({ ...prev, snic_no: nic }));
//     }
//   }, [location.search]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prev) => ({ ...prev, [name]: value }));
//     setFormErrors({
//       ...formErrors,
//       [name]: ''
//     });
//   };

//   const validate = () => {
//     let errors = {};

//     // General required fields
//     if (!inputs.first_name) errors.first_name = 'First name is required';
//     if (!inputs.last_name) errors.last_name = 'Last name is required';
//     if (!inputs.district) errors.district = 'District is required';
//     if (!inputs.snic_no) errors.snic_no = 'NIC Number is required';
//     if (!inputs.al_year) errors.al_year = 'AL Year is required';
//     if (!inputs.institute) errors.institute = 'Institute is required';

//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!inputs.email) {
//       errors.email = 'Email address is required';
//     } else if (!emailPattern.test(inputs.email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Contact number validation
//     const contactNoPattern = /^[0-9]{10}$/;
//     if (!inputs.contact_no) {
//       errors.contact_no = 'Contact No is required';
//     } else if (!contactNoPattern.test(inputs.contact_no)) {
//       errors.contact_no = 'Contact No must be 10 digits';
//     }

//     if (!inputs.parent_contact_no) {
//       errors.parent_contact_no = 'Parent Contact No is required';
//     } else if (!contactNoPattern.test(inputs.parent_contact_no)) {
//       errors.parent_contact_no = 'Parent Contact No must be 10 digits';
//     }

//     // Parent email validation
//     if (!inputs.parent_email) {
//       errors.parent_email = 'Parent Email is required';
//     } else if (!emailPattern.test(inputs.parent_email)) {
//       errors.parent_email = 'Invalid parent email address';
//     }

//     // Username validation
//     if (!inputs.username) {
//       errors.username = 'Username is required';
//     } else if (inputs.username.length < 5) {
//       errors.username = 'Username must be at least 5 characters long';
//     }

//     // Password validation
//     if (!inputs.password) {
//       errors.password = 'Password is required';
//     } else if (inputs.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters long';
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validate();
//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       try {
//         await axios.post("http://localhost:8800/api/auth/register", inputs);
//         navigate("/SLogin");
//       } catch (err) {
//         if (err.response && err.response.data) {
//           setError(err.response.data.message);
//         } else {
//           setError("Something went wrong!");
//         }
//       }
//     }
//   };

//   const districts = [
//     "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
//     "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
//     "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
//     "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
//     "Monaragala", "Ratnapura", "Kegalle"
//   ];

//   return (
//     <div
//       className="min-h-screen  bg-cover bg-center flex justify-center items-center"
//       style={{ backgroundImage: `url(${CLASS})` }}
//     >
//       <div className="bg-gray-100 bg-opacity-15 py-10 mt-5 w-4/6 mb-5">
//         <div className="max-w-10xl mx-auto p-6">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <h2 className="text-3xl font-bold text-center text-gray-100">Student Registration Form</h2>
//             <p className="mt-4 text-center text-red-300 text-xs">
//               * Please insert the correct details.
//             </p>

//             <h3 className="text-lg font-semibold text-gray-200">Personal Information | පුද්ගලික තොරතුරු</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">First Name | මුල් නම<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={inputs.first_name}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.first_name && <p className="text-red-200 text-sm">{formErrors.first_name}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Last Name | අවසාන නම<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={inputs.last_name}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.last_name && <p className="text-red-200 text-sm">{formErrors.last_name}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">District | දිස්ත්‍රික්කය<span className="text-red-500"> *</span></label>
//                 <select
//                   name="district"
//                   value={inputs.district}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="" disabled>Select District</option>
//                   {districts.map((district, index) => (
//                     <option key={index} value={district}>{district}</option>
//                   ))}
//                 </select>
//                 {formErrors.district && <p className="text-red-200 text-sm">{formErrors.district}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Email | විද්‍යුත් තැපැල්<span className="text-red-500"> *</span></label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={inputs.email}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.email && <p className="text-red-200 text-sm">{formErrors.email}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">NIC Number | ජාතික හැදුනුම්<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="snic_no"
//                   value={inputs.snic_no}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.snic_no && <p className="text-red-200 text-sm">{formErrors.snic_no}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Contact No | දුරකථන<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="contact_no"
//                   value={inputs.contact_no}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.contact_no && <p className="text-red-200 text-sm">{formErrors.contact_no}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">AL Year | AL වර්ෂය<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="al_year"
//                   value={inputs.al_year}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.al_year && <p className="text-red-200 text-sm">{formErrors.al_year}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Institute | ආයතනය<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={inputs.institute}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.institute && <p className="text-red-200 text-sm">{formErrors.institute}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Parent Contact No | දෙමාපියන්ගේ දුරකථන<span className="text-red-500"> *</span></label>
//                 <input
//                   type="text"
//                   name="parent_contact_no"
//                   value={inputs.parent_contact_no}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.parent_contact_no && <p className="text-red-200 text-sm">{formErrors.parent_contact_no}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Parent Email | දෙමාපියන්ගේ විද්‍යුත් තැපැල්<span className="text-red-500"> *</span></label>
//                 <input
//                   type="email"
//                   name="parent_email"
//                   value={inputs.parent_email}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.parent_email && <p className="text-red-200 text-sm">{formErrors.parent_email}</p>}
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-200">Login Details | ලොගින් තොරතුරු</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">Username<span className="text-red-200"> *</span></label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={inputs.username}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.username && <p className="text-red-200 text-sm">{formErrors.username}</p>}
//               </div>
//               {/* <div>
//                 <label className="block text-sm font-medium text-gray-200">Password<span className="text-red-200"> *</span></label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={inputs.password}
//                   onChange={handleChange}
//                   className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 {formErrors.password && <p className="text-red-200 text-sm">{formErrors.password}</p>}
//               </div> */}
              
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="mt-6 bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//               >
//                 Register
//               </button>
//             </div>

//             {err && <p className="mt-4 text-center text-red-200">{err}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PSignup;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import CLASS from "../assets/class.png";
import "react-datetime/css/react-datetime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PSignup = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    district: "",
    email: "",
    snic_no: "",
    contact_no: "",
    al_year: "",
    institute: "",
    parent_contact_no: "",
    parent_email: "",
    username: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [err, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [alYears, setAlYears] = useState([]);
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    const fetchAlYears = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/auth/getAlYears");
        setAlYears(response.data);
      } catch (error) {
        console.error("Failed to fetch AL years", error);
      }
    };
    fetchAlYears();
  }, []);

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/settings/institutes");
        setInstitutes(response.data);
      } catch (error) {
        console.error("Failed to fetch Institutess", error);
      }
    };
    fetchInstitutes();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const nic = queryParams.get("nic_no");
    if (nic) {
      setInputs((prev) => ({ ...prev, snic_no: nic }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setFormErrors({
      ...formErrors,
      [name]: ""
    });
  };

  const validate = () => {
    let errors = {};

    // General required fields
    if (!inputs.first_name) errors.first_name = "First name is required";
    if (!inputs.last_name) errors.last_name = "Last name is required";
    if (!inputs.district) errors.district = "District is required";
    if (!inputs.snic_no) errors.snic_no = "NIC Number is required";
    if (!inputs.al_year) errors.al_year = "AL Year is required";
    if (!inputs.institute) errors.institute = "Institute is required";

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email) {
      errors.email = "Email address is required";
    } else if (!emailPattern.test(inputs.email)) {
      errors.email = "Invalid email address";
    }

    
    const contactNoPattern = /^[0-9]{10}$/;
    if (!inputs.contact_no) {
      errors.contact_no = "Contact No is required";
    } else if (!contactNoPattern.test(inputs.contact_no)) {
      errors.contact_no = "Contact No must be 10 digits";
    }

    if (!inputs.parent_contact_no) {
      errors.parent_contact_no = "Parent Contact No is required";
    } else if (!contactNoPattern.test(inputs.parent_contact_no)) {
      errors.parent_contact_no = "Parent Contact No must be 10 digits";
    }

   
    if (!inputs.parent_email) {
      errors.parent_email = "Parent Email is required";
    } else if (!emailPattern.test(inputs.parent_email)) {
      errors.parent_email = "Invalid parent email address";
    }

   
    if (!inputs.username) {
      errors.username = "Username is required";
    } else if (inputs.username.length < 5) {
      errors.username = "Username must be at least 5 characters long";
    }

  
    if (!inputs.password) {
      errors.password = "Password is required";
    } else if (inputs.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
        navigate("/SLogin");
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data.message);
        } else {
          setError("Something went wrong!");
        }
      }
    }
  };

  const districts = [
    "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
    "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
    "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
    "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
    "Monaragala", "Ratnapura", "Kegalle"
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${CLASS})` }}
    >
      <div className="bg-black bg-opacity-30 py-10 mt-5 w-4/6 pl-5 pr-5 mb-5">
        <div className="max-w-10xl mx-auto p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center text-gray-100">
              Student Registration Form
            </h2>
            <p className="mt-4 text-center text-red-300 text-xs">
              * Please insert the correct details.
            </p>

            <h3 className="text-lg font-semibold text-gray-200">
              Personal Information | පුද්ගලික තොරතුරු
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  First Name | මුල් නම<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={inputs.first_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.first_name && (
                  <p className="text-red-200 text-sm">{formErrors.first_name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Last Name | අවසාන නම<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={inputs.last_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.last_name && (
                  <p className="text-red-200 text-sm">{formErrors.last_name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  District | දිස්ත්‍රික්කය<span className="text-red-500"> *</span>
                </label>
                <select
                  name="district"
                  value={inputs.district}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {formErrors.district && (
                  <p className="text-red-200 text-sm">{formErrors.district}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email | විද්‍යුත් තැපැල්<span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.email && (
                  <p className="text-red-200 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  NIC Number | ජාතික හැදුනුම්<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="snic_no"
                  value={inputs.snic_no}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.snic_no && (
                  <p className="text-red-200 text-sm">{formErrors.snic_no}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Contact No | දුරකථන<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="contact_no"
                  value={inputs.contact_no}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.contact_no && (
                  <p className="text-red-200 text-sm">{formErrors.contact_no}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  AL Year | AL වර්ෂය<span className="text-red-500"> *</span>
                </label>
                <select
                  name="al_year"
                  value={inputs.al_year}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a year</option>
                  {alYears.map((year) => (
                    <option key={year.al_year} value={year.al_year}>
                      {year.al_year}
                    </option>
                  ))}
                </select>
                {formErrors.al_year && (
                  <p className="text-red-200 text-sm">{formErrors.al_year}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Institute | ආයතනය<span className="text-red-500"> *</span>
                </label>
                <select
                  
                  name="institute"
                  value={inputs.institute}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select the Instutute</option>
                  {institutes.map((institute) => (
                    <option key={institute.instutute} value={institute.institute}>
                      {institute.institute}
                    </option>
                    ))}
                </select>
                {formErrors.institute && (
                  <p className="text-red-200 text-sm">{formErrors.institute}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Parent Contact No | දෙමාපියන්ගේ දුරකථන<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="parent_contact_no"
                  value={inputs.parent_contact_no}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.parent_contact_no && (
                  <p className="text-red-200 text-sm">
                    {formErrors.parent_contact_no}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Parent Email | දෙමාපියන්ගේ විද්‍යුත් තැපැල්
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="parent_email"
                  value={inputs.parent_email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.parent_email && (
                  <p className="text-red-200 text-sm">
                    {formErrors.parent_email}
                  </p>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-200">
              Login Details | ලොගින් තොරතුරු
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Username<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {formErrors.username && (
                  <p className="text-red-200 text-sm">{formErrors.username}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Password<span className="text-red-500"> *</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    className="mt-1 p-2 pr-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>
                {formErrors.password && (
                  <p className="text-red-200 text-sm">{formErrors.password}</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>

            {err && <p className="mt-4 text-center text-red-200">{err}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PSignup;
