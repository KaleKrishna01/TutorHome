import React from "react";

const TutorCard = ({
  name,
  experience,
  rating,
  location,
  time,
  subject,
  price,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
      <div className="flex">
        <div className="border-2 h-[60px] w-[60px] mr-5">
          <div className="text-4xl mb-2">👤</div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">
            {name} | Experience: {experience}
          </h3>
          <div className="flex">
            <p className="text-yellow-500">⭐ {rating}</p>
            <p className="text-gray-500">📍 {location}</p>
          </div>
          <p className="text-gray-500">⏰ {time}</p>
        </div>
      </div>

      <h4 className="text-gray-800 font-medium mt-2">{subject}</h4>
      <div className="flex justify-between align-middle items-center">
        <p className="text-green-600 mt-1 text-sm">First class {price} only</p>
        <button className="bg-indigo-100 text-indigo-700 mt-3 px-4 py-2 text-sm rounded hover:bg-indigo-200">
          View more plans
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
