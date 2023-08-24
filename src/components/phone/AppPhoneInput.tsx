import React from "react";
import { Box, Typography, TypographyProps } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./AppPhone.css";
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

const AppPhoneInput = ({
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
  return (
    <Box sx={{ position: "relative", minWidth: "230px", ...rootStyle }}>
      {title ? (
        <Typography
          sx={{
            color: "#344051",
            fontSize: 14,
            fontWeight: 500,
            ...titleStyle,
          }}
        >
          {title}
        </Typography>
      ) : null}
      <PhoneInput
        country={country.toLowerCase()}
        value={value}
        containerStyle={{
          width: "100%",
          marginTop: "6px",

          border: "none",
          height: 45,
          ...phoneContainerStyle,
        }}
        inputStyle={{
          width: "100%",
          height: "100%",
          color: "#292D32",
          borderColor: "#E6E6E6",
          border: "1px solid #CED2DA",
        }}
        buttonStyle={{
          borderColor: "#E6E6E6",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          borderRightWidth: 0,
          backgroundColor: colors.white,
        }}
        onChange={(phone: string, country: any) => onChange?.(phone, country)}
        {...rest}
      />
    </Box>
  );
};

export default AppPhoneInput;
