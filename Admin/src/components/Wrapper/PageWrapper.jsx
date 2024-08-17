import React from "react";
import { useSelector } from "react-redux";
const PageWrapper = (props) => {
  const { open } = useSelector((state) => state.sideBarSlice);
  return (
    <div
      className={`${
        open
          ? "md:ml-[18rem] md:w-[calc(100%-18rem)]  "
          : "md:ml-[5rem] md:w-[calc(100%-5rem)]"
      } w-full ml-0 px-5 md:px-7 lg:px-20  min-[2000px]:px-32 transition-all duration-500 ease-in-out`}
    >
      {props.children}
    </div>
  );
};

export default PageWrapper;
