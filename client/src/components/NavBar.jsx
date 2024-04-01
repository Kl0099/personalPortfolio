import React, { useEffect, useState } from "react";
import {
  AiFillCloseSquare,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { RxCross1, RxMoon, RxSun } from "react-icons/rx";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const links = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "#about",
    },
    {
      name: "WORK",
      path: "#work",
    },
    {
      name: "SKILLS",
      path: "#skills",
    },
    {
      name: "CONTACT",
      path: "#contact",
    },
  ];
  const setDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark");
      setIsDarkMode(false);
      return;
    } else {
      document.body.classList.toggle("dark");
      setIsDarkMode(true);
    }
  };
  useEffect(() => {
    document.body.classList.toggle("dark");
    setIsDarkMode(true);
  }, []);

  // gradiant = bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold
  return (
    <div className="max-w-maxContent w-11/12 mx-auto  z-50 sticky top-0">
      <div className="  flex items-center justify-between">
        <div className="color-changing p-3 w-fit  rounded-full drop-shadow-2xl  font-extrabold text-3xl text-richblue-400 dark:text-richblack-200">
          KRU<span className="icon-changing text-richblue-300">NAL</span>
        </div>
        <div className=" hidden sm:flex items-center gap-5 text-pure-greys-400 text-md">
          {links.map((links, index) => (
            <a
              key={`${index}`}
              href={`${links.path}`}
            >
              {links.name}
            </a>
          ))}
        </div>
        <div>
          <button
            className=" sm:block hidden dark:bg-richblack-300"
            onClick={setDarkMode}
            id="darkModeToggle"
          >
            {isDarkMode ? <RxMoon size={32} /> : <RxSun size={32} />}
          </button>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className=" block sm:hidden cursor-pointer p-2 hover:shadow-md rounded-full hover:shadow-lightgrey z-50"
        >
          {menuOpen ? (
            <RxCross1 fontSize={24} />
          ) : (
            <AiOutlineMenu
              className=" dark:text-richblack-5"
              fontSize={24}
            />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="h-[600px] dark:bg-richblue-700 bg-white flex items-start  flex-col rounded-lg  shadow-2xl absolute w-[90%]  z-10 top-[0px] right-[0px] transition-transform duration-1000 ease-linear transform translate-x-1">
          <div className="flex flex-col mt-20">
            {links.map((links, index) => (
              <a
                className=" dark:text-white mx-2 p-2 mb-2"
                key={index}
                href={`${links.path}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {links.name}
              </a>
            ))}
            <div>
              <button
                className=" dark:text-white mx-2 p-2 mb-2"
                onClick={() => document.body.classList.toggle("dark")}
                id="darkModeToggle"
              >
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
