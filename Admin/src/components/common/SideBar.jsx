import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { BiLogoRedbubble } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { sideBarPaths } from "../../constants/pathConstants";
import { NavLink } from "react-router-dom";
import {
  setSideBarOpen,
  setSideBarClose,
} from "../../store/reducers/sidebarSlice";

const drawerWidth = "18rem";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = () => {
  const dispacth = useDispatch();
  const { open } = useSelector((state) => state.sideBarSlice);

  // on closing the sidebar
  const closeSidebarHandeler = () => {
    dispacth(setSideBarClose());
  };

  // on opening the sidebar
  const openSidebarHandeler = () => {
    dispacth(setSideBarOpen());
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar open={open}></AppBar>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              overflow: "hidden",
              top: "0",
              height: "4rem",
            },
          }}
        >
          <List>
            <div
              className={`flex justify-start items-center h-12 gap-3 px-5 text-2xl bg-white`}
            >
              {open ? (
                <button onClick={closeSidebarHandeler}>
                  <RxCrossCircled className="cursor-pointer text-3xl" />
                </button>
              ) : (
                <button onClick={openSidebarHandeler}>
                  <GiHamburgerMenu className="cursor-pointer text-3xl" />
                </button>
              )}
              {open && (
                <div className="flex items-center font-poppins justify-center gap-1 cursor-pointer">
                  <h1 className=" text-2xl">Admin | </h1>
                  <BiLogoRedbubble className="text-pink-500 text-5xl" />
                </div>
              )}
            </div>
          </List>
        </Drawer>

        <div className={`md:flex ${!open && "hidden"} `}>
          <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
              sx: {
                overflow: "hidden",
                top: "4rem",
              },
            }}
          >
            <Divider />
            <List sx={{ overflowY: "auto" }}>
              <div className={`flex flex-col gap-2 mt-2`}>
                {sideBarPaths.map((item, index) => {
                  return (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={`flex gap-3 px-5 py-2 text-xl font-poppins hover:bg-gray-100  rounded-r-[5rem] cursor-pointer ${
                        open ? "mr-3" : "mr-1"
                      }`}
                    >
                      <div className="2xl">
                        {React.createElement(item.icon, {
                          className: "text-3xl",
                        })}
                      </div>
                      {open && <h1>{item.text}</h1>}
                    </NavLink>
                  );
                })}
              </div>
            </List>
          </Drawer>
        </div>
      </Box>
    </>
  );
};

export default SideBar;
