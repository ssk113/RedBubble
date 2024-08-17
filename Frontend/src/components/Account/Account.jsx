import React from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import AccountRoutes from "./AccountRoutes";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartFooter from "../Cart/CartFooter";
const Account = () => {
  const navigate = useNavigate();

  // for navigating to home
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className=" my-3 md:my-6 flex flex-col gap-4 px-4 rounded-md">
        <button
          className="w-fit primary-bg-darker-pink text-white px-4 py-2 rounded-md flex justify-center items-center gap-2"
          onClick={navigateToHome}
        >
          <FaArrowLeftLong className=" text-xl" />
          <h1>Home</h1>
        </button>
        <div className=" md:border w-full h-full flex">
          <SideBar />
          <div className="overflow-y-scroll md:h-[45rem] h-full w-full pb-16 md:pb-0">
            <AccountRoutes />
          </div>
        </div>
      </div>
      <CartFooter />
    </>
  );
};

export default Account;
