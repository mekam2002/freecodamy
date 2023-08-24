import React, { ReactNode, useState } from "react";
import { Stack, Typography } from "@mui/material";
import AppPopper from "../popper/AppPopper";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface Props {
  title: string;
  children?: ReactNode;
  rowSpacing?: number;
  titleStyle?: React.CSSProperties;
  rootStyle?: React.CSSProperties;
}

const style = {
  fontSize: 14,
  fontWeight: 400,
};

function FilterHeader({
  title,
  titleStyle,
  rootStyle,
  rowSpacing = 1,
  children,
}: Props) {
  const [show, setShow] = useState(false);
  const handleShowOpen = () => setShow(!show);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={rowSpacing}
      justifyContent="center"
      sx={{ ...rootStyle }}
    >
      <Typography sx={{ ...style, ...titleStyle }}>{title}</Typography>
      <AppPopper
        onClose={handleShowOpen}
        icon={<FilterAltIcon />}
        buttonStyle={{
          height: "22px",
          width: "auto",
          backgroundColor: "transparent",
        }}
      >
        {children}
      </AppPopper>
    </Stack>
  );
}

export default FilterHeader;
