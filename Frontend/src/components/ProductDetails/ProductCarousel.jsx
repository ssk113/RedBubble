import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const ProductCarousel = ({ images }) => {
  console.log(images);
  return (
    <>
      <div className="w-full m-auto md:w-[50%] h-fit border shadow-sm rounded-md flex justify-center items-center p-10 bg-white">
        <Swiper
          cssMode={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={Pagination}
          className="mySwiper"
        >
          {images.map((images, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="w-[15rem] h-[20rem]">
                  <img src={images} className="w-full h-full object-contain" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
