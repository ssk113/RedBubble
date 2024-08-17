import React, { useState } from "react";
import { logInAction, signUpAction } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { LuLoader2 } from "react-icons/lu";
const AuthForm = () => {
  const dispatch = useDispatch();
  const [btnLoader, setBtnLoader] = useState(false);
  const [islogIn, setIsLogIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();

    // for creating a new account
    if (!islogIn) {
      const userDetails = {
        name,
        email,
        password,
      };
      dispatch(signUpAction(userDetails, setBtnLoader));
    } else if (islogIn) {
      const userDetails = {
        email,
        password,
      };
      dispatch(logInAction(userDetails, setBtnLoader));
    }
  };

  // for login

  return (
    <div>
      <form
        className=" px-4 font-poppins flex flex-col justify-center gap-2"
        onSubmit={submitHandeler}
      >
        <h1 className=" text-center text-2xl text-white">
          {`${islogIn ? "Log In" : "Create Account"}`}
        </h1>
        {!islogIn && (
          <div className=" flex flex-col gap-1">
            <label htmlFor="Email" className=" text-lg text-white">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              required
              className="w-full p-2 bg-white rounded-md "
            />
          </div>
        )}
        <div className=" flex flex-col gap-1">
          <label htmlFor="Email" className=" text-lg text-white">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            className="w-full p-2 bg-white rounded-md"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <label htmlFor="Email" className=" text-lg text-white">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            className="w-full p-2 bg-white rounded-md"
          />
        </div>
        {btnLoader ? (
          <button className=" bg-pink-600 text-white mt-2 p-2 rounded-md flex justify-center items-center">
            <LuLoader2 className="animate-spin text-2xl" />
          </button>
        ) : (
          <button className=" bg-pink-600 text-white mt-2 p-2 rounded-md">
            {`${islogIn ? "Log In" : "Create Account"}`}
          </button>
        )}
        <div className=" text-white mt-5 text-base flex flex-col ">
          <h1>{islogIn ? "New User ?" : "Already have an account ?"}</h1>
          <h1
            className=" cursor-pointer hover:text-pink-600 text-xl w-fit"
            onClick={() => {
              setIsLogIn((prev) => !prev);
            }}
          >
            {islogIn ? "Create Account" : "Log In"}
          </h1>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
