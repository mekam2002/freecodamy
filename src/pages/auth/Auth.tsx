import React from "react";
import useGetColors from "../../hook/useGetColors";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";

export default function Auth() {
  const colors = useGetColors();
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <Box
        sx={{
          bgcolor: colors.main,
          width: "60%",
          height: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 32, fontWeight: 600 }}>
          Freecodamy
        </Typography>
        <Typography sx={{ fontSize: 28, fontWeight: 500 }}>
          Where the code set you free!!!
        </Typography>
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "40%",
          px: 8,
          bgcolor: colors.bg,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
