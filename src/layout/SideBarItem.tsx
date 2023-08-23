import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";

interface Props {
  open: boolean;
  onClick?: () => {};
  rootStyle?: React.CSSProperties;
  item?: any;
}
export default function SideBarItem({
  open,
  onClick,
  rootStyle,
  item,
}: Props) {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook
  const isActive = (path: any) => location.pathname?.startsWith(path);

  const onNavigate = (route: string) => {
    if (onClick) {
      onClick?.();
      return;
    }
    navigate(route);
  };
  return (
    <ListItem
      onClick={() => onNavigate(item.path)}
      sx={{
        backgroundColor: isActive(item.path) ? "white" : "#006D5B",
        // width: isTablet ? "48px" : "100%",
        width: "100%",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        height: "48px",
        justifyContent: "center",
        ...rootStyle,
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {item.activeIcon}
        </ListItemIcon>
        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
