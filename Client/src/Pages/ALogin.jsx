import { useState } from "react";
import { Link } from "react-router-dom";

const ALogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #344955 0%, #78A083 100%)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-screen justify-center items-center">
        <div className="w-1/2 p-8 bg-gray-200 rounded">
          <h2 className="text-2xl font-bold mb-4">Student Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded py-2 px-3"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  placeholder="Enter your password"
                />
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
            <Link
              to="/Video"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          </form>
          <div className="mt-4">
            <span className="text-gray-700">
              {" "}
              Don t have an account?
              <Link to="/PSignup">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALogin;
