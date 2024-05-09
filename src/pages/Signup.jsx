import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    scholarNumber: "",
    name: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    // Perform form submission logic, e.g., API call or form validation
    console.log("Form data:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-300  h-screen p-16">
      <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
        <h2 className="text-black font-bold text-4xl pb-3 mb-2">
          Student Registration
          <hr className="h-px mt-5 bg-gray-300 border-0" />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black" htmlFor="scholarNumber">
                Scholar Number <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Scholar Number"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="scholarNumber"
                type="text"
                name="scholarNumber"
                value={formData.scholarNumber}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-black" htmlFor="name">
                Name of Student <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Name of Student"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black" htmlFor="fatherName">
                Father's Name <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Father's Name"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="fatherName"
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-black" htmlFor="motherName">
                Mother's Name <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Mother's Name"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="motherName"
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black" htmlFor="mobile">
                Mobile No <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Mobile No"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="mobile"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-black" htmlFor="email">
                Email ID <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Email ID"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black" htmlFor="dateOfBirth">
                Date of Birth<span className="text-red-600">*</span>
              </label>
              <input
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-black" htmlFor="gender">
                Gender<span className="text-red-600">*</span>
              </label>
              <select
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-black" htmlFor="password">
                Create Password <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Create Password"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-black" htmlFor="confirmPassword">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Confirm Password"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className=" mt-5 mb-3 ">
            <label class="text-black flex items-center ">
              <input
                className=" mr-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-7 h-7"
                type="checkbox"
              />
              <p className="font-medium">
                You must certify in order to proceed. I certify that I am the
                person described above, and that the information presented here
                is correct to the best of my knowledge.
              </p>
            </label>
          </div>
          <div className="mt-4 flex justify-center">
            <p class="text-black mt-4">
              Already have an account?
              <Link
                class="text-sm text-blue-500 -200 hover:underline mt-4"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
          <div className="mt-4 flex justify-center ">
            <button
              class="  py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
