import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { logOutAction } from "../../store/actions/authActions";

const Profile = () => {
  const { userDetails } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandeler = () => {
    dispatch(logOutAction());
    navigate("/");
  };

  return (
    <>
      <div className=" bg-gray-100 py-2 px-5 rounded-md font-poppins md:hidden">
        <div
          className=" flex items-center gap-2 text-xl"
          onClick={() => {
            navigate("/account");
          }}
        >
          <IoIosArrowBack />
          <h1>Profile</h1>
        </div>
      </div>
      <div className=" p-4 font-poppins flex flex-col gap-6">
        <div className="text-2xl">
          <h1 className="">Hi,</h1>
          <h1>{userDetails.name}</h1>
        </div>
        <div className=" mt-6 ">
          <div className=" text-xl flex flex-col gap-2">
            <div className=" text-xl flex flex-col gap-2">
              <label>Name</label>
              <input
                disabled
                type="text"
                className=" bg-gray-100 p-2 rounded-md"
                value={userDetails.name}
              />
            </div>
            <div className=" text-xl flex flex-col gap-2">
              <label>Email</label>
              <input
                disabled
                type="text"
                className=" bg-gray-100 p-2 rounded-md "
                value={userDetails.email}
              />
            </div>
          </div>
          <div className=" flex gap-2 justify-center items-center mt-5">
            <button className=" bg-gray-100 w-full p-2 flex justify-center items-center gap-4 text-xl">
              <p>Edit</p>
              <FaRegEdit />
            </button>
            <button
              className=" bg-gray-100 w-full p-2 flex justify-center items-center gap-4 text-xl"
              onClick={logOutHandeler}
            >
              <p>Log Out</p>
              <LuLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
