import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import useGetColors from "../hook/useGetColors";
import { AppBar, Box,Typography } from "@mui/material";
import CustomAvatar from "../components/CustomAvatar";

export default function CustomTopBar() {
  const colors = useGetColors();
  return (
    // <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ bgcolor: colors.white, boxShadow: 0,height:100 }}>
        {/* <Toolbar> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>sddd</Typography>
        {/* </Toolbar> */}
      </AppBar>
    // </Box>
  );
}
