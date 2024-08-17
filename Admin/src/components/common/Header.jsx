import React from "react";
import { BiLogOut } from "react-icons/bi";
import { RiUser3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logOutAdmin } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAdminLogout = () => {
    dispatch(logOutAdmin());
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="px-5 py-3 w-full flex justify-end z-20 sticky top-0 items-center h-16 font-poppins text-black  bg-white ">
      <div className="flex justify-center items-center gap-4">
        <BiLogOut
          className=" text-4xl cursor-pointer"
          onClick={onAdminLogout}
        />

        <RiUser3Fill className=" text-3xl cursor-pointer" />

        <div className=" flex flex-col justify-center text-black">
          <h1>Admin</h1>
          <h1> Id : 3552542</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
