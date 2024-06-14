

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = validate();
  //   setFormErrors(errors);
  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       await axios.post("http://localhost:8800/api/auth/register", inputs);
  //       navigate("/SLogin");
  //     } catch (err) {
  //       if (err.response && err.response.data) {
  //         setError(err.response.data.message);
  //       } else {
  //         setError("Something went wrong!");
  //       }
  //     }
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
        navigate("/SLogin");
      } catch (err) {
        if (err.response && err.response.status === 409) {
          setError("User already exists!");
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
