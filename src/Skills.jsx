import React from "react";

const Skills = (props) => {
  return (
    <div className="w-full">
      <img
        className="w-10 lg:w-16 object-center mx-auto"
        src={props.img}
        alt={props.name}
      />
    </div>
  );
};

export default Skills;
