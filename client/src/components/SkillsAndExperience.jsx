import React from "react";
import SpanText from "../helpers/SpanText";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import mu5 from "../assets/mu5.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import express from "../assets/expressjs.png";
import java from "../assets/java-logo.png";
import bootstrap from "../assets/bootstrap-5-logo-icon.png";
const SkillsAndExperience = () => {
  const skills = [
    {
      name: "java",
      image: java,
    },
    {
      name: "javaScript",
      image: javascript,
    },
    {
      name: "html",
      image: html,
    },
    {
      name: "css",
      image: css,
    },
    {
      name: "Bootstrap",
      image: bootstrap,
    },
    {
      name: "MuI",
      image: mu5,
    },
    {
      name: "Tailwindcss",
      image: css,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "redux/toolkit",
      image: redux,
    },
    {
      name: "Nodejs",
      image: node,
    },
    {
      name: "Express",
      image: express,
    },
    {
      name: "MongoDB",
      image: node,
    },
  ];
  const Archivements = [
    {
      title: "Runner Up in technosparx",
      description: "runner up in technosparx event in ait college year 2024",
      certificate: "",
      year: "2024",
    },
    {
      title: "Participate in Tic Tac Toe Hackathon",
      description: "participate in hackathone year 2023",
      certificate: "",
      year: "2023",
    },
    {
      title: "participate in ingenious Hackathon 5.0",
      description: "participate in ingenious Hackathon 5.0 year 2024",
      certificate: "",
      year: "2024",
    },
  ];
  return (
    <div className=" w-full sm:w-11/12 max-w-maxContent flex-col flex items-center ">
      <div className=" h-[10vh] md::h-[20vh]"></div>

      <h1 className=" text-4xl md:text-[52px] text-center font-semibold">
        Skills And <SpanText text={"Archivements"} />
      </h1>
      <div className=" gap-[27px] sm:flex-row flex-col flex  my-10 items-center justify-between ">
        <div className=" items-center justify-center flex w-full  flex-wrap gap-6 sm:w-[40%]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" flex flex-col items-center"
            >
              <div className=" bg-lightgrey hover:shadow-2xl hover:scale-105  p-4 shadow-xl shadow-richblack-50 rounded-full">
                <img
                  className="  object-cover"
                  width={40}
                  height={45}
                  src={skill.image}
                  alt={skill.name}
                />
              </div>
              <p className=" text-[15px] mt-5">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="  flex flex-col  p-4">
          {Archivements.map((item, index) => (
            <div
              key={index}
              className="  items-baseline flex-col sm:flex-row m-5 flex gap-2 sm:gap-5 "
            >
              <SpanText
                textsize={"text-[18px]"}
                text={item.year}
              ></SpanText>
              <div className=" w-full text-sm ">
                <p className=" w-full sm:w-[80%] mb-2 text-xl">{item.title}</p>
                <p className=" w-full sm:w-[60%] text-sm text-richblack-300">
                  {item.description}
                </p>
              </div>
              <a
                className=" text-secondary  cursor-pointer underline"
                href={item.certificate}
              >
                Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
