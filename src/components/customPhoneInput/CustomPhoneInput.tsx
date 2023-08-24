import React, { useState } from "react";
import { Box, Typography, TypographyProps } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import useGetColors from "../../hook/useGetColors";

interface Props {
  title?: string | null;
  country?: string;
  value?: string;
  onChange?: (args: string, country?: any) => void;
  rootStyle?: React.CSSProperties;
  titleStyle?: TypographyProps;
  phoneContainerStyle?: React.CSSProperties;
}

const CustomPhoneInput = ({
  title,
  onChange,
  country = "CM",
  value,
  rootStyle,
  titleStyle,
  phoneContainerStyle,
  ...rest
}: Props) => {
  const colors = useGetColors();
  const [borderColor, setBorderColor] = useState("#CED2DA");

  const onFocus = () => {
    setBorderColor("#8392A2");
  };
  const onBlur = () => {
    setBorderColor("#CED2DA");
  };
  return (
    <Box sx={{ minWidth: "230px", ...rootStyle }}>
      {title ? (
        <Typography
          sx={{
            color: "#344054",
            fontSize: "14px",

            ...titleStyle,
          }}
        >
          {title}
        </Typography>
      ) : null}
      <PhoneInput
        onFocus={onFocus}
        onBlur={onBlur}
        country={country.toLowerCase()}
        value={value}
        containerStyle={{
          width: "100%",
          marginTop: "6px",
          border: "none",
          height: 44,
          ...phoneContainerStyle,
        }}
        inputStyle={{
          width: "100%",
          height: "100%",
          color: "#292D32",
          borderRadius: "8px",

          borderColor: borderColor,
        }}
        buttonStyle={{
          borderColor: borderColor,
          borderRadius: "8px",

          borderRightWidth: 0,
          backgroundColor: colors.white,
        }}
        onChange={(phone: string, country: any) => onChange?.(phone, country)}
        {...rest}
      />
    </Box>
  );
};

export default CustomPhoneInput;
