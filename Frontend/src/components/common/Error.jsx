import React from "react";
import { TbFaceIdError } from "react-icons/tb";
const Error = ({ component }) => {
  return (
    <div className=" h-[calc(100vh-6rem)] w-full flex justify-center items-center">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h1 className=" font-poppins text-2xl">
          Error while fething {component}
        </h1>
        <TbFaceIdError className="text-5xl" />
      </div>
    </div>
  );
};

export default Error;
