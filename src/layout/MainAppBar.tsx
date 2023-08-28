import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useGetColors from "../hook/useGetColors";
import { SidebarRoutes } from "../routes/route";
import SideBarItem from "./SideBarItem";
import { Avatar } from "@mui/material";
import LoginModal from "../pages/auth/LoginModal";
import AppInput from "../components/AppInput";

// ... (other imports and code)

interface Props {
  onClick: () => void;
}

const drawerWidth = 240;

export default function MainAppBar({ onClick }: Props) {
  const colors = useGetColors();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ height: "100%", bgcolor: colors.main }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 600,
          mt: 3,
          px: 2,
        }}
      >
        FreeCodamy
      </Typography>
      <List sx={{ px: 2, bgcolor: colors.main, height: "100%" }}>
        <Stack spacing={2} mt={2}>
          {SidebarRoutes?.[0]?.children?.map((el: any, index: number) => (
            <SideBarItem key={index} open={true} item={el} />
          ))}
        </Stack>
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: colors.main, boxShadow: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // width: "90%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <AppInput
              inputStyle={{ backgroundColor: "white" }}
              containerStyle={{
                bgcolor: "white",
                borderRadius: "10px",
              }}
            />
          </Box>

          <IconButton onClick={onClick}>
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
