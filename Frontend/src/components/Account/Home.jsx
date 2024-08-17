import { IoIosArrowForward } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Orders from "./Orders";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../store/actions/authActions";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOutAction());
    navigate("/");
  };

  return (
    <>
      <div className="hidden md:flex">
        <Orders />
      </div>
      <div className=" mt-5 font-poppins block md:hidden">
        <div className=" pt-5 flex flex-col gap-3">
          <NavLink to={"/account/orders"}>
            <div className=" flex justify-between items-center border-b p-4 w-full">
              <div className="flex items-center gap-4">
                <IoBagOutline className=" text-3xl" />
                <h1 className="text-2xl ">Orders</h1>
              </div>
              <IoIosArrowForward className=" text-2xl primary-color-darker-pink" />
            </div>
          </NavLink>
          <NavLink to={"/account/support"}>
            <div className=" flex justify-between items-center border-b p-4 w-full">
              <div className="flex items-center gap-4">
                <IoChatbubblesOutline className=" text-3xl" />
                <h1 className="text-2xl ">Support</h1>
              </div>
              <IoIosArrowForward className=" text-2xl primary-color-darker-pink" />
            </div>
          </NavLink>
          <div className=" flex justify-between items-center border-b p-4 w-full">
            <div className="flex items-center gap-4">
              <SlLocationPin className=" text-3xl" />
              <h1 className="text-2xl ">Addresses</h1>
            </div>
            <IoIosArrowForward className=" text-2xl primary-color-darker-pink" />
          </div>
          <div
            className=" flex justify-between items-center border-b p-4 w-full"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <div className="flex items-center gap-4">
              <AiOutlineShoppingCart className=" text-3xl" />
              <h1 className="text-2xl ">Cart</h1>
            </div>
            <IoIosArrowForward className=" text-2xl primary-color-darker-pink" />
          </div>
          <NavLink to={"/account/profile"}>
            <div className=" flex justify-between items-center border-b p-4 w-full">
              <div className="flex items-center gap-4">
                <VscAccount className=" text-3xl" />
                <h1 className="text-2xl ">Profile</h1>
              </div>
              <IoIosArrowForward className=" text-2xl primary-color-darker-pink" />
            </div>
          </NavLink>
        </div>
        <div className=" mt-8 flex justify-center items-center text-2xl">
          <button
            className=" border px-5 py-1 rounded-md primary-color-darker-pink"
            onClick={logOutUser}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
