import { MdEmail } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Support = () => {
  const navigate = useNavigate();
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
          <h1>Support</h1>
        </div>
      </div>
      <div className="py-4 px-6 font-poppins flex flex-col gap-4">
        <h1 className=" text-2xl">Contact Us </h1>
        <div className="flex gap-4 items-center">
          <MdEmail className=" text-4xl" />
          <div className=" flex flex-col">
            <h1>Email</h1>
            <h1>support@redbubble.com</h1>
          </div>
        </div>
        <div className=" flex gap-4 items-center">
          <MdChat className=" text-4xl" />
          <h1>Chat With Us</h1>
        </div>
      </div>
    </>
  );
};

export default Support;
