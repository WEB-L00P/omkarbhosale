import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="mx-auto">
        <div className="my-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 sm:mx-2 text-left hover:shadow-xl transition-all duration-300">
          <a href={props.link}>
            <img className="rounded-t-lg" src={props.img} alt={props.title} />
          </a>
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {props.para}
            </p>
            <a
              href={props.link}
              className="inline-flex py-2 px-3 text-sm  justify-center font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
            >
              VIEW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
