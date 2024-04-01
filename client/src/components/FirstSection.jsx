import React from "react";
import SpanText from "../helpers/SpanText";
import about2 from "../assets/about02.png";
import about3 from "../assets/about03.png";
import about4 from "../assets/about04.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
const FirstSection = () => {
  const cards = [
    {
      name: "Web Designer",
      image: about2,
      description:
        "i am a web designer with a passion for creating beautiful and functional web applications",
    },
    {
      name: "frontend Developer",
      image: about3,
      description:
        "i am a Frontend Developer with a passion for creating beautiful and functional web applications",
    },
    {
      name: "Mernstack Developer",
      image: about4,
      description:
        "i am a Mernstack Developer with a passion for creating beautiful and functional web applications",
    },
  ];
  return (
    <div
      id="about"
      className="flex flex-col items-center w-11/12 mx-auto max-w-maxContent  justify-center "
    >
      <div className=" h-[10vh] sm:h-[20vh]"></div>
      <div className=" mb-10 font-semibold text-center text-4xl lg:text-[52px] capitalize ">
        <motion.p className=" dark:text-richblue-100 mb-5">
          {" "}
          I Know That <SpanText text={"Good Design"} />{" "}
        </motion.p>
        <motion.p className=" dark:text-richblue-100">
          means <SpanText text={"Good Business"} />
        </motion.p>
      </div>
      <motion.div className=" h-[5vh] md:h-[10vh]"></motion.div>
      <div className="  flex-wrap mb-10 flex gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className=" flex flex-col items-start gap-4 w-[300px] "
          >
            <motion.img
              alt={card.name}
              src={card.image}
              className=" shadow-xl object-cover w-[300px] h-[270px] rounded-2xl"
            />
            <motion.h1 className=" dark:text-richblack-50 text-xl font-semibold text-richblue-400">
              {card.name}
            </motion.h1>
            <motion.p className=" dark:text-richblue-100 text-base text-richblack-600">
              {card.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
