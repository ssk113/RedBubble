import Skeleton from "react-loading-skeleton";

const SkeletonCart = () => {
  return (
    <>
      <div className=" mt-10 font-poppins">
        <div className=" text-xl px-2 md:px-0 flex justify-between items-center">
          <Skeleton className=" w-20" />
          <Skeleton className=" w-20" />
        </div>
        <div className="mt-5 flex flex-col md:flex-row items-start gap-5">
          <div className="  w-full md:w-[60%] h-fit  md:max-h-[40rem] rounded-md px-4 py-4 flex flex-col justify-center gap-2 md:overflow-y-scroll shadow-md border  ">
            <div className=" border-b py-4">
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
            </div>
            <div className=" border-b py-4">
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
            </div>
            <div className=" border-b py-4">
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
              <Skeleton className="w-full" />
            </div>
          </div>
          <div className=" w-full md:w-[40%] h-[40rem] rounded-md flex flex-col gap-4">
            <div className=" w-full bg-white flex gap-2 justify-between items-center px-4 py-3 rounded-md shadow-md cursor-pointer border">
              <Skeleton count={2} />
            </div>
            <div className=" w-full bg-white flex flex-col gap-2 px-5 py-4 rounded-md shadow-md border ">
              <Skeleton count={6} />
            </div>

            <div className="w-full bg-white flex flex-col gap-1 py-4 px-2 rounded-md shadow-md border">
              <Skeleton count={6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCart;
