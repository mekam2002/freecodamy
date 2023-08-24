import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

export default function TextAnimation() {
  return (
    <Box>
      {[...Array(10)].map((el: any, index: number) => (
        <Stack key={index} sx={{ width: "100%" }} spacing={5}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Stack>
      ))}
    </Box>
  );
}
