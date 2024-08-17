import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-4 mt-5 mb-5">
        <div className="w-full m-auto md:w-[50%] h-fit border shadow-sm rounded-md flex justify-center items-center p-10">
          <div className="w-[15rem] h-[20rem]">
            <Skeleton width={"100%"} height={"100%"} />
          </div>
        </div>
        <div className=" font-semibold flex flex-col w-full gap-4 px-3 pb-5 border-gray-300 border-b">
          <div className=" flex flex-col ">
            <div className="primary-color-darker-pink flex gap-2">
              <Skeleton count={3} />
            </div>
            <h1 className="text-2xl font-semibold">
              <Skeleton count={2} />
            </h1>
          </div>

          <div className=" flex justify-between items-center bg-gray-100 py-2 px-4 rounded-md">
            <div className=" flex flex-col">
              <Skeleton count={3} />
            </div>
            <Skeleton />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className=" w-full md:w-[90%] flex flex-col gap-2 px-5">
          <h1 className=" text-xl font-medium">
            <Skeleton />
          </h1>
          <ul className="text-gray-400 flex flex-col gap-2 list-disc">
            <Skeleton count={6} />
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-3 md:px-10 w-full border-t md:border-none py-2">
          <h1 className="text-2xl">
            <Skeleton />
          </h1>
          <div className=" flex gap-4 items-center justify-start bg-gray-50 rounded-md">
            <Skeleton />
          </div>
          <div className=" flex gap-4 items-center justify-start bg-gray-50 rounded-md">
            <Skeleton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
