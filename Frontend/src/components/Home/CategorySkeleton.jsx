import Carousel from "./Carousel";
import Skeleton from "react-loading-skeleton";

const CategorySkeleton = () => {
  return (
    <div className="mt-5 px-5 md:px-0">
      <div>
        <Skeleton className="w-[7rem]" />
        <div className=" flex flex-col gap-4">
          <Carousel>
            <div className=" flex items-center gap-4">
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
              <div
                className=" grid  w-[10rem] md:w-[12rem] h-[14rem] shadow-md border px-4 py-2 gap-3 rounded-md bg-white"
                style={{ gridTemplateRows: "2fr 1fr" }}
              >
                <Skeleton className="w-full h-full" />
                <h1>
                  <Skeleton count={2} />
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
