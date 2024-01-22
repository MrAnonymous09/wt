// src/App.tsx

import React, { useState } from 'react';
import Header from './Header.tsx';

const Student: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    semester: '',
    division: '',
    course: '',
    srn: '',
    rollNo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    const file = e.target.files?.[0];
    if (file) {
      // Process the file as needed
      console.log('File uploaded:', file.name);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here

    // After successful submission, show the success popup
    setShowSuccessPopup(true);

    // You can reset the form fields here if needed
    setFormData({
      name: '',
      semester: '',
      division: '',
      course: '',
      srn: '',
      rollNo: '',
    });
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/student_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Single Student Data Upload</h2>
          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2"
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Semester</label>
              <select id="semester" value={formData.semester} onChange={handleChange} className="w-full border p-2">
                <option value="3rd">3rd</option>
                <option value="5th">5th</option>
              </select>
            </div>
          </div>
          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Division</label>
              <select id="division" value={formData.division} onChange={handleChange} className="w-full border p-2">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Course</label>
              <select id="course" value={formData.course} onChange={handleChange} className="w-full border p-2">
                <option value="CSE">CSE</option>
                <option value="CSE-Ai">CSE-Ai</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
              </select>
            </div>
          </div>
          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">SRN</label>
              <input type="text" id="srn" value={formData.srn} onChange={handleChange} className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Roll No</label>
              <input
                type="text"
                id="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                className="w-full border p-2"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
          >
            Submit
          </button>
          // ...
          <div className="flex justify-between">
            <label
              htmlFor="bulkUpload"
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
            >
              Upload Csv
              <input type="file" id="bulkUpload" accept=".csv, .xlsx" onChange={handleFileUpload} className="hidden" />
            </label>
            <button className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300">
              Download Students Data
            </button>
          </div>
          // ...
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Student data added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
