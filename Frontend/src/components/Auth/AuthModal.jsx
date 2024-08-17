import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../../store/reducers/authSlice";

const AuthModal = () => {
  const dispatch = useDispatch();
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
      (moreThanlg && "35%"),
    height: "fit",
    bgcolor: "rgb(60, 0, 107, 1)",
    boxShadow: 24,
    borderRadius: "10px",
    overflowY: "auto",
    border: "none",
    paddingBottom: "20px",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };
  const closeAuthModalHandeler = () => {
    dispatch(closeAuthModal());
  };

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "none" }}
      >
        <Box sx={style}>
          <div className=" flex justify-end items-center sticky bg-transparent rounded-xl top-0">
            <button
              className=" primary-bg-darker-pink px-2 py-2 cursor-pointer rounded-md staicky top-0"
              onClick={closeAuthModalHandeler}
            >
              <RxCross2 className="text-2xl text-white " />
            </button>
          </div>

          <div className="px-4">
            <AuthForm />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;
