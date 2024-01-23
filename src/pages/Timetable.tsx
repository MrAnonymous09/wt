import React, { useState, ChangeEvent } from 'react';
import Header from './Header.tsx';

interface TimetableEntry {
  id: number;
  date: string;
  time: string;
  semester: string;
  course: string;
}

const Timetable: React.FC = () => {
  const [timetable, setTimetable] = useState<TimetableEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<TimetableEntry>({
    id: 0,
    date: '',
    time: '',
    semester: '',
    course: '',
  });

  const courseOptions = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleSubmit = () => {
    setTimetable((prevTimetable) => [...prevTimetable, { ...currentEntry, id: prevTimetable.length + 1 }]);
    setCurrentEntry({
      id: 0,
      date: '',
      time: '',
      semester: '',
      course: '',
    });
  };

  const handleUploadTimetable = () => {
    // Implement the logic for uploading timetable here
    // You can use this function to show a success message
    alert('Timetable uploaded successfully!');
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
      <div className="flex-grow flex items-center justify-center">
        <div className="lg:w-1/2 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Timetable Form</h2>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={currentEntry.date}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={currentEntry.time}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Semester</label>
              <select
                id="semester"
                name="semester"
                value={currentEntry.semester}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Semester</option>
                <option value="3rd">3rd</option>
                <option value="5th">5th</option>
              </select>
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">Subject</label>
              <select
                id="course"
                name="course"
                value={currentEntry.course}
                onChange={handleInputChange}
                className="w-full border p-2 bg-white text-black rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Course</option>
                {courseOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4 flex">
            <button
              onClick={() => handleSubmit()}
              className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none mr-2"
            >
              Add Subject
            </button>
            <button
              onClick={() => handleUploadTimetable()}
              className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-700 transition duration-300 focus:outline-none ml-2"
            >
              Upload / Download Timetable
            </button>
          </div>

          <div className="mb-4">
            <table className="w-full border-collapse border border-white text-white">
              <thead>
                <tr>
                  <th className="border border-white p-2">Date</th>
                  <th className="border border-white p-2">Time</th>
                  <th className="border border-white p-2">Semester</th>
                  <th className="border border-white p-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((entry) => (
                  <tr key={entry.id}>
                    <td className="border border-white p-2">{entry.date}</td>
                    <td className="border border-white p-2">{entry.time}</td>
                    <td className="border border-white p-2">{entry.semester}</td>
                    <td className="border border-white p-2">{entry.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
