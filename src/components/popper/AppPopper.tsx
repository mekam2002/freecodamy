import * as React from "react";
import { Close } from "@mui/icons-material";
import { Box, IconButton, Popover, SxProps, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./AppPopper.css";
import AppButton from "../button/AppButton";
import useGetColors from "../../hook/useGetColors";

export default function AppPopper({
  icon,
  showHeader = false,
  buttonStyle,
  containerStyle,
  placement = "right",
  closeOnClick = false,
  children,
  popperStyle,
  showButton = false,
  show = true,
}: {
  icon?: JSX.Element;
  showHeader?: boolean;
  showButton?: boolean;
  closeOnClick?: boolean;
  placement?: "right" | "center" | "left";
  buttonStyle?: React.CSSProperties | SxProps;
  containerStyle?: React.CSSProperties;
  popperStyle?: React.CSSProperties;
  onClose?: () => void;
  children?: React.ReactNode;
  show?: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onMouseClick = () => {
    if (closeOnClick) {
      handleClose();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const colors = useGetColors();
  return (
    <Box>
      <IconButton
        sx={{
          backgroundColor: colors.main,
          height: 45,
          width: 45,
          borderRadius: "8px",
          ...buttonStyle,
        }}
        onClick={handleClick}
      >
        {icon || <FilterAltIcon />}
      </IconButton>
      <Popover
        id={id}
        open={show && open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: placement,
        }}
        sx={{ ...popperStyle }}
      >
        <Box
          sx={{ borderRadius: 2, p: 3, ...containerStyle }}
          onClick={onMouseClick}
        >
          {children}
          {showButton ? (
            <Box className="flex-row-end" sx={{ mt: "80px" }}>
              <AppButton
                title={"apply_filter"}
                containerStyle={{ width: "50%" }}
              />
            </Box>
          ) : null}
        </Box>
      </Popover>
    </Box>
  );
}
