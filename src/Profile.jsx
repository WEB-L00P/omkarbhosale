import React from "react";
import logo from "./assets/profile.jpg";
import Info from "./Info";
import Content from "./Content";
import Footer from "./Footer";
import Skills from "./Skills";
import { DataSkill } from "./DataSkill";
import Resume from "/data/resume.pdf";

const Profile = () => {
  return (
    <>
      <div className="bg-white absolute -mt-20 w-full rounded-lg py-5 xl:-mt-96 lg:-mt-64 md:-mt-52 2xl:-mt-[50rem] 2xl:rounded-2xl">
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src={logo}
          alt="profile"
        />
        <Info />
        <div className="btns flex justify-center gap-5 my-4">
          <button className="bg-blue-600 hover:bg-blue-400 transition-colors duration-300 px-3 py-1 rounded-md text-white font-bold text-xl">
            <a href="https://paytm.me/lA-AY3F">Hire Me</a>
          </button>
          <button className="bg-blue-600 hover:bg-blue-400 transition-colors duration-300 px-3 py-1 rounded-md text-white font-bold text-xl">
            <a href={Resume} download>
              Resume
            </a>
          </button>
        </div>
        <h1 className="text-center text-gray-600 my-5 text-lg font-bold">
          Skills
        </h1>

        <div className="grid grid-cols-3 gap-3 px-16 md:px-32 md:grid-cols-4 lg:grid-cols-6 lg:gap-0 xl:px-56 2xl:px-96">
          {DataSkill.map((skill) => (
            <Skills img={skill.img} name={skill.name} />
          ))}
        </div>
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
