import React from "react";
import iconType from "../assets/icons/iconsTipe";
const IconsType = ({ types }) => {
  // console.log(types);
  return (
    <div>
      {types?.map((type) => (
        <span className="type">
          <span>{type.type.name}</span>
          <img src={iconType[type.type.name]} alt="" />
        </span>
      ))}
    </div>
  );
};

export default IconsType;
