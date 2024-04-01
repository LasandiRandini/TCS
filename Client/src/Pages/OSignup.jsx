import { useState } from "react";
import { Link } from "react-router-dom";

//ffhrfh
const OSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    district: "",
    contactNo: "",
    institute: "",
    parentContactNo: "",
    parentEmail: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #344955 0%, #78A083 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex md:p-5 px-1 py-9 justify-center items-center">
        <div className="w-1/2 p-4 bg-black-400 rounded justify-center items-center ">
          <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-800 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your full name"
              />
            </div>


            <div className="mb-4">
            <label
                htmlFor="email"
                className="block text-gray-800 font-bold mb-2"
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-500 rounded py-2 px-3"
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                required
            />
              
            </div>


            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-800 font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your address"
              />
            </div>


            <div className="mb-4">
              <label
                htmlFor="district"
                className="block text-gray-800 font-bold mb-2"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your district"
              />
            </div>


            <div className="mb-4">
            <label
                htmlFor="contactNo"
                className="block text-gray-800 font-bold mb-2"
            >
                Contact No
            </label>
            <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your contact number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
            />
             
            </div>


            <div className="mb-4">
            <label
                htmlFor="Year"
                className="block text-gray-800 font-bold mb-2"
            >
                Student Year
            </label>
            <input
                type="text"
                id="Year"
                name="Year"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your studing year"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
            />
             
            </div>


            <div className="mb-4">
              <label
                htmlFor="institute"
                className="block text-gray-800 font-bold mb-2"
              >
                Institute
              </label>
              <input
                type="text"
                id="institute"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your institute"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="parentContactNo"
                className="block text-gray-800 font-bold mb-2"
              >
                Parent Contact No
              </label>
              <input
                type="text"
                id="parentContactNo"
                name="parentContactNo"
                value={formData.parentContactNo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your parent's contact number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="parentEmail"
                className="block text-gray-800 font-bold mb-2"
              >
                Parent Email
              </label>
              <input
                type="parentemail"
                id="parentemail"
                name="parentemail"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                required
            />
            </div>
            <div className="mb-4">
            <label
                htmlFor="username"
                className="block text-gray-800 font-bold mb-2"
            >
                Username
            </label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your username"
                pattern="[a-zA-Z0-9]{4,}"
                title="Username must be at least 4 characters long and can only contain letters and numbers"
                required
            />
              
            </div>
            <div className="mb-4">
            <label
                htmlFor="password"
                className="block text-gray-800 font-bold mb-2"
            >
                Password
            </label>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your password"
                minLength={8}
                required
            />
              <div className="relative">
               
                <span
                  className="absolute right-3 top-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 8v-3m0 0c1.657-1.657 2.879-3 4-3s2.343 1.343 4 3v3M9 16V8a4 4 0 118 0v8"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 8v-3m0 0c1.657-1.657 2.879-3 4-3s2.343 1.343 4 3v3M9 16V8a4 4 0 118 0v8"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-800 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                alert("Check your email and Confirm your Registration")
              }
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <p className="text-gray-700">
              {" "}
              Already have an account?
              <Link to="/SLogin" className="text-white">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSignup;

