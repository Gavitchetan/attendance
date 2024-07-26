"use client";
// import Layout from '../components/Layout';
import { useState } from "react";

const Home = () => {
  const [attendance, setAttendance] = useState("");

  const handleAttendance = () => {
    // Implement attendance marking logic
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mark Attendance</h2>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Your name"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white p-2 rounded"
        onClick={handleAttendance}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
