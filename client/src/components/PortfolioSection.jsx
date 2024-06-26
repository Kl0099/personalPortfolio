import React, { useEffect, useState } from "react";
import about2 from "../assets/about02.png";
import about3 from "../assets/about03.png";
import about4 from "../assets/about04.png";
import SpanText from "../helpers/SpanText";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import {
  RxEyeClosed,
  RxEyeOpen,
  RxGithubLogo,
  RxPencil1,
} from "react-icons/rx";
const PortfolioSection = ({ category, allprojects }) => {
  // const projectLinks = [
  //   {
  //     name: "Airbnb",
  //     description: "Airbnb web site using ejs templetes ",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "FullStack",
  //     imagelink: about3,
  //   },
  //   {
  //     name: "Social Media",
  //     description:
  //       "socila media wesite using react | reduxtoolkit | css | nodejs | javascript,etc...",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "FullStack",
  //     imagelink:
  //       "https://res.cloudinary.com/dkzp8h6xw/image/upload/v1711902654/portfolio/Screenshot_2024-02-28_222223_s5ddkf.png",
  //   },
  //   {
  //     name: "Blog Application",
  //     description:
  //       "Blog Application wesite using react | reduxtoolkit | tailwindcss | nodejs | javascript,etc...",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "FullStack",
  //     imagelink:
  //       "https://res.cloudinary.com/dkzp8h6xw/image/upload/v1711902511/portfolio/Screenshot_19_dntitr.png",
  //   },
  //   {
  //     name: "StudyNotion",
  //     description:
  //       "Study Notionwebsite using react | reduxtoolkit | tailwindcss | nodejs | javascript,etc...",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "FullStack",
  //     imagelink:
  //       "https://res.cloudinary.com/dkzp8h6xw/image/upload/v1711902925/portfolio/Screenshot_2024-03-31_220430_clrdep.png",
  //   },
  //   {
  //     name: "Nike LandingPage",
  //     description: "Nike Lnadingpage is ui design using react and tailwindcss",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "UI/UX",
  //     imagelink:
  //       "https://res.cloudinary.com/dkzp8h6xw/image/upload/v1711902560/portfolio/Screenshot_2024-02-11_112456_k4te81.png",
  //   },
  //   {
  //     name: "Study Mates",
  //     description: "study mates is a hackathon Edtech project.",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "Hackathon",
  //     imagelink: about3,
  //   },
  //   {
  //     name: "fresh gueid",
  //     description: "Fresh gueid is frontend project with react ",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "Hackathon",
  //     imagelink: about3,
  //   },
  //   {
  //     name: "Webefy",
  //     description: "webefy is ui design using html css and javascript.",
  //     githubLink: "",
  //     liveLink: "",
  //     category: "mini",
  //     imagelink: about3,
  //   },
  // ];
  // const links = ["All", "FullStack", "UI/UX", "Hackathon", "mini"];
  const [currnetLink, setCurrentLink] = useState(category[0]);
  const [projects, setProjects] = useState(allprojects);
  useEffect(() => {
    // console.log("currnetLink :", currnetLink);
    // console.log("categories  :", category[0]);
    const newProjects = allprojects.filter(
      (project) => project.projectCategory === currnetLink
    );
    if (currnetLink === "All") {
      newProjects.push(...allprojects);
    }
    setProjects(newProjects);
    // console.log(newProjects);
  }, [currnetLink]);
  // useEffect(() => {
  //   console.log(currnetLink);
  //   // console.log(projects);
  // }, [currnetLink, projects]);

  return (
    <div
      id="work"
      className="mt-20 items-center flex flex-col  "
    >
      <div className=" h-[0px] sm:h-[10vh]"></div>
      <div className="mx-auto items-center flex flex-col">
        <motion.h1 className="dark:text-richblack-100 pb-10 font-semibold text-4xl  lg:text-[52px]">
          My Creative{" "}
          <SpanText
            dark={"dark:text-richblack-400"}
            text={"Portfolio Section"}
          />
        </motion.h1>
        <p className=" text-left md:text-center text-richblack-400 my-5 w-[95%] md:w-7/12">
          This is my portfolio section where I showcase my full-stack projects,
          mini projects, and various UI/UX designs. Each piece represents my
          passion for crafting engaging and innovative solutions across the
          digital landscape. Explore my work to witness the fusion of creativity
          and technical expertise.
        </p>

        <div className=" flex-wrap items-center justify-center flex gap-7 my-10 ">
          {category?.map((link, index) => {
            {
              // console.log("link :", link === currnetLink);
            }
            return (
              <div
                className={`  px-3 ${
                  link === currnetLink
                    ? " bg-secondary text-white"
                    : " dark:bg-richblack-300 dark:text-richblue-900 text-richblack-900 bg-white"
                } p-2 rounded-xl cursor-pointer hover:scale-95 hover:shadow-lg`}
                key={index}
                onClick={() => setCurrentLink(link)}
              >
                {link}
              </div>
            );
          })}
        </div>
        <div className=" justify-center  gap-5   items-start xl:gap-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-maxContent md:w-11/12">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" dark:bg-richblue-900 group relative flex flex-col items-center p-3 gap-4 w-[280px] sm:w-[320px] h-[450px] bg-white rounded-lg "
            >
              <a
                href={`${project.livelink}`}
                className=" cursor-pointer "
              >
                <img
                  alt={project.name}
                  src={project.thumbnail}
                  className=" hover:opacity-20 opacity-80  cursor-pointer shadow-xl object-cover w-[270px] sm:w-[300px] h-[270px] rounded-2xl"
                  loading="lazy"
                />
              </a>
              <p className=" dark:bg-richblue-900 dark:shadow-none dark:text-lightgrey z-10 -mt-9 bg-white text-richblue-300 p-2 shadow-lg rounded-lg">
                {project.projectCategory}
              </p>
              <div className=" py-5 flex items-center flex-col justify-between ">
                <h1 className=" dark:text-white text-xl font-semibold text-richblue-400">
                  {project.name}
                </h1>
                <p className=" dark:text-richblack-500 text-center text-richblack-400">
                  {project.description}
                </p>
              </div>
              <div className=" px-5 absolute top-10  pb-2 w-full justify-between flex ">
                <a href={`${project.livelink}`}>
                  <RxPencil1
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </a>
                <a href={`${project.githublink}`}>
                  <RxGithubLogo
                    className=" cursor-pointer hover:scale-110"
                    fontSize={24}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
