import { useRef, useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousel = (props) => {
  const carouselContainer = useRef();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const box = carouselContainer.current;

    const handleScroll = () => {
      const atStart = box.scrollLeft === 0;
      const atEnd = box.scrollLeft + box.clientWidth === box.scrollWidth;
      setIsStart(atStart);
      setIsEnd(atEnd);
    };
    box.addEventListener("scroll", handleScroll);
    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickNextArrow = () => {
    const box = carouselContainer.current;
    box.scrollTo({
      left: box.scrollLeft + box.offsetWidth,
      behavior: "smooth",
    });
  };

  const onClickPrevArrow = () => {
    const box = carouselContainer.current;
    box.scrollTo({
      left: box.scrollLeft - box.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className=" relative px-5 md:px-0">
      <div
        className="py-3 flex gap-5 items-center w-full overflow-y-hidden overflow-x-scroll hide-scrollbar "
        ref={carouselContainer}
      >
        <button
          className=" absolute top-[40%] right-0 z-20 bg-white text-pink-600 rounded-full cursor-pointer shadow-xl"
          onClick={onClickNextArrow}
          style={{ display: isEnd ? "none" : "block" }}
        >
          <MdNavigateNext className="text-4xl" />
        </button>
        <button
          className=" absolute top-[40%] left-0 z-20 bg-white text-pink-600 rounded-full cursor-pointer shadow-xl"
          onClick={onClickPrevArrow}
          style={{ display: isStart ? "none" : "block" }}
        >
          <GrFormPrevious className="text-4xl" />
        </button>

        {props.children}
      </div>
    </div>
  );
};

export default Carousel;
