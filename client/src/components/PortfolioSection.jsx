import React, { useEffect, useState } from "react";
import about2 from "../assets/about02.png";
import about3 from "../assets/about03.png";
import about4 from "../assets/about04.png";
import SpanText from "../helpers/SpanText";
import {
  RxEyeClosed,
  RxEyeOpen,
  RxGithubLogo,
  RxPencil1,
} from "react-icons/rx";
const PortfolioSection = () => {
  const projectLinks = [
    {
      name: "Airbnb",
      description: "Airbnb web site using ejs templetes ",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Social Media",
      description:
        "socila media wesite using react | reduxtoolkit | css | nodejs | javascript,etc...",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Blog Application",
      description:
        "Blog Application wesite using react | reduxtoolkit | tailwindcss | nodejs | javascript,etc...",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "StudyNotion",
      description:
        "Study Notionwebsite using react | reduxtoolkit | tailwindcss | nodejs | javascript,etc...",
      githubLink: "",
      liveLink: "",
      category: "FullStack",
    },
    {
      name: "Nike LandingPage",
      description: "Nike Lnadingpage is ui design using react and tailwindcss",
      githubLink: "",
      liveLink: "",
      category: "UI/UX",
    },
    {
      name: "Study Mates",
      description: "study mates is a hackathon Edtech project.",
      githubLink: "",
      liveLink: "",
      category: "Hackathon",
    },
    {
      name: "fresh gueid",
      description: "Fresh gueid is frontend project with react ",
      githubLink: "",
      liveLink: "",
      category: "Hackathon",
    },
    {
      name: "Webefy",
      description: "webefy is ui design using html css and javascript.",
      githubLink: "",
      liveLink: "",
      category: "mini",
    },
  ];
  const links = ["All", "FullStack", "UI/UX", "Hackathon", "mini"];
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
    <div className="mt-20 items-center flex flex-col  ">
      <div className=" h-[0px] sm:h-[10vh]"></div>
      <div className="mx-auto items-center flex flex-col">
        <h1 className=" font-semibold text-4xl md:text-[52px]">
          My Creative <SpanText text={"Portfolio Section"} />
        </h1>
        <p className=" text-left md:text-center text-richblack-400 my-5 w-full md:w-7/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatem repudiandae eos suscipit deserunt, dolores ut quas, est
          maxime, consequatur minus? Ducimus perferendis porro quis ullam, earum
          provident dolorum qui.
        </p>

        <div className=" flex-wrap items-center justify-center flex gap-7 my-10 ">
          {links.map((link, index) => {
            {
              // console.log("link :", link === currnetLink);
            }
            return (
              <div
                className={`  px-3 ${
                  link === currnetLink
                    ? " bg-secondary text-white"
                    : " text-richblack-900 bg-white"
                } p-2 rounded-xl cursor-pointer hover:scale-95 hover:shadow-lg`}
                key={index}
                onClick={() => setCurrentLink(link)}
              >
                {link}
              </div>
            );
          })}
        </div>
        <div className=" justify-center items-start  gap-5 flex flex-wrap max-w-maxContent w-11/12">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" group relative flex flex-col items-center p-3 gap-4 w-[320px] h-[450px] bg-white rounded-lg "
            >
              <img
                alt={project.name}
                src={about3}
                className=" hover:opacity-90 opacity-80  cursor-pointer shadow-xl object-cover w-[300px] h-[270px] rounded-2xl"
              />
              <p className=" z-10 -mt-9 bg-white text-richblue-300 p-2 shadow-lg rounded-lg">
                {project.category}
              </p>
              <div className=" py-5 flex items-center flex-col justify-between ">
                <h1 className=" text-xl font-semibold text-richblue-400">
                  {project.name}
                </h1>
                <p className=" text-center text-richblack-400">
                  {project.description}
                </p>
              </div>
              <div className=" px-5 absolute top-10  pb-2 w-full justify-between flex ">
                <span>
                  <RxPencil1
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </span>
                <span>
                  <RxGithubLogo
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
