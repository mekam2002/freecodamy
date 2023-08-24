import React from "react";
import { Box, Radio, Typography } from "@mui/material";
import useGetColors from "../../hook/useGetColors";

interface Props {
  label?: string;
  checked?: boolean;
  onClick?: () => void;
  containerStyle?: React.CSSProperties;
  checkedColor?: string;
}

const AppRadio: React.FC<Props> = ({
  label,
  checkedColor,
  checked,
  onClick,
  containerStyle,
}) => {
  const colors = useGetColors();
  return (
    <Box
      className="flex"
      sx={{
        padding: "2px 2px 2px 0px",
        cursor: "pointer",
        ...containerStyle,
      }}
      onClick={onClick}
    >
      <Radio
        checked={checked}
        sx={{
          padding: 0,
          "&.Mui-checked": {
            color: checkedColor || colors.orange,
          },
        }}
      />
      <Typography
        className="text-14 font-500"
        sx={{
          color: "#344051",
          mx: "12px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default AppRadio;
