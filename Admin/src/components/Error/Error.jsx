import React from "react";
import { TbFaceIdError } from "react-icons/tb";
const Error = ({ message, height }) => {
  return (
    <div
      className={`flex justify-center items-center w-full ${
        height ? `${height} py-28` : "h-[calc(100vh-5rem)]"
      } font-poppins text-2xl`}
    >
      <div className=" flex flex-col justify-center items-center gap-4 ">
        <h1>{message}</h1>
        <TbFaceIdError className="text-5xl font-light" />
      </div>
    </div>
  );
};

export default Error;
