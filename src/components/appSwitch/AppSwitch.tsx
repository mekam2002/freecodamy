import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { capitalizeFirstLetter } from "../../utils/strings";

const IOSSwitch = styled((props: SwitchProps | any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, props }) => {
  return {
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            props?.bg ||
            (theme.palette.mode === "dark" ? "#5C8833" : "#FF9160"),
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#177ddc",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  };
});

export default function AppSwitch({
  checked,
  onCheck,
  label,
  isIOS,
  style,
}: {
  checked: boolean;
  isIOS?: boolean;
  onCheck?: () => void;
  label?: string;
  style?: React.CSSProperties;
}) {
  return (
    <FormGroup sx={{ ...style }}>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{
              m: 1,
            }}
            bg="red"
            checked={checked}
            onChange={onCheck}
          />
        }
        label={capitalizeFirstLetter(label ?? "")}
      />
    </FormGroup>
  );
}
