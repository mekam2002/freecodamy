import React, { useState, useEffect } from "react";
import "./Loader.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Box, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BouncingBox from "./BouncingBox";
const Loader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setActiveIndex((prevIndex: any) => (prevIndex + 1) % 6);
    }, 300); // Adjust the timing as needed

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SettingsIcon
          className="rotate-icon"
          sx={{ color: "grey", width: 100, height: 100 }}
        />
      </Box>

      <Typography sx={{ fontSize: "42px", fontWeight: 600 }}>
        {"Soon Available"}
      </Typography>
      <Stack direction={"row"} mt={4}>
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`square ${index === activeIndex ? "animate" : ""}`}
          ></div>
        ))}
      </Stack>
    </Box>
  );
};

export default Loader;
