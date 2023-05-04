import React from "react";
import Spotify from "./Spotify";
import Project from "./Project";
import { DataProject } from "./DataProject";

const Content = () => {
  return (
    <>
      <div className="featured-content text-center">
        <Spotify />
        <h1 className="text-gray-600 font-semibold my-5">Featured Projects</h1>
        <div className="contents">
          <div className="mt-5 lg:px-80 xl:px-[32rem] projects grid grid-cols-1 lg:grid-cols-2 gap-2">
            {DataProject.map((project) => (
              <Project
                title={project.title}
                img={project.img}
                link={project.link}
                para={project.para}
              />
            ))}
          </div>
          <h1 className="text-gray-600 font-semibold my-5">
            Many More Loading...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Content;
