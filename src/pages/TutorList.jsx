import React from "react";
import Layout from "../components/Layout";
import { tutorList } from "../data/tutorList";
import TutorCard from "../components/common/TutorCard";
import FilterList from "../components/common/FilterList";
import { useLocation } from "react-router-dom";

const TutorList = () => {
  const location = useLocation();
  const tutors = location.state?.tutors || [];
  return (
    <Layout>
      <FilterList />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:px-24">
        {tutorList.map((item) => (
          <TutorCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default TutorList;
