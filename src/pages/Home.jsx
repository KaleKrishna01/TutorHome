import React, { useState, useEffect } from "react";
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
import ListSubheader from "@mui/material/ListSubheader";

const Home = () => {
  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = useState("");
  const [preferredTime, setPreferredTime] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [contactNumber, setContactNumber] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [extraSubjects, setExtraSubjects] = useState([]);
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

  const ITEM_HEIGHT = 40;
  const ITEM_PADDING_TOP = 4;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 300,
      },
    },
  };

  // Fetch data from API
  const fetchData = async () => {
    console.log("selectedClass", selectedClass);
    try {
      const response = await fetch(
        `https://test.api.myytutor.com/launchPad?classId=${selectedClass}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      setSubjects(data.subjects || []);
      setExtraSubjects(data.extraSubjects || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedClass !== "") {
      fetchData();
    }
  }, [selectedClass]);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleFindTutor = async () => {
    if (!preferredTime) {
      alert("Please select a preferred date and time.");
      return;
    }

    const selectedClassIds =
      selectedClass === "0"
        ? [0]
        : selectedClass === "13"
        ? [13]
        : [parseInt(selectedClass)];
    const selectedExtraSubjectIds = selectedSubjects.map(
      (subject) => subject.id
    );

    const selectedStartDate = preferredTime.toISOString().split("T")[0];
    const selectedEndDate = new Date(
      preferredTime.getTime() + 7 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];

    const selectedStartTime =
      preferredTime.getHours() * 60 + preferredTime.getMinutes();
    const selectedEndTime = selectedStartTime + 120;

    const payload = {
      selectedClassIds,
      selectedExtraSubjectIds,
      selectedStartDate,
      selectedEndDate,
      selectedStartTime,
      selectedEndTime,
      userLatitude,
      userLongitude,
      maxDistanceInKm: 100000,
      limit: 30,
      offset: 0,
    };

    console.log("payload", payload);

    try {
      const response = await fetch("https://test.api.myytutor.com/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      navigate("/TutorList", { state: { tutors: data } });
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  const handleSubjectsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSubjects(typeof value === "string" ? value.split(",") : value);
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
                <MenuItem value="0">Below 1</MenuItem>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((cls) => (
                  <MenuItem key={cls} value={cls.toString()}>
                    Class {cls}
                  </MenuItem>
                ))}
                <MenuItem value="13">Above 12</MenuItem>
              </Select>

              <label className="mb-1 text-sm font-medium mt-3">Subjects</label>
              <Select
                multiple
                value={selectedSubjects}
                onChange={handleSubjectsChange}
                input={<OutlinedInput />}
                renderValue={(selected) =>
                  selected.map((subj) => subj.name).join(", ")
                }
                MenuProps={MenuProps}
                className="text-sm"
              >
                {/* Subjects Category */}
                <ListSubheader>Subjects</ListSubheader>
                {subjects.map((subject) => (
                  <MenuItem key={subject.id} value={subject}>
                    <Checkbox
                      checked={selectedSubjects.some(
                        (s) => s.id === subject.id
                      )}
                    />
                    <ListItemText primary={subject.name} />
                  </MenuItem>
                ))}

                {/* Extra Subjects Category */}
                <ListSubheader>Extra Subjects</ListSubheader>
                {extraSubjects.map((subject) => (
                  <MenuItem key={subject.id} value={subject}>
                    <Checkbox
                      checked={selectedSubjects.some(
                        (s) => s.id === subject.id
                      )}
                    />
                    <ListItemText primary={subject.name} />
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
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select Date & Time"
                      fullWidth
                      size="small"
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
