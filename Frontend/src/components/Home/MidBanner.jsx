import React from "react";
import banners from "../../assets/constants/images";
import Carousel from "./Carousel";

const MidBanner = () => {
  return (
    <Carousel>
      {banners.carouselBanners.map((item, index) => {
        return (
          <img
            key={index}
            src={item.link}
            className="w-[22rem] h-[12rem] md:w-[25rem] md:h-[10rem] xl:w-[30rem] xl:h-[15rem] 2xl:w-[32rem] 2xl:h-[18rem] cursor-pointer  rounded-xl object-cover "
          />
        );
      })}
    </Carousel>
  );
};

export default MidBanner;
