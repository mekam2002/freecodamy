import React from "react";
import useGetColors from "../hook/useGetColors";
import { SidebarRoutes } from "../routes/route";
import SideBarItem from "./SideBarItem";
import {
  Box,
  CssBaseline,
  Typography,
  IconButton,
  List,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import CustomTopBar from "./CustomTopBar";

interface Props {
  open: boolean;
  handleDrawer: () => void;
}

const drawerWidth = 240;

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
export default function MainDrawer({ open, handleDrawer }: Props) {
  const colors = useGetColors();
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CustomTopBar /> */}
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
            {SidebarRoutes?.[0]?.children?.map((el: any, index: number) => (
              <SideBarItem key={index} open={open} item={el} />
            ))}
          </Stack>
        </List>
      </Drawer>
    </Box>
  );
}
