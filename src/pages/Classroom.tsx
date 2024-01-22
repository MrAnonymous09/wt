// src/App.tsx

import React, { useState } from 'react';
import Header from './Header.tsx';

const Classroom: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here

    // After successful submission, show the success popup
    setShowSuccessPopup(true);

    // You can reset the form fields here if needed
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    const file = e.target.files?.[0];
    if (file) {
      // Process the file as needed
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/classroom.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Header />
      <div className="flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">CLASSROOM FORM</h2>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Building Name</label>
              <input type="text" id="buildingName" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Floor No</label>
              <input type="text" id="floorNo" className="w-full border p-2" />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Class/Lab Room Number</label>
              <input type="text" id="roomNumber" className="w-full border p-2" />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Capacity</label>
              <input type="text" id="capacity" className="w-full border p-2" />
            </div>
          </div>

          {/* Removing Type (Class or Lab) input as per your request */}

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 mb-4"
          >
            Submit
          </button>

          <div className="flex justify-between">
            <label
              htmlFor="bulkUpload"
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
            >
              Upload Csv
              <input type="file" id="bulkUpload" accept=".csv, .xlsx" onChange={handleFileUpload} className="hidden" />
            </label>
            <button className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300">
              Download Classrooms Data
            </button>
          </div>
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Classroom data added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classroom;
