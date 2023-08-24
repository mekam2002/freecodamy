import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import React from "react";
import useGetColors from "../hook/useGetColors";

export default function CustomButton({
  sx,
  children,
  ...rest
}: LoadingButtonProps) {
  const colors = useGetColors();
  return (
    <LoadingButton
      sx={{
        width: 148,
        boxShadow: 0,
        height: 44,
        textTransform: "none",
        borderRadius: 2,
        color: "#fff",
        bgcolor: colors.red,
        "&:hover": {
          bgcolor: colors.red,
          opacity: 0.95,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
}
