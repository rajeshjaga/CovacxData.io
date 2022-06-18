import React from "react";

const Card = ({ item, error, day }) => {
  return (
    <div className="p-7 bg-card-default drop-shadow-nxl h-fit w-fit mr-2 mt-10 ">
      <h1 className="text-2xl  text-center">{item}</h1>
      <p className="text-center">{day}</p>
    </div>
  );
};

export default Card;
