import Skeleton from "react-loading-skeleton";

const ProductsSkeleton = () => {
  return (
    <div
      className="w-[13rem] h-[20rem] grid shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
      style={{ gridTemplateRows: "2fr 1fr" }}
    >
      <Skeleton className="w-full h-full" />
      <h1>
        <Skeleton count={3} />
      </h1>
    </div>
  );
};

export default ProductsSkeleton;
