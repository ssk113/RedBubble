import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useSelector } from "react-redux";
import { TbFaceIdError } from "react-icons/tb";
import toast from "react-hot-toast";
const AvailOfferModal = ({ showModal, price, setAppliedOffer }) => {
  const { offers } = useSelector((state) => state.offerSlice);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1300,
        xl: 1536,
      },
    },
  });

  // screen breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const moreThanlg = useMediaQuery(theme.breakpoints.up("lg"));

  // modal styles
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:
      (isSmallScreen && "90%") ||
      (isMediumScreen && "60%") ||
      (isLargeScreen && "40%") ||
      (moreThanlg && "40%"),
    height: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    zIndex: 30,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "0px",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  // apply offer handeler to apply offer
  const applyOfferHandeler = (offer) => {
    if (price >= offer.minValue) {
      setAppliedOffer(offer);
      showModal(false);
    } else {
      toast.error(`Minimum order value should be ${offer.minValue}`);
    }
  };

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" sticky top-0">
            <div className=" bg-white w-full top-0">
              <button
                className=" primary-bg-darker-pink px-2 py-2 cursor-pointer rounded-md absolute top-0 right-0"
                onClick={() => {
                  showModal(false);
                }}
              >
                <RxCross2 className="text-2xl text-white " />
              </button>
              <div className=" flex justify-center items-center gap-2 p-4">
                <h1 className=" text-2xl font-popins font-light">
                  Select Offer
                </h1>
                <BiSolidOffer className="text-4xl text-green-500 " />
              </div>
            </div>
          </div>
          <div className=" p-5 font-poppins">
            <div className=" flex flex-col  gap-2">
              {offers.length == 0 ? (
                <div className="flex justify-center items-center gap-2">
                  <div className=" flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-2xl">
                      Sorry can't find best offers for you
                    </h1>
                    <TbFaceIdError className=" text-5xl" />
                  </div>
                </div>
              ) : (
                <>
                  {offers.map((offer) => {
                    return (
                      <div
                        key={offer.id}
                        className=" bg-gray-50 p-4 rounded-md flex  items-center gap-4 cursor-pointer "
                        onClick={() => {
                          applyOfferHandeler(offer);
                        }}
                      >
                        <MdOutlineLocalOffer className=" text-3xl text-green-500" />
                        <div>
                          <h1 className="text-xl">{offer.offerName}</h1>
                          <p>Min Order Value : {offer.minValue}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AvailOfferModal;
