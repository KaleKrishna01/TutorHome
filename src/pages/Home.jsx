import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import heroImage from "../Assets/heroImage.jpg";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

const Home = () => {
  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = useState("");
  const [preferredTime, setPreferredTime] = useState(null);
  const [personName, setPersonName] = useState([]);
  const [contactNumber, setContactNumber] = useState("");

  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 4;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const subjects = [
    "English",
    "Hindi",
    "Sanskrit",
    "Mathematics",
    "History",
    "Geography",
    "Science",
    "General Knowledge",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  const handleFindTutor = () => {
    navigate("/TutorList", {
      state: {
        selectedClass,
        preferredTime,
        personName,
        contactNumber,
      },
    });
  };

  const handleSubjectsChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Layout>
      <div
        className="flex items-center justify-center bg-[#853ff9] px-4 sm:px-8"
        style={{ height: "calc(100vh - 150px)" }}
      >
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
          {/* Left section - Form */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:w-1/2 w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Hello there! Welcome to you.
            </h2>

            <FormControl sx={{ m: 1, width: "100%" }} size="small">
              <label className="mb-1 text-sm font-medium">Class</label>
              <Select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                displayEmpty
                input={<OutlinedInput />}
                className="text-sm"
              >
                <MenuItem value="" disabled>
                  Select Class
                </MenuItem>
                {classes.map((cls) => (
                  <MenuItem key={cls} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </Select>

              <label className="mb-1 text-sm font-medium mt-3">Subjects</label>
              <Select
                multiple
                value={personName}
                onChange={handleSubjectsChange}
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                className="text-sm"
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    <Checkbox checked={personName.includes(subject)} />
                    <ListItemText primary={subject} />
                  </MenuItem>
                ))}
              </Select>

              <label className="mb-1 text-sm font-medium mt-3">
                Preferred Date & Time
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  value={preferredTime}
                  onChange={(newValue) => setPreferredTime(newValue)}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      placeholder="Select Date & Time"
                      fullWidth
                      size="small"
                      className="mt-1"
                    />
                  )}
                />
              </LocalizationProvider>

              <label className="mb-1 text-sm font-medium mt-3">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="Enter your contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="p-2 mb-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </FormControl>

            <button
              onClick={handleFindTutor}
              className="w-full py-2 bg-[#000] text-white text-sm rounded-md hover:bg-purple-700 mt-4"
            >
              Find Your Tutor
            </button>

            <div className="text-center mt-6">
              <p className="text-sm">
                Already registered?{" "}
                <a
                  href="mailto:support@newtonindia.com"
                  className="text-purple-600 hover:underline"
                >
                  Log in.
                </a>
              </p>
            </div>
          </div>

          {/* Right section - Image */}
          <div className="hidden md:block md:w-1/2 bg-purple-600">
            <img
              src={heroImage}
              alt="Login Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
