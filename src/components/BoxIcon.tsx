import { IconButton, IconButtonProps } from "@mui/material";
import { Close } from "@mui/icons-material";

import React from "react";

export default function BoxIcon({ children, ...rest }: IconButtonProps) {
  return (
    <IconButton
      sx={{
        borderRadius: 1,
        background: "#8392A115",
        "&:hover": { background: "#8392A115" },
      }}
      {...rest}
    >
      {children ?? <Close />}
    </IconButton>
  );
}
