import {
  Box,
  InputAdornment,
  InputBase,
  SxProps,
  Typography
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import { capitalizeFirstLetter } from "../utils/strings";

interface Props {
  title?: string | ReactNode | null;
  placeholder?: string;
  titleStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  value?: string;
  type?: string;
  containerStyle?: SxProps;
  onChange?: (value: string) => void;
}

const AppInput: React.FC<Props> = ({
  title,
  type,
  titleStyle,
  inputStyle,
  placeholder,
  containerStyle,
  startIcon,
  endIcon,
  onChange,
  value
}) => {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(ev.target.value);
  };

  const [borderColor, setBorderColor] = useState("#CED2DA");

  const onFocus = () => {
    setBorderColor("#8392A2");
  };
  const onBlur = () => {
    setBorderColor("#CED2DA");
  };

  return (
    <Box sx={{ minWidth: "230px", ...containerStyle }}>
      {title ? (
        <Typography
          sx={{
            color: "#344051",
            fontSize: 14,
            fontWeight: 500,
            ...titleStyle
          }}
        >
          {typeof title === "string" ? capitalizeFirstLetter(title) : title}
        </Typography>
      ) : null}
      <InputBase
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type || "text"}
        sx={{
          border: `1px solid ${borderColor}`,
          height: 44,
          color: "#292D32",
          fontSize: "16px",
          padding: "10px 8px 10px 12px",
          borderRadius: "8px",
          marginTop: title ? "6px" : 0,
          width: "100%",
          ...inputStyle
        }}
        startAdornment={
          <InputAdornment position="start">{startIcon}</InputAdornment>
        }
        endAdornment={<InputAdornment position="end">{endIcon}</InputAdornment>}
      />
    </Box>
  );
};
export default AppInput;
