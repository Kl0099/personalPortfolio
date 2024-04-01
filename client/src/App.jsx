import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FirstSection from "./components/FirstSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsAndExperience from "./components/SkillsAndExperience";
import ContactUs from "./components/ContactUs";
import axios from "axios";
function App() {
  const [category, setCategory] = useState(null);
  const [projects, SetProjects] = useState(null);
  const [responsedata, setresponsedata] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      console.log("Fetching data...");
      const response = await axios.get(
        "http://localhost:4000/api/v1/getAllDetails",
        {
          withCredentials: true,
        }
      );
      if (response) {
        // console.log(response);
        setCategory(response.data.category.map((item) => item.name));
        SetProjects(
          response.data.projects.map((item) => {
            const { _id, __v, updatedAt, createdAt, ...rest } = item;
            return rest;
          })
        );
        setresponsedata(response);
      }
      console.log("bye bye ");
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    if (category) {
      category.unshift("All");
      console.log("All categories", category);
      console.log("all projects : ", projects);
    }
  }, [category, projects]);
  // useEffect(() => {
  //   document.body.classList.toggle("dark");
  // }, []);
  // useEffect(() => {
  //   // console.log("responsedata : ", responsedata);
  //   console.log("categories : ", category);
  //   console.log("Projects : ", projects);
  // }, [responsedata, category, projects]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    category && projects && (
      <div className="  w-full dark:bg-richblack-900 relative text-black">
        <div className=" border-black border-2">
          <div className="dark:bg-richblack-900 bg-lightgrey ">
            <NavBar />
          </div>
          <div className="max-w-maxContent  sm:w-11/12 mx-auto">
            <Hero />
          </div>
          <div className="max-w-maxContent  sm:w-11/12 mx-auto">
            <FirstSection />
          </div>
          <div className="max-w-maxContent  sm:w-11/12 mx-auto">
            <PortfolioSection
              category={category}
              allprojects={projects}
            />
          </div>

          <div className=" w-full  dark:bg-gradient-to-t from-richblack-900 via-blue-600 to-cyan-400">
            <div className="  sm:w-11/12 max-w-maxContent mx-auto">
              <SkillsAndExperience />
            </div>
          </div>
          <div className=" max-w-maxContent sm:w-11/12 mx-auto">
            <ContactUs />
          </div>
        </div>
      </div>
    )
  );
}

export default App;
