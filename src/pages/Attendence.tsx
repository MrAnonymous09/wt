// src/App.tsx

import React, { useState, ChangeEvent } from 'react';
import Header from './Header.tsx';

const Attendance: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [absenteesListEvenSem, setAbsenteesListEvenSem] = useState<string[]>([]);
  const [absenteesListOddSem, setAbsenteesListOddSem] = useState<string[]>([]);

  const roomNumbers = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5']; // Add more room numbers as needed

  const handleSubmit = () => {
    // Handle form submission logic here

    // After successful submission, show the success popup
    setShowSuccessPopup(true);

    // You can reset the form fields here if needed
    setSelectedRoom('');
    setAbsenteesListEvenSem([]);
    setAbsenteesListOddSem([]);
  };

  const handleAbsenteesChangeEvenSem = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAbsenteesListEvenSem(value.split(',').map((absentee) => absentee.trim()));
  };

  const handleAbsenteesChangeOddSem = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAbsenteesListOddSem(value.split(',').map((absentee) => absentee.trim()));
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
          <h2 className="text-2xl font-bold mb-4 text-white">Attendance Form</h2>

          <div className="mb-4">
            <label className="block text-gray-300">Select Room</label>
            <select
              id="roomNumber"
              className="w-full border p-2"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="">Select Room</option>
              {roomNumbers.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Absentees Roll no List for 3rd Sem (comma-separated)</label>
            <input
              type="text"
              id="absenteesListEvenSem"
              className="w-full border p-2"
              value={absenteesListEvenSem.join(', ')}
              onChange={handleAbsenteesChangeEvenSem}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Absentees Roll no List for 5th Sem (comma-separated)</label>
            <input
              type="text"
              id="absenteesListOddSem"
              className="w-full border p-2"
              value={absenteesListOddSem.join(', ')}
              onChange={handleAbsenteesChangeOddSem}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold">Attendance data added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
