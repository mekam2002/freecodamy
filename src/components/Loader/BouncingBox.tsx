import React, { useEffect, useState } from "react";
import "./BouncingBox.css";
import { Stack } from "@mui/material";

const BouncingBox: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setActiveIndex((prevIndex: any) => (prevIndex + 1) % 6);
    }, 1500); // Adjust the timing as needed

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="squares-container">
      <div className="initial-line"></div>
      <Stack direction={"row"} mt={4}>
        {[0, 1, 2, 3, 5].map((index) => (
          <div
            key={index}
            className={
              activeIndex === index ? "square bounce-animation" : "square"
            }
          ></div>
        ))}
      </Stack>
      {/* <div className="square bounce-animation"></div> */}
      {/* <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div> */}
    </div>
  );
};

export default BouncingBox;
