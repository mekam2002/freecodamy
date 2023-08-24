import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { SxProps, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/strings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface Props {
  title?: string;
  list?: string[];
  popperStyle?: React.CSSProperties;
  onChange?: (ev: any) => void;
  placeholder?: string;
  value?: any;
  menuItemStyle?: SxProps;
  menuTextStyle?: SxProps;
  containerStyle?: SxProps;
}

export default function CustomMenu({
  title,
  value,
  list = [],
  onChange,
  popperStyle,
  placeholder = "select",
  menuItemStyle,
  menuTextStyle,
  containerStyle,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (value: string) => {
    console.log(value);
    onChange?.(value);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack spacing={1} sx={{ ...containerStyle }}>
      <Typography width={1} color="#333333">
        {title}
      </Typography>
      <Button
        disableRipple
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "45px",
          border: "1px solid #ced4da",
          borderRadius: "8px",
          textTransform: "capitalize",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <Stack
          direction="row"
          width={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography className="text-14 font-500" color="#333333">
            {value || placeholder}
          </Typography>
          <ArrowDropDownIcon />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ width: "100%" }}
      >
        <Stack sx={{ borderBottom: "1px solid #E6E6E6", ...popperStyle }}>
          {list.map((item: string, i: number) => (
            <MenuItem
              key={i}
              sx={{
                py: "10px",
                width: "100%",
                ...menuItemStyle,
              }}
              onClick={() => handleSelect(item)}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#333333",
                  ...menuTextStyle,
                }}
              >
                {capitalizeFirstLetter(item as string)}
              </Typography>
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </Stack>
  );
}
