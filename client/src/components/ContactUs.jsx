import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode, SiMailchimp, SiMaildotcom } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { CiMail, CiPhone } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";
const ContactUs = () => {
  const langtitude = 23.0080312;
  const longitude = 72.5823307;
  const socialMediaLinks = [
    {
      name: "Github",
      logo: RxGithubLogo,
      color: "black",
      classname: "",
      link: "https://github.com/Kl0099",
    },
    {
      name: "Linkedin",
      logo: RxLinkedinLogo,
      color: "blue",
      classname: "",
      link: "https://www.linkedin.com/in/krunal-lodha-90393a257/",
    },
    {
      name: "Leetcode",
      logo: SiLeetcode,
      color: "black",
      classname: " bg-yellow-50 rounded-full p-1",
      link: "https://leetcode.com/krunal99",
    },
    {
      name: "Geeksforgeeks",
      logo: SiGeeksforgeeks,
      color: "green",
      classname: "https://auth.geeksforgeeks.org/user/krunallhh4i",
    },
  ];
  return (
    <div className="   ">
      <div className=" h-[20vh]"></div>
      <p className=" dark:text-primary text-[48px] mb-10 font-inter font-semibold text-center">
        Chat With Me
      </p>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        viewport={{ once: false, amount: 0.7 }}
        whileInView={"show"}
        className=" flex-col md:flex-row flex items-baseline justify-around"
      >
        <motion.form
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          viewport={{ once: false, amount: 0.7 }}
          whileInView={"show"}
          className=" dark:border-[1px] dark:border-richblack-600 dark:bg-richblack-800 rounded-lg bg-primary shadow-2xl py-6 justify-center md:w-[40%] w-full items-center flex flex-col gap-7"
        >
          <h1 className="mb-4 text-3xl  font-semibold">Contact Us </h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className=" dark:bg-richblack-700 rounded-lg border-none shadow-lg p-2 w-[80%]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="dark:bg-richblack-700 rounded-lg border-none shadow-lg p-2 w-[80%]"
          />
          <textarea
            className="dark:bg-richblack-700 rounded-lg border-none p-2 shadow-lg w-[80%] min-h-[150px] "
            placeholder="Your message"
          ></textarea>
          <button
            className=" dark:border-b-caribbeangreen-25 p-3 bg-caribbeangreen-700 text-white w-[80%] rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </motion.form>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          viewport={{ once: false, amount: 0.7 }}
          whileInView={"show"}
          className="dark:border-[1px] dark:border-richblack-600 dark:bg-richblack-800 dark:text-primary flex flex-col justify-between bg-primary shadow-lg w-full md:w-[40%] my-2 rounded-lg p-6 "
        >
          <div>
            <p className=" text-center text-3xl ">Social Media Links</p>
            <p className="text-xs text-richblue-100 mt-5">
              click on the logo to visit the links
            </p>
            <div className="flex mt-7 text-2xl  md:text-4xl justify-between md:justify-around items-center">
              {socialMediaLinks.map((item, index) => (
                <div
                  key={index}
                  className="  items-center justify-center flex flex-col gap-3"
                >
                  <p className=" w-fit p-2 shadow-xl rounded-full bg-white hover:scale-95 cursor-pointer  hover:shadow-2xl">
                    <a href={item.link}>
                      <item.logo
                        color={item.color}
                        className={item.classname}
                      />
                    </a>
                  </p>
                  <span className=" text-xs md:text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=" mt-10 flex flex-col mb-5">
            <h1 className="mt-10 mb-5  text-center text-3xl">
              Direct Contact me
            </h1>
            <p className=" flex items-center gap-4">
              <span className="p-2 dark:bg-primary shadow-lg rounded-full">
                <CiMail
                  color="black"
                  size={22}
                />
              </span>
              <span className="  text-base md:text-xl text-richblack-500">
                krunallodha1@gmail.com
              </span>
            </p>
            <p className=" mt-4 flex items-center gap-4">
              <span className="dark:bg-primary p-2 shadow-lg rounded-full">
                <FaPhone
                  color="black"
                  size={22}
                />
              </span>
              <span className=" text-base md:text-xl text-richblack-500">
                +91 88663166**
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className=" h-[20vh]"></div>
    </div>
  );
};

export default ContactUs;
