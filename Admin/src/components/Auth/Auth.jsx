import toast from "react-hot-toast";
import { RiBubbleChartFill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLoginAction } from "../../store/actions/authActions";
import { RiLoader3Fill } from "react-icons/ri";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminLoginHandeler = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error("Some fields are blank");
    }
    setBtnLoader(true);
    const submitedData = {
      email: email.trim(),
      password: password.trim(),
    };
    dispatch(adminLoginAction(submitedData, navigate, setBtnLoader));
  };

  return (
    <form
      className=" font-poppins w-screen h-screen bg-white"
      onSubmit={adminLoginHandeler}
    >
      <div className="flex items-center justify-start gap-4 cursor-pointer">
        <h1 className=" text-4xl pl-20 py-8 mt-10 font-semibold  ">
          RedBubble
        </h1>
        <RiBubbleChartFill className="text-4xl primary-gradient-color" />
      </div>
      <div className=" m-auto  mt-20 lg:w-[70rem] w-full">
        <div className=" p-7 flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">Admin Login</h1>

          <div className="mt-7 flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="email" className="text-xl">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="Enter Admin E-mail..."
                className="bg-[#e0e0e0] p-3 rounded-md"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </div>

            <div className=" flex flex-col gap-1">
              <label htmlFor="password" className="text-xl">
                Admin Password
              </label>
              <input
                type="password"
                placeholder="Enter Admin Password..."
                className={`bg-[#e0e0e0] p-3 rounded-md `}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
            </div>
          </div>

          <div className=" mt-5">
            <button
              type="submit"
              className="py-2 px-8 bg-[#1877f2] font-semibold text-white rounded-md flex justify-center items-center"
            >
              {btnLoader ? (
                <RiLoader3Fill className="text-2xl animate-spin" />
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Auth;
