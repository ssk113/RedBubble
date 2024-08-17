import React from "react";

const Wrapper = (props) => {
  return (
    <div className=" min-[1400px]:w-[1400px] w-full m-auto md:px-10 px-2  ">
      {props.children}
    </div>
  );
};

export default Wrapper;
