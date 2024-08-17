import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/home");
  };

  return (
    <div className=" w-full h-[calc(100vh-6rem)] flex justify-center items-center font-poppins">
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <div className=" w-[4rem] h-[4rem]">
          <img
            src="https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70"
            className=" w-full h-full object-contain"
          />
        </div>
        <h1>Your Cart is Empty</h1>

        <button
          className=" border border-red-400 bg-white py-2 px-3 rounded-md"
          onClick={goToProducts}
        >
          Browse Products
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
