import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import Layout from "../components/Layout";

const TeacherProfile = () => {
  const [showMoreSubjects, setShowMoreSubjects] = useState(false);

  const subjects = [
    "Mathematics",
    "Biology",
    "Economics",
    "Hindi",
    "Chemistry",
    "English",
    "IT",
    "History",
    "Physics",
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
        {/* Tutor Info */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
            <span className="text-purple-800 font-bold text-lg">M</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Mukund Markad</h2>
            <p className="text-gray-600 text-sm">BTech Mechanical</p>
            <p className="text-gray-500 text-xs">10 Sessions completed</p>
            <p className="text-gray-500 text-xs">Chakan, Pune</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400" />
          <span className="ml-1 text-gray-700 font-semibold">4.5</span>
        </div>

        {/* About Me */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
            <span className="text-purple-500 cursor-pointer"> Show More</span>
          </p>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Availability</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 mt-2 text-sm">
              <thead>
                <tr className="bg-purple-100 text-gray-700">
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">M</th>
                  <th className="p-2 border">T</th>
                  <th className="p-2 border">W</th>
                  <th className="p-2 border">T</th>
                  <th className="p-2 border">F</th>
                  <th className="p-2 border">S</th>
                </tr>
              </thead>
              <tbody>
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <tr key={time} className="text-center">
                    <td className="p-2 border">{time}</td>
                    {Array(6)
                      .fill(true)
                      .map((_, i) => (
                        <td key={i} className="p-2 border">
                          {Math.random() > 0.5 ? "✅" : "❌"}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-4 bg-purple-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Class & Subjects</h3>
          <div className="flex space-x-4 mb-2">
            <span className="bg-white text-purple-600 px-3 py-1 rounded-md text-sm cursor-pointer">
              Class X
            </span>
            <span className="bg-white text-purple-600 px-3 py-1 rounded-md text-sm cursor-pointer">
              Class XI
            </span>
            <span className="bg-white text-purple-600 px-3 py-1 rounded-md text-sm cursor-pointer">
              Class XII
            </span>
          </div>

          <div>
            {subjects
              .slice(0, showMoreSubjects ? subjects.length : 5)
              .map((subject, index) => (
                <span
                  key={index}
                  className="inline-block bg-white text-gray-600 px-3 py-1 rounded-md text-xs mr-2 mb-2"
                >
                  {subject}
                </span>
              ))}
            <span
              className="text-purple-500 text-sm cursor-pointer block mt-2"
              onClick={() => setShowMoreSubjects(!showMoreSubjects)}
            >
              {showMoreSubjects ? "Show Less" : "Show More"}
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <div className="mt-2 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold">Rushikesh M.</h4>
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-gray-700">5.0</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              <span className="text-purple-500 cursor-pointer"> Show More</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherProfile;
