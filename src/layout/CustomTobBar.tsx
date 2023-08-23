import React, { useMemo } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import useGetColors from "../hook/useGetColors";
import useMedia from "../hook/useMedia";


const drawerWidth =340
const DRAWER_CLOSED_WIDTH = 340




const replaceRouteName = (name: string) => {
  switch (name) {
    case "patients":
      return "patients";

    default:
      return name;
  }
};

const LeftHeader = ({
  pathname,
  routeName,
  color,
  navigate,
}: {
  pathname: string;
  routeName: string;
  color: string;
  navigate?: any;
}) => (
  <Box>
    {routeName === "accueil" ? (
      <Stack direction={"row"} spacing={2} alignItems="center">
        {/* <CustomAvatar avatarStyle={{ width: 45, height: 45 }} /> */}
        <Stack direction={"row"} spacing={1} alignItems="center">
          <Typography color={"black"}>{"welcome"},</Typography>
          <Typography color={"black"} fontWeight={600}>
            John
          </Typography>
        </Stack>
      </Stack>
    ) : (
      <Typography
        color={color}
        fontWeight={"600"}
        fontSize={24}
        className="flex"
      >
        {/* {capitalizeFirstLetter(
            i18n.t(replaceRouteName(routeName?.replace("-", "_")))
          )} */}{" "}
        "replace"
      </Typography>
    )}
  </Box>
);

const useStyles = makeStyles((theme: any) => ({
    appBar: {
      backgroundColor: "#fff",
      boxShadow: "none",
      zIndex: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function CustomTopBar({
  drawerOpen,
  systemLanguage,
  languages,
  hangleChangeLanguage,
  handleDrawerToggle,
}: any) {
//   const classes = useStyles()
  const navigate = useNavigate();
  // const muiTheme = useTheme()
  // const colors = useGetColors()
  const { primary, black } = useGetColors();
  const { pathname } = useLocation();
  const { isTablet } = useMedia();
  // const matches = useMediaQuery(muiTheme.breakpoints.up("xl"))
  // const {isTablet:matches} = useMedia()
  const routeName = useMemo(() => {
    if (pathname?.includes("claims")) {
      return "claims";
    }
    const tab = pathname?.split("/")?.filter((el) => !!el.trim());
    const n = tab?.[tab.length - 1];
    return !isNaN(Number(n)) ? tab[0] : tab?.[tab.length - 1];
  }, [pathname]);

  const getWidth = () => {
    if (drawerOpen && isTablet) {
      return "100%";
    }
    if (drawerOpen && !isTablet) {
      return `calc(100% - ${drawerWidth}px)`;
    }
    if (!drawerOpen && isTablet) {
      return `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`;
    }
    return `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`;
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        // className={classes.appBar}
        sx={{
          marginLeft: drawerWidth,
          width: getWidth(),
        }}
      >
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <LeftHeader
            color={primary}
            routeName={routeName}
            pathname={pathname}
            navigate={navigate}
          />

          <Stack direction="row" spacing={3} alignItems="center">
            {/* <LangSelect /> */}
            <IconButton onClick={() => navigate("/message")}>
              {/* <ChatIcon /> */}
            </IconButton>

            {/* <NotificationPopper /> */}

            <Stack
              direction={"row"}
              spacing={2}
              alignItems="center"
              className="cursor"
              onClick={() => navigate("/profile")}
            >
              {/* <CustomAvatar avatarStyle={{ width: 32, height: 32 }} /> */}
              <Typography color={"black"}>John Flocka</Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
