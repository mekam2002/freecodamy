import * as React from "react";
import { Box, AppBar } from "@mui/material";
import { Outlet } from "react-router";
import useMedia from "../hook/useMedia";
import MainAppBar from "./MainAppBar";
import MainDrawer from "./MainDrawer";
import useGetColors from "../hook/useGetColors";


export default function MainLayout() {
  const { isPhone } = useMedia();

  const [open, setOpen] = React.useState(false);

  const colors = useGetColors();

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ overflow: "scroll", display: "flex" }}>
      {isPhone ? (
        <MainAppBar />
      ) : (
        <MainDrawer open={open} handleDrawer={handleDrawer} />
      )}

     

      <Box
        sx={{
          p: 3,
          width: "100%",
          height: "100%",
          overflow: "scroll",
          mt: 7,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}