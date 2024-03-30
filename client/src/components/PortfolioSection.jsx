import React, { useEffect, useState } from "react";
import about2 from "../assets/about02.png";
import SpanText from "../helpers/SpanText";
const PortfolioSection = () => {
  const projectLinks = [
    {
      name: "Airbnb",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Social Media",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Blog Application",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "StudyNotion",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Nike LandingPage",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "UI/UX",
    },
    {
      name: "Study Mates",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "Hackathon",
    },
    {
      name: "fresh gueid",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "Hackathon",
    },
    {
      name: "Webefy",
      description: "",
      githubLink: "",
      liveLink: "",
      category: "mini",
    },
  ];
  const links = ["FullStack", "UI/UX", "Hackathon", "mini", "All"];
  const [currnetLink, setCurrentLink] = useState(links[0]);
  const [projects, setProjects] = useState(projectLinks);
  useEffect(() => {
    const newProjects = projectLinks.filter(
      (project) => project.category == currnetLink
    );
    if (currnetLink === "All") {
      newProjects.push(...projectLinks);
    }
    setProjects(newProjects);
    // console.log(newProjects);
  }, [currnetLink]);
  // useEffect(() => {
  //   console.log(currnetLink);
  //   // console.log(projects);
  // }, [currnetLink, projects]);

  return (
    <div className="mt-20 items-center flex flex-col  h-[80vh]">
      <div className=" h-[0px] sm:h-[10vh]"></div>
      <div className="mx-auto items-center flex flex-col">
        <h1 className=" text-[48px]">
          My Creative <SpanText text={"Portfolio Section"} />
        </h1>
        <div className=" flex gap-7 my-10 ">
          {links.map((link, index) => (
            <div
              className={`bg-white px-3 ${
                link === currnetLink ? " bg-secondary text-white " : ""
              } p-2 rounded-xl cursor-pointer hover:scale-95 hover:shadow-lg`}
              key={index}
              onClick={() => setCurrentLink(link)}
            >
              {link}
            </div>
          ))}
        </div>
        <div className=" items-center justify-center gap-5 flex flex-wrap max-w-maxContent w-11/12">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex flex-col items-start gap-4 w-[300px] "
            >
              <img
                alt={project.name}
                src={about2}
                className=" shadow-xl object-cover w-[300px] h-[270px] rounded-2xl"
              />
              <h1 className=" text-xl font-semibold text-richblue-400">
                {project.name}
              </h1>
              <p className=" text-richblack-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
