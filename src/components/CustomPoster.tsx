import { Typography } from "@mui/material";
import React from "react";
import useGetColors from "../hook/useGetColors";

interface Props {
  value: string;
  posterStyle?: React.CSSProperties;
}

export default function CustomPoster({ value, posterStyle }: Props) {
  const primary = useGetColors();
  return (
    <Typography
      sx={{
        mb: 1,
        textAlign: "center",
        width: "20%",
        fontSize: 13,
        border: `1px solid ${primary.light_green_2}`,
        borderRadius: "20px",
        backgroundColor: primary.light_green,
        ...posterStyle,
      }}
    >
      {value}
    </Typography>
  );
}
