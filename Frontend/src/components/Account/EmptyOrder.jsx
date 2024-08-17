import { ImFilesEmpty } from "react-icons/im";

const EmptyOrder = () => {
  return (
    <div className=" w-full mt-[15rem] flex justify-center items-center font-poppins gap-4 ">
      <h1 className=" text-2xl">No orders placed yet !!</h1>
      <ImFilesEmpty className=" text-4xl" />
    </div>
  );
};

export default EmptyOrder;
