import { Stack } from "@mui/material";
import React from "react";
import SvgColor from "react-svg-color";
import useGetColors from "../hook/useGetColors";

interface Props {
  svg: any;
  color?: string;
  width?: number;
  rootStyle?: React.CSSProperties;
  isUniqueColor?: boolean;
}

function SvgContainer({
  svg,
  color,
  width = 20,
  rootStyle,
  isUniqueColor,
}: Props) {
  const primary = useGetColors().primary;
  const inColor = color || primary;
  return (
    <Stack sx={{ ...rootStyle }}>
      <SvgColor
        svg={svg}
        width={width}
        colors={
          isUniqueColor
            ? color
            : [inColor, inColor, inColor, inColor, inColor, inColor]
        }
      />
    </Stack>
  );
}

export default SvgContainer;
