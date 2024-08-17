import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material";
import AddAddressForm from "./AddAddressForm";

const AddAddressModal = ({ showModal }) => {
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
      (isMediumScreen && "70%") ||
      (isLargeScreen && "60%") ||
      (moreThanlg && "50%"),
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    zIndex: 30,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            className=" primary-bg-darker-pink px-2 py-2 cursor-pointer rounded-md absolute top-0 right-0"
            onClick={() => {
              showModal(false);
            }}
          >
            <RxCross2 className="text-2xl text-white " />
          </button>
          <h1 className=" text-center p-4 text-xl font-popins">
            Location Information
          </h1>
          <div>
            <AddAddressForm showModal={showModal} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddAddressModal;
