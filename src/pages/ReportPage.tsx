// src/App.tsx

import React from 'react';
import Header from './Header.tsx';

const Teacher: React.FC = () => {
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
        <div className="lg:w-2/3 md:w-3/4 sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg">
          {/* Classroom Allocation Table */}
          <h2 className="text-2xl font-bold mb-4 text-white">Submited data</h2>
          <table className="w-full border-collapse border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-white">Room Number</th>
                <th className="border border-gray-300 p-2 text-white">Faculty Name</th>
                <th className="border border-gray-300 p-2 text-white">3rd Sem Present</th>
                <th className="border border-gray-300 p-2 text-white">3rd Sem Absent </th>
                <th className="border border-gray-300 p-2 text-white">5th Sem Present</th>
                <th className="border border-gray-300 p-2 text-white">5th Sem Absent </th>
                <th className="border border-gray-300 p-2 text-white">Total Present Students</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, replace with actual data */}
              <tr>
                <td className="border border-gray-300 p-2 text-white">101</td>
                <td className="border border-gray-300 p-2 text-white">John Doe</td>
                <td className="border border-gray-300 p-2 text-white">30</td>
                <td className="border border-gray-300 p-2 text-white">5</td>
                <td className="border border-gray-300 p-2 text-white">40</td>
                <td className="border border-gray-300 p-2 text-white">2</td>
                <td className="border border-gray-300 p-2 text-white">70</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-white">101</td>
                <td className="border border-gray-300 p-2 text-white">John Doe</td>
                <td className="border border-gray-300 p-2 text-white">30</td>
                <td className="border border-gray-300 p-2 text-white">5</td>
                <td className="border border-gray-300 p-2 text-white">40</td>
                <td className="border border-gray-300 p-2 text-white">2</td>
                <td className="border border-gray-300 p-2 text-white">70</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-white">102</td>
                <td className="border border-gray-300 p-2 text-white">Jane Smith</td>
                <td className="border border-gray-300 p-2 text-white">25</td>
                <td className="border border-gray-300 p-2 text-white">3</td>
                <td className="border border-gray-300 p-2 text-white">35</td>
                <td className="border border-gray-300 p-2 text-white">1</td>
                <td className="border border-gray-300 p-2 text-white">60</td>
              </tr>
            </tbody>
          </table>

          {/* Faculty Information Table */}
          <h2 className="text-2xl font-bold mb-4 text-white">Faculty Information Table</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-white">Name</th>
                <th className="border border-gray-300 p-2 text-white">Semester</th>
                <th className="border border-gray-300 p-2 text-white">Course</th>
                <th className="border border-gray-300 p-2 text-white">Division</th>
                <th className="border border-gray-300 p-2 text-white">No of Answer Booklets</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, replace with actual data */}
              <tr>
                <td className="border border-gray-300 p-2 text-white">John Doe</td>
                <td className="border border-gray-300 p-2 text-white">3</td>
                <td className="border border-gray-300 p-2 text-white">Mathematics</td>
                <td className="border border-gray-300 p-2 text-white">A</td>
                <td className="border border-gray-300 p-2 text-white">100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-white">John Doe</td>
                <td className="border border-gray-300 p-2 text-white">3</td>
                <td className="border border-gray-300 p-2 text-white">Mathematics</td>
                <td className="border border-gray-300 p-2 text-white">A</td>
                <td className="border border-gray-300 p-2 text-white">100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-white">Jane Smith</td>
                <td className="border border-gray-300 p-2 text-white">5</td>
                <td className="border border-gray-300 p-2 text-white">Science</td>
                <td className="border border-gray-300 p-2 text-white">B</td>
                <td className="border border-gray-300 p-2 text-white">150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
