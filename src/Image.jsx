import React from "react";
import Background from "./assets/background.png";

const Image = () => {
  return (
    <div>
      <img className="w-full h-fit" src={Background} alt="bg" />
    </div>
  );
};

export default Image;
