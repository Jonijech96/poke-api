import React from "react";
import iconType from "../assets/icons/iconsTipe";
const IconsType = ({ types }) => {
  // console.log(types);
  return (
    <>
      {types?.map((type) => (
        <span key={type.type.name} className={`type type--${type.type.name}`}>
          <img className="type__icon" src={iconType[type.type.name]} alt="" />
          <span>{type.type.name}</span>
        </span>
      ))}
    </>
  );
};

export default IconsType;
