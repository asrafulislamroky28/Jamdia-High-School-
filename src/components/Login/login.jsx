import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password visibility toggle

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Login Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row p-8">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546521343-20c2d7caaec7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            minHeight: "100%",
            backgroundSize: "cover",
          }}
        />

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Login to Your Account
          </h1>

          {/* Form Fields */}
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-600 text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                className="p-4 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-600 text-lg">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="p-4 text-lg border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>

            <p className="mt-4 text-center text-sm">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
