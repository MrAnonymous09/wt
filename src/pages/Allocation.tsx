import React, { useState } from 'react';
import Header from './Header.tsx';

interface Room {
  roomNo: number;
  thirdSemStudents: { startRollNo: string; endRollNo: string };
  fifthSemStudents: { startRollNo: string; endRollNo: string };
  questionPaperCountThirdSem: number;
  questionPaperCountFifthSem: number;
  facultyNames: string[];
}

const Attendance: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [roomNumber, setRoomNumber] = useState<number>(0);
  const [thirdSemStudents, setThirdSemStudents] = useState<number>(0);
  const [fifthSemStudents, setFifthSemStudents] = useState<number>(0);
  const [rooms, setRooms] = useState<Room[]>([]);

  const handleSubmit = () => {
    // Handle form submission logic here

    // Calculate students per room for 3rd and 5th semesters
    const studentsPerRoomThirdSem = Math.ceil(thirdSemStudents / roomNumber);
    const studentsPerRoomFifthSem = Math.ceil(fifthSemStudents / roomNumber);

    // Create room objects with allocated students and faculty names
    const newRooms: Room[] = [];
    let currentStudentNoThirdSem = 1;
    let currentStudentNoFifthSem = 1;

    for (let i = 1; i <= roomNumber; i++) {
      const endRollNoThirdSem = Math.min(currentStudentNoThirdSem + studentsPerRoomThirdSem - 1, thirdSemStudents);
      const endRollNoFifthSem = Math.min(currentStudentNoFifthSem + studentsPerRoomFifthSem - 1, fifthSemStudents);

      const newRoom: Room = {
        roomNo: i,
        thirdSemStudents: {
          startRollNo: currentStudentNoThirdSem.toString(),
          endRollNo: endRollNoThirdSem.toString(),
        },
        fifthSemStudents: {
          startRollNo: currentStudentNoFifthSem.toString(),
          endRollNo: endRollNoFifthSem.toString(),
        },
        questionPaperCountThirdSem: endRollNoThirdSem - currentStudentNoThirdSem + 1,
        questionPaperCountFifthSem: endRollNoFifthSem - currentStudentNoFifthSem + 1,
        facultyNames: [`Faculty ${i}_1`, `Faculty ${i}_2`],
      };

      newRooms.push(newRoom);

      currentStudentNoThirdSem = endRollNoThirdSem + 1;
      currentStudentNoFifthSem = endRollNoFifthSem + 1;
    }

    // Set the new rooms
    setRooms(newRooms);

    // After successful submission, show the success popup
    setShowSuccessPopup(true);

    // You can reset the form fields here if needed
    setRoomNumber(0);
    setThirdSemStudents(0);
    setFifthSemStudents(0);
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
          <h2 className="text-2xl font-bold mb-4 text-white">Room Allocation Form</h2>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">Choose available no of Rooms</label>
              <select
                id="roomNumber"
                className="w-full border p-2"
                value={roomNumber}
                onChange={(e) => setRoomNumber(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                  <option key={value} value={value.toString()}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4 lg:flex">
            <div className="lg:w-1/2 pr-2 mb-2 lg:mb-0">
              <label className="block text-gray-300">No of Eligible 3rd Sem Students</label>
              <input
                type="number"
                id="thirdSemStudents"
                className="w-full border p-2"
                value={thirdSemStudents}
                onChange={(e) => setThirdSemStudents(parseInt(e.target.value))}
              />
            </div>
            <div className="lg:w-1/2 pl-2">
              <label className="block text-gray-300">No of Eligible 5th Sem Students</label>
              <input
                type="number"
                id="fifthSemStudents"
                className="w-full border p-2"
                value={fifthSemStudents}
                onChange={(e) => setFifthSemStudents(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="mb-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Allocate Rooms
            </button>
          </div>

          {showSuccessPopup && (
            <div
              className="top-0 left-0 w-full h-full flex items-center justify-center"
              onClick={() => setShowSuccessPopup(false)}
            >
              <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">Allocation done successfully!</p>
              </div>
            </div>
          )}
        </div>
        {rooms.length > 0 && (
          <div className="flex items-center justify-center mt-4">
            <div className="lg:w-full sm:w-full bg-black bg-opacity-40 p-8 rounded shadow-lg overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4 text-white">Room Allocation Details</h2>
              <table className="w-full border-collapse border border-white text-white">
                <thead>
                  <tr>
                    <th className="border border-white p-2">Venue No</th>
                    <th className="border border-white p-2">3rd Sem Students</th>
                    <th className="border border-white p-2">5th Sem Students</th>
                    <th className="border border-white p-2">Question Paper Count (3rd Sem)</th>
                    <th className="border border-white p-2">Question Paper Count (5th Sem)</th>
                    <th className="border border-white p-2">Faculty Names</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.roomNo}>
                      <td className="border border-white p-2">{room.roomNo}</td>
                      <td className="border border-white p-2">{`${room.thirdSemStudents.startRollNo} - ${room.thirdSemStudents.endRollNo}`}</td>
                      <td className="border border-white p-2">{`${room.fifthSemStudents.startRollNo} - ${room.fifthSemStudents.endRollNo}`}</td>
                      <td className="border border-white p-2">{room.questionPaperCountThirdSem}</td>
                      <td className="border border-white p-2">{room.questionPaperCountFifthSem}</td>
                      <td className="border border-white p-2">{room.facultyNames.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
