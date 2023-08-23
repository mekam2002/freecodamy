import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SideBarItem from "./SideBarItem";
import { Outlet } from "react-router";
import { SidebarRoutes } from "../routes/route";
import { Typography, Stack } from "@mui/material";
import useMedia from "../hook/useMedia";
import useGetColors from "../hook/useGetColors";

const drawerWidth = 340;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  bgcolor: "#006D5B",
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

export default function MainLayout() {
  const [open, setOpen] = React.useState(false);

  const { isPhone } = useMedia();

  const colors = useGetColors();

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{}}>
        <Box
          className="flex-row-between w-100"
          sx={{
            bgcolor: colors.main,
            height: 80,
            borderBottom: "1px solid black",
            pl: 2,
          }}
        >
          {open && (
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              FreeCodamy
            </Typography>
          )}
          <IconButton onClick={handleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        <List sx={{ px: 2, bgcolor: colors.main, height: "100%" }}>
          <Stack spacing={2} mt={2}>
            {SidebarRoutes[0].children.map((el, index) => (
              <SideBarItem key={index} open={open} item={el} />
            ))}
          </Stack>
        </List>
      </Drawer>
      <Box sx={{ p: 3, width: "100%", height: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
