import Skeleton from "react-loading-skeleton";
import ProductsSkeleton from "./ProductsSkeleton";
import Carousel from "./Carousel";
const SkeletonContainer = () => {
  return (
    <>
      <div className="mt-10 px-5 md:px-0">
        <div className="flex flex-col gap-7">
          <div>
            <Skeleton className="w-[8rem]" />
            <div className=" flex flex-col gap-4">
              <Carousel>
                <div className=" flex items-center gap-4">
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <Skeleton className="w-[7rem]" />
            <div className=" flex flex-col gap-4">
              <Carousel>
                <div className=" flex items-center gap-4">
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                </div>
              </Carousel>
            </div>
          </div>
          <div>
            <Skeleton className="w-[7rem]" />
            <div className=" flex flex-col gap-4">
              <Carousel>
                <div className=" flex items-center gap-4">
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                  <ProductsSkeleton />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonContainer;
