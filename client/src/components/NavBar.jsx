import React, { useState } from "react";
import {
  AiFillCloseSquare,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  return (
    <div className=" bg-lightgrey z-50  sticky top-0">
      <div className="  flex items-center justify-between">
        <div className=" p-3 w-fit  rounded-full drop-shadow-2xl  font-extrabold text-3xl text-richblue-400">
          KRU<span className=" text-richblue-300">NAL</span>
        </div>
        <div className=" hidden sm:flex items-center gap-5 text-pure-greys-400 text-md">
          {links.map((links, index) => (
            <div
              key={index}
              id={links.path}
            >
              {links.name}
            </div>
          ))}
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className=" block sm:invisible cursor-pointer p-2 hover:shadow-md rounded-full hover:shadow-lightgrey z-50"
        >
          {menuOpen ? (
            <RxCross1 fontSize={24} />
          ) : (
            <AiOutlineMenu fontSize={24} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className=" bg-white flex items-start  flex-col rounded-lg drop-shadow-xl shadow-lightgrey shadow-2xl absolute w-[70%] h-full z-10 top-[0px] right-[0px] transition-transform duration-1000 ease-linear transform translate-x-1">
          <div className=" mt-20">
            {links.map((links, index) => (
              <div
                className=" mx-2 p-2 mb-2"
                key={index}
                id={links.path}
              >
                {links.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
