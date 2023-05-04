import React from "react";

const Footer = () => {
  return (
    <>
      <div className="credits text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500">TechOmkar</span> © 2023
        </h1>
        <h1 className="text-sm font-semibold mt-3">
          Made with <i className="fa-solid fa-heart text-red-500"></i> By{" "}
          <a
            href="https://www.instagram.com/webloop.in"
            className="text-red-600"
          >
            WebLoop
          </a>
        </h1>
      </div>
    </>
  );
};

export default Footer;
