import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const ContactUs = () => {
  return (
    <div className="  items-center h-[90vh] w-11/12">
      <div className=" h-[20vh]"></div>
      <p className=" text-[48px] font-inter font-semibold text-center">
        Chat With Me
      </p>
      <div className=" flex ">
        <form className=" border w-[90%]  items-center flex flex-col gap-7">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className=" rounded-lg border-none shadow-lg p-2 w-[60%]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="rounded-lg border-none shadow-lg p-2 w-[60%]"
          />
          <textarea
            className=" rounded-lg border-none p-2 shadow-lg w-[60%] min-h-[150px] "
            placeholder="Your message"
          ></textarea>
        </form>
        <div className=" border items-center w-[40%] my-5 p-4 justify-between">
          <p className=" text-center text-3xl ">Social Media Links</p>
          <div className="flex border text-4xl gap-10 items-center">
            <p>
              <RxGithubLogo />{" "}
            </p>
            <p>
              <RxLinkedinLogo />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
