import * as React from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import useMedia from "../hook/useMedia";
import MainAppBar from "./MainAppBar";
import MainDrawer from "./MainDrawer";
import useGetColors from "../hook/useGetColors";
import LoginModal from "../pages/auth/LoginModal";
import AppInput from "../components/AppInput";
import { capitalizeFirstLetter, getName } from "../utils/strings";

export default function MainLayout() {
  const { isPhone } = useMedia();

  const [open, setOpen] = React.useState(false);

  const [openModal, setOpenModal] = React.useState(false);

  const modalHandler = () => setOpenModal((prev) => !prev);

  const colors = useGetColors();

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const location = useLocation();
  const name = getName(location.pathname);
  return (
    <Box
      sx={{
        overflow: "scroll",
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      {isPhone ? (
        <MainAppBar onClick={() => modalHandler()} />
      ) : (
        <MainDrawer open={open} handleDrawer={handleDrawer} />
      )}

      <Box
        sx={{
          p: 3,
          px: 6,
          width: "100%",
          height: "100%",
          overflow: "scroll",
          mt: isPhone ? 7 : 0,
          bgcolor: "rgba(217, 217, 217, 0.50)",
        }}
      >
        <LoginModal open={openModal} onClose={modalHandler} />
        {isPhone ? null : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>{capitalizeFirstLetter(name)}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                flexDirection: "row",
              }}
            >
              <AppInput
                inputStyle={{ backgroundColor: "white" }}
                containerStyle={{
                  borderRadius: "10px",
                  width: "20%",
                  mt: 1,
                  mr: 2,
                }}
              />
              <IconButton onClick={modalHandler}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Box>
          </Box>
        )}

        <Outlet />
      </Box>
    </Box>
  );
}
