import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OrdersSkeleton = () => {
  return (
    <div className=" p-4 flex flex-col gap-4  w-full">
      <Skeleton className=" w-full h-[8rem]" />
      <Skeleton className=" w-full h-[8rem]" />
      <Skeleton className=" w-full h-[8rem]" />
    </div>
  );
};

export default OrdersSkeleton;
