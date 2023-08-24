import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string | ReactNode;
  value: string | ReactNode;
  titleStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  rootStyle?: React.CSSProperties;
}

function AppKeyValue({
  title,
  value,
  titleStyle,
  valueStyle,
  rootStyle,
}: Props) {
  return (
    <Box sx={{ ...rootStyle }}>
      <Typography sx={{ color: "#757575", fontSize: 12, ...titleStyle }}>
        {title}
      </Typography>
      <Typography sx={{ ...valueStyle}}>{value}</Typography>
    </Box>
  );
}

export default AppKeyValue;
