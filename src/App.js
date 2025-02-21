import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import TutorList from "./pages/TutorList";
import TeacherProfile from "./pages/TeachersProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/TutorList" element={<TutorList />} />
        <Route path="/TutorProfile" element={<TeacherProfile />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
