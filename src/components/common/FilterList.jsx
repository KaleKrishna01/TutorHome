import React, { useState } from "react";

const FilterList = () => {
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    class: "",
    subject: "",
    time: "",
    location: "",
    experience: 5,
    rating: 4,
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSortByClick = () => {
    setIsSortModalOpen(true);
    console.log("Sort By clicked");
  };

  const handleFilterIconClick = () => {
    setIsFilterModalOpen(true);
    console.log("Filter icon clicked");
  };

  return (
    <div className="bg-white p-2 overflow-x-auto">
      {/* Filter and Sort List */}
      <div className="flex items-center justify-center gap-3 min-w-[500px] md:min-w-0">
        <button
          className="bg-[#949292] text-white px-3 py-1 rounded-full text-sm"
          onClick={handleSortByClick}
        >
          Sort By
        </button>

        <div className="h-5 w-px bg-gray-400"></div>

        <button
          className="flex items-center bg-[#949292] text-white px-3 py-1 rounded-full text-sm"
          onClick={handleFilterIconClick}
        >
          <span className="material-icons text-sm">filter_alt</span>
        </button>

        <div>
          <select
            className="bg-black text-white px-3 py-1 rounded-full text-sm outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Class
            </option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            <option value="class3">Class 3</option>
          </select>
        </div>

        <div>
          <select
            className="bg-black text-white px-3 py-1 rounded-full text-sm outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Subject
            </option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>

        <div>
          <select
            className="bg-black text-white px-3 py-1 rounded-full text-sm outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Location
            </option>
            <option value="ny">New York</option>
            <option value="la">Los Angeles</option>
            <option value="sf">San Francisco</option>
          </select>
        </div>
      </div>

      {/* Sort Modal */}
      {isSortModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p>Sort Modal Content</p>
            <button
              className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
              onClick={() => setIsSortModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-md h-[80%] overflow-y-auto">
            <p className="text-lg font-semibold mb-4">Filter Options</p>
            <div className="flex flex-col gap-3">
              {/* Class Select */}
              <div>
                <label className="block font-medium mb-1 text-sm">Class*</label>
                <select
                  value={filters.class}
                  onChange={(e) => handleChange("class", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  <option value="">Select your Class</option>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                  <option value="class3">Class 3</option>
                </select>
              </div>

              {/* Subject Select */}
              <div>
                <label className="block font-medium mb-1 text-sm">
                  Subject*
                </label>
                <select
                  value={filters.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  <option value="">Select your Subject</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                </select>
              </div>

              {/* Preferred Time Select */}
              <div>
                <label className="block font-medium mb-1 text-sm">
                  Preferred Time
                </label>
                <select
                  value={filters.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  <option value="">Select your Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              {/* Location Select */}
              <div>
                <label className="block font-medium mb-1 text-sm">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  <option value="">Select your Location</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                  <option value="sf">San Francisco</option>
                </select>
              </div>

              {/* Experience Range */}
              <div>
                <label className="block font-medium mb-1 text-sm">
                  Experience:
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={filters.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  className="w-full"
                />
                <p className="text-center mt-2 text-sm">
                  {filters.experience} Years
                </p>
              </div>

              {/* Rating Select */}
              <div>
                <label className="block font-medium mb-1 text-sm">
                  Rating:
                </label>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleChange("rating", star)}
                      className={`text-xl ${
                        star <= filters.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setFilters({
                    class: "",
                    subject: "",
                    time: "",
                    location: "",
                    experience: 5,
                    rating: 4,
                  });
                  setIsFilterModalOpen(false);
                }}
                className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  alert(JSON.stringify(filters));
                  setIsFilterModalOpen(false);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterList;
