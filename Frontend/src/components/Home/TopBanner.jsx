import banners from "../../assets/constants/images";
import useMediaQuery from "@mui/material/useMediaQuery";

const TopBanner = () => {
  const isMdScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className="w-full h-full md:w-full md:h-full my-4">
      {isMdScreen ? (
        <img
          src={banners.topMdBanner}
          className="w-full h-full object-cover mt-2 px-5 md:px-0"
        />
      ) : (
        <img
          src={banners.topSmBanner}
          className="w-full h-full object-cover mt-2 px-5 md:px-0"
        />
      )}
    </div>
  );
};

export default TopBanner;
